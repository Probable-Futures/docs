---
layout: default
title: Probable Futures Data
nav_order: 2
has_children: true
---

# About the Probable Futures data

Probable Futures data and maps come from the same climate models that are used nearly everywhere that climate models are used.

Climate models are created and maintained by scientific institutions around the world. These institutions make their models available for download. Organizations that do climate model work, including those you may have heard of like the IPCC, analyze the models to produce predictions about future climate and weather which are often published in long written reports with charts, maps, and graphs. Although climate models have technically been publicly available for a long time, analyzing and interpreting them directly requires so much specialized climate science knowledge that few people outside of climate scientists have actually done so. Probable Futures makes climate models available and accessible to anyone, anywhere.

## Journey of the data

Climate scientists develop and maintain models at research institutions, universities, and national laboratories around the world. [See "Who makes climate models?" on the Science page for more](https://probablefutures.org/science/climate-models/).

The Probable Futures climate science partner, Woodwell Climate Research Center, performs analysis on the data to create maps which they share with Probable Futures in a format commonly used for climate data called NetCDF. Because NetCDF files are not web-ready, we built a parser to read these files, process and format the data inside, and feed the datasets into our database. After that we create GeoJSON files which we use to create tilesets and styles using the Mapbox tiling service.

## Examples of applications of the data

Examples of how the data can be visualized as maps may be seen in the public maps application located at [probablefutures.org/maps](https://probablefutures.org/maps).

## Further reading

To learn more about climate models in general and the Probable Futures maps in particular, please visit [the science page](https://probablefutures.org/science/) on probablefutures.org.
