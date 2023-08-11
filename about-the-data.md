---
layout: default
title: About the data
nav_order: 1
has_children: false
---

# About the Probable Futures data

All resources described in these docs refer to different ways of accessing or visualizing the same underlying data which are global maps of modeled climate conditions in different scenarios. To see how they look and work, check out the maps on the [Probable Futures website](https://probablefutures.org/maps). By understanding the warming scenarios in these data and maps, anyone can see the climate changes happening now and soon, prepare for the futures that are likely, and work to avoid the ones that carry the most profound risks for our world.

The maps on the Probable Futures website demonstrate one way of visualizing the underlying datasets. The data can be viewed, explored, and probed in many ways. The contents of these docs describe some of the ways.

## Journey of the data

Probable Futures data and maps are made of widely used and recognized climate models. They were not created by Probable Futures and are not owned by Probable Futures. They are open source resources developed by climate scientists over many decades. Probable Futures creates education, digital infrastructure, and tools to make the data and maps accessible to people and applicable to practical planning and decision-making.

#### Where the data begins
Climate models are created and maintained by scientific institutions around the world. These models split the world into a grid covering the world and model the climate in each of these squares, which are sometimes called grid cells. Probable Futures maps have a resolution of 0.2° latitude and longitude per side of each grid cell which is approximately the size of a typical city's metro area. We chose this resolution because it provides high enough resolution to make practical decisions about the climate but still results in maps that are small enough to be rendered on internet connections available around the world. Higher resolutions have diminishing returns: if there is a drought in your neighborhood, there is a drought in the neighborhood nearby too.

These institutions make their models available for download. Organizations that do climate model work, including those you may have heard of like the IPCC, analyze the models to produce predictions about future climate and weather which are often published in long written reports with charts, maps, and graphs. Although climate models have technically been publicly available for a long time, analyzing and interpreting them directly requires so much specialized climate science knowledge that few people outside of climate scientists have actually done so. Probable Futures makes climate models available and accessible to anyone, anywhere. [See "Who makes climate models?" on the Science page for more](https://probablefutures.org/science/climate-models/).

#### How we get it
Probable Futures has a climate science partner called [Woodwell Climate Research Center](https://www.woodwellclimate.org/). Researchers at Woodwell download the data on servers hosted by the institutions mentioned above and create maps which they share with Probable Futures.

#### How we bring it online
The maps created by Woodwell are in a format commonly used for climate data called NetCDF. Because NetCDF files are not web-ready, we built a parser to read these files, process and format the data inside, and feed the datasets into our database. After that we create GeoJSON files which we use to create tilesets and styles using the Mapbox tiling service.

To learn more about tilesets, read the [tilesets page](/tilesets/md).

## Examples of applications of the data

Examples of how the data can be visualized as maps may be seen in the public maps application located at [probablefutures.org/maps](https://probablefutures.org/maps).

## Further reading

To learn more about climate models in general and the Probable Futures maps in particular, please visit [the Science page](https://probablefutures.org/science/) on probablefutures.org.
