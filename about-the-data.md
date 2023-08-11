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

## About the Data in Probable Futures Maps
### Range of Expected Values

Probable Futures maps contain low, mid, and high values for each location and warming scenario. You can think of these values as a range. People must be prepared for the full range in the same way we all must be prepared for a range of weather. In other words, this range can be thought of as potential outcomes in any given year in the specified warming scenario for the specified location.

In some places, the ranges of potential outcomes are wider. For those of us who live in places that can be both very hot and very cold, we know this well. We must own different types of clothing for summer and winter. In other places, ranges are narrower. In places with narrower ranges, people don't need so many different types of clothing.

As the climate changes, these ranges change in every place. The range of values in the API offer an opportunity to prepare for ranges of outcomes that are manageable and to seek changes in human actions that can help avoid ranges in warming scenarios that are unmanageable.

The low and high values are not the lowest or highest possible values that could occur in the specified location at a specified warming scenario. In other words, the range goes beyond these low and high points.

For all current Probable Futures maps with low and high values, the low and high are 5th and 95th percentile values. So, for these maps, the low and high values should be expected about 5% of the time each, on average. Lower lows and higher highs may occur as well.

#### Range of expected values: applied example

Consider [the number of days above 32°C (90°F) in Delhi in a 1.5°C warming scenario](https://probablefutures.org/maps/?selected_map=days_above_32c&volume=heat&warming_scenario=1.5&map_version=latest#9.18/28.5824/77.1749). In this scenario, the global average temperature is 1.5°C above the pre-industrial global average. Delhi is warmer too. It experiences new ranges of weather.

As you can see by clicking on Delhi in the map linked above, Delhi with a climate of 1.5°C above the pre-industrial climate typically experiences 227 days above 32°C on average. In a warm year, about 5% of the time, Delhi experiences about 264 days above 32°C. In a cool year, about 5% of the time, Delhi experiences about 191 days above 32°C.

If the warming scenario numbers increase from 1.5°C above pre-industrial to 1.6°C, 1.7°C and eventually 2°C, the range shifts warmer again. If you click the 2°C tab, you will see the range of expected values in Delhi has shifted. In this 2°C scenario, the low, mid and high number of days above 32°C is 195, 232, and 269. You can think of this as a bell curve of values shifting to the right, toward the warmer side of a graph of temperatures in a place. Often the shape of the bell curve changes as it shifts.

-   `low`: This is the low value in the range. These conditions should be expected approximately 5% of the time.
-   `mid`: This is the average or median condition. Conditions near this value should be expected in a typical year.
-   `high`: This is the high value in the range. These conditions should be expected approximately 5% of the time.

##### Note on average and median values
When creating these maps, we realized the range of values sometimes formed a normal distribution and other times skewed toward the tail. To provide reliable expected mid values, we chose to use median on maps that tend to have ranges with long tails.
- Maps of temperature use average
- Maps of precipitation use median
- Maps of dryness vary: the two maps of drought use average and the map of wildfire and water balance use median
- The climate zones map uses average

## Examples of applications of the data

Examples of how the data can be visualized as maps may be seen in the public maps application located at [probablefutures.org/maps](https://probablefutures.org/maps).

## Further reading

To learn more about climate models in general and the Probable Futures maps in particular, please visit [the Science page](https://probablefutures.org/science/) on probablefutures.org.
