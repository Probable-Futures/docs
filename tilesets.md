---
layout: default
title: Tilesets
nav_order: 2
parent: Maps
---

# Tilesets

Probable Futures maps are made up of Mapbox tilesets. A Mapbox tileset is a collection of raster or vector data broken up into a uniform grid of square tiles at up to 22 preset zoom levels.

Probable Futures tilesets can be used to create maps in your own application. To see a complete list of tileset IDs for Probable Futures maps, please see the [Probable Futures Public Dataset Inventory](https://docs.google.com/spreadsheets/d/1pE7KBSzsKXq7Qwsxgic_0YCIMi-dYtOEEFlGcvRLdOg/edit#gid=254758432).

To learn more about Mapbox tilesets, please see [Mapbox's Mapbox Tiling Service page](https://www.mapbox.com/mts).

{: .note }
Every Probable Futures map is made up of two tilesets and each tileset is composed of many layers we call regions. Each map is divided in exactly the same way: one tileset for the east (e.g., `probablefutures.40104-east-v3`) with Eurasia, Africa, Australia in the east and one for the west (e.g., `probablefutures.40104-west-v3`) with the Americas. There are 24 regions per map: eight for Asia and Oceana (e.g., `region_as_oc_1`), nine for Europe and Africa (e.g., `region_eu_af_2`), and seven for the Americas (e.g., `region_na_sa_3`). Each region is created within a specified bounding box defined by its coordinates. For example, the region with id `region_as_oc_7`, is located in the east tileset and has a bounding box, `bbox = [65.2, -25.8, 180, -10.58]`. These divisions are necessary because Mapbox has size limitations on both tilesets overall and layers within tilesets. Climate models are larger than data typically displayed in tilesets. Each of our maps has approximately 500,000 data points. Generally, these divisions can be ignored. For example, when creating a map with our [Mapbox quick-start](/mapbox-quick-start.md) guide, details about tileset and layer divisions are abstracted away in the Mapbox style file and need not be understood or modified for most use-cases.

## Data coverage and special values
Probable Futures maps contain climate data for most land on Earth but do not cover parts of the Arctic and Antarctic and remote islands. This is because the data comes from CORDEX-CORE framework, a standardization for regional climate model output. To learn more about where the data comes from, visit the [Science page](https://probablefutures.org/science/our-maps/).

We also choose to omit data in deserts for our maps of drought, wildfire, and water balance because these areas are already consistently dry. These dry lands are noted in tilesets with a special value: `-88888`.

## Map styles

After creating the tileset, we create a map style which is compatible with Mapbox and can be displayed in the browser. This Mapbox style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a JSON object with specific root level and nested properties. This specification defines and describes these properties. For example, in one part of this JSON object, you can specify the bins and colors to use based on the data that exists in the tileset. You can specify an attribute, such as `data_1c_mean`, and then specify what colors to use at different values of this attribute. This can be done using Mapbox expressions like this:

```
[
    "step",
    ["get", "data_1c_mean"],
    "#515866",
    1,
    "#0ED5A3",
    8,
    "#0099E4",
    31,
    "#8BE1FF",
    91,
    "#FF45D0",
    181,
    "#D70066"
]
```

In the above example, any values of `data_1c_mean` that are less than 1 will be colored with `#515866`, values between 1 and 8 will be colored with `#0ED5A3`, and so on.

When creating map styles you can also include some of the default layers provided by Mapbox like place labels and geopolitical boundaries.

## Tileset feature attributes

Tileset feature attributes represent data in a Mapbox Tiling Service map. Probable Futures maps use feature attributes to represent a range of three expected values for each warming scenario, resulting in a total of 18 values per grid cell. These values can be seen by inspecting a tileset in Mapbox studio. To expose them in an application for users, they can be queried and displayed in a pop-up on a map as you can see by clicking on any square with data on any map on probablefutures.org/maps.

| Warming scenario | Tileset feature name |
| ---------------- | -------------------- |
| 0.5°C            | data_baseline_high   |
|                  | data_baseline_low    |
|                  | data_baseline_mid    |
| 1°C              | data_1c_high         |
|                  | data_1c_low          |
|                  | data_1c_mid          |
| 1.5°C            | data_1_5c_high       |
|                  | data_1_5c_low        |
|                  | data_1_5c_mid        |
| 2°C              | data_2c_high         |
|                  | data_2c_low          |
|                  | data_2c_mid          |
| 2.5°C            | data_2_5c_high       |
|                  | data_2_5c_low        |
|                  | data_2_5c_mid        |
| 3°C              | data_3c_high         |
|                  | data_3c_low          |
|                  | data_3c_mid          |

### Range of expected values

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
