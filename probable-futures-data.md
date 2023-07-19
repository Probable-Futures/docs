---
layout: default
title: Probable Futures Data
nav_order: 2
has_children: true
---

# About the Probable Futures data

Probable Futures data and maps are made of widely used and recognized climate models. Specifically, our models are sourced from the CORDEX-CORE framework, a standardization for regional climate model output.

## Journey of the data

#### Where the data begins
Climate models are created and maintained by scientific institutions around the world. These models split the world into a grid covering the world and model the climate in each of these squares, which are sometimes called grid cells. Probable Futures maps have a resolution of 0.2° latitude and longitude per side of each grid cell which is approximately the size of a typical city's metro area. We chose this resolution because it provides high enough resolution to make practical decisions about the climate but still results in maps that are small enough to be rendered on internet connections available around the world. Higher resolutions have diminishing returns: if there is a drought in your neighborhood, there is a drought in the neighborhood nearby too.

These institutions make their models available for download. Organizations that do climate model work, including those you may have heard of like the IPCC, analyze the models to produce predictions about future climate and weather which are often published in long written reports with charts, maps, and graphs. Although climate models have technically been publicly available for a long time, analyzing and interpreting them directly requires so much specialized climate science knowledge that few people outside of climate scientists have actually done so. Probable Futures makes climate models available and accessible to anyone, anywhere. [See "Who makes climate models?" on the Science page for more](https://probablefutures.org/science/climate-models/).

#### How we get it
Probable Futures has a climate science partner called [Woodwell Climate Research Center](https://www.woodwellclimate.org/). Researchers at Woodwell download the data on servers hosted by the institutions mentioned above and create maps which they share with Probable Futures.

#### How we bring it online
The maps created by Woodwell are in a format commonly used for climate data called NetCDF. Because NetCDF files are not web-ready, we built a parser to read these files, process and format the data inside, and feed the datasets into our database. After that we create GeoJSON files which we use to create tilesets and styles using the Mapbox tiling service.

## Examples of applications of the data

Examples of how the data can be visualized as maps may be seen in the public maps application located at [probablefutures.org/maps](https://probablefutures.org/maps).

## Further reading

To learn more about climate models in general and the Probable Futures maps in particular, please visit [the Science page](https://probablefutures.org/science/) on probablefutures.org.
