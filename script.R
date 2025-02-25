library(tidyverse)
library(sf)
library(mapview)

lines <- read_sf("data/map-2.geojson") %>% 
  st_make_valid() %>% 
  mutate(geo_type = "line")

st_crs(lines)
mapview(lines)

points <- read_sf("data/points-layer.geojson") %>% 
  st_make_valid() %>% 
  mutate(geo_type = "point",
         Proposed = "Yes")
st_crs(points)
mapview(points)

ggplot(points)+
  geom_sf(mapping = aes(), color = "red")+
  geom_sf(lines, mapping = aes(), color = "gray")

m <- mapview(lines)
leafem::addFeatures(m, points)

all_together <- bind_rows(lines, points)

st_write(all_together, "data/gas_infra.geojson", append = F)
all_together %>% filter(Proposed == "Yes", geo_type == "line") %>% 
  st_write("data/test.geojson")
