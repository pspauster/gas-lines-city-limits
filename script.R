library(tidyverse)
library(sf)
library(mapview)

lines <- read_sf("data/map-2.geojson") %>% 
  st_make_valid()

st_crs(lines)
mapview(lines)

points <- read_sf("data/points-layer.geojson")
st_crs(points)
mapview(points)

ggplot(points)+
  geom_sf(mapping = aes(), color = "red")+
  geom_sf(lines, mapping = aes(), color = "gray")

m <- mapview(lines)
leafem::addFeatures(m, points)