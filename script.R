library(tidyverse)
library(sf)
library(mapview)
library(janitor)

points <- read_csv("data/Fracked Gas  Infrastructure Expansion Projects since 2019 - Master Doc - Projects since 2019.csv") %>% 
  mutate(geo_type = "point",
         Proposed = "Yes") %>% 
  clean_names()

points_sf <- points %>% 
  filter(!is.na(latitude)) %>% 
  st_as_sf(coords=c("longitude", "latitude"), crs = st_crs(4326))

write_sf(points_sf, "data/gas_infra_points.geojson", append = F)

mapview(points_sf)

lines_info <- points %>% filter(is.na(latitude))

nyc <- data.frame(lon = -74.0060, lat = 40.7128)

# Convert to an sf point object
nyc_sf <- st_as_sf(nyc, coords = c("lon", "lat"), crs = 4326)
nyc_buffer <- st_buffer(nyc_sf, dist = 1000000)

mapview(nyc_buffer)

lines <- read_sf("data/ny-pipelines.geojson") %>% 
  clean_names() %>% 
  st_make_valid() %>% 
  select(-status) %>% 
  left_join(lines_info, by = "operator") %>% 
  st_intersection(nyc_buffer) %>% 
  st_set_crs(st_crs(points_sf)) %>% 
  mutate(proposed = if_else(operator == "Tennessee Gas Pipeline" & !fid %in%
                   c(
                     24080:24081,
                     24191:24193,
                     24079:24076,
                     24218,
                     24075,
                     240913,
                     240159,
                     240193,
                     24912:24917,
                     24187,
                     24159
                   ), NA,  proposed),
         status = if_else(operator == "Tennessee Gas Pipeline" & !fid %in%
                              c(
                                24080:24081,
                                24191:24193,
                                24079:24076,
                                24218,
                                24075,
                                240913,
                                240159,
                                240193,
                                24912:24917,
                                24187,
                                24159
                              ), NA,  status))

st_crs(lines)
mapview(lines %>% filter(operator == "Tennessee Gas Pipeline", is.na(status)), zcol = "status")

new_lines <- read_sf("data/pipes_new_only.geojson") %>% 
  clean_names() %>% 
  left_join(lines_info %>% select(-proposed), by = "operator")

st_crs(lines)
st_crs(new_lines)

ggplot(points_sf)+
  geom_sf(mapping = aes(), color = "red")+
  geom_sf(lines, mapping = aes(), color = "gray")+
  geom_sf(new_lines, mapping = aes(), color = 'blue')

m <- mapview(lines)
m2 <- leafem::addFeatures(m, points_sf)
leafem::addFeatures(m2, new_lines)

all_together <- bind_rows(lines, points_sf, new_lines)
  

st_write(all_together, "data/gas_infra.geojson", append = F)




# 
# all_together %>% filter(Proposed == "Yes", geo_type == "line") %>% 
#   st_write("data/test.geojson")

library(tigris)

ny_shapefile <- states(cb = TRUE) %>% 
  filter(NAME != "New York")

# Save the shapefile to a local file
st_write(ny_shapefile, "data/New_York_State.geojson", append = F)
