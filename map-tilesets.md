---
layout: default
title: Map tilesets
nav_order: 5
parent: Maps
---

# Map tilesets

Probable Futures maps are made up of Mapbox tilesets. A Mapbox tileset is a collection of raster or vector data broken up into a uniform grid of square tiles at up to 22 preset zoom levels. Probable Futures tilesets are vector and start at zoom level 2.

To learn more about Mapbox tilesets, please see [Mapbox's Tiling Service page](https://www.mapbox.com/mts).

## Tileset IDs

Probable Futures tilesets can be used to create maps in your own application. To find tilesets for the map(s) you would like to use, you will need the [Mapbox tileset IDs](https://docs.mapbox.com/help/glossary/tileset-id/) for the map(s).

The full list of tileset IDs for Probable Futures maps are located in the [Probable Futures Public Dataset Inventory](https://docs.google.com/spreadsheets/d/1pE7KBSzsKXq7Qwsxgic_0YCIMi-dYtOEEFlGcvRLdOg/edit#gid=2095694025).

{: .note }
Every Probable Futures map is made up of two tilesets and each tileset is composed of many layers we call regions. To learn more about tileset structure, skip to the [tileset structure](/tilesets.md#tileset-structure) section.

## Map styles

After creating the tileset, we create a map style which is compatible with Mapbox and can be displayed in the browser. This Mapbox style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a JSON object with specific root level and nested properties. This specification defines and describes these properties. For example, in one part of this JSON object, you can specify the bins and colors to use based on the data that exists in the tileset. You can specify an attribute, such as `data_1c_mean`, and then specify what colors to use at different values of this attribute. This can be done using Mapbox expressions like this:

```js
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

## Tileset structure

The Probable Futures tileset structure was designed to accommodate the large amount of data contained within each tileset while still being accessible for anyone who is interested in using the tilesets in their own application, website, or other context.

### Tilesets and regions

Every Probable Futures map is made up of two tilesets and each tileset is composed of many layers we call regions.

Each map has one tileset for the east (e.g., `probablefutures.40104-east-v3`) with Eurasia, Africa, Australia and one for the west (e.g., `probablefutures.40104-west-v3`) with the Americas.

There are 24 regions per map: eight for Asia and Oceana (e.g., `region_as_oc_1`), nine for Europe and Africa (e.g., `region_eu_af_2`), and seven for the Americas (e.g., `region_na_sa_3`).

Each region is created within a specified bounding box defined by its coordinates. For example, the region with id `region_as_oc_7`, is located in the east tileset and has a bounding box, `bbox = [65.2, -25.8, 180, -10.58]`. These divisions are necessary because Mapbox has size limitations on both tilesets overall and layers within tilesets. Climate models are larger than data typically displayed in tilesets. Each of our maps has approximately 500,000 data points. Generally, these divisions can be ignored. For example, when creating a map with our [Mapbox quick-start](/mapbox-quick-start.md) guide, details about tileset and layer divisions are abstracted away in the Mapbox style file and need not be understood or modified for most use-cases.

### Zoom levels

Probable Futures tilesets start at zoom level 2, when zoomed all the way out, and can be zoomed in up to the maximum zoom level of 22. Zoom levels 0 and 1 are omitted from Probable Futures tilesets because the large number of data points in each tile do not fit in the smaller number of tiles present in Mapbox tilesets at zoom levels 0 and 1.

Since Probable Futures maps have a resolution of 0.2° latitude and longitude, zooming beyond zoom level 10 begins to show only one of the 0.2° squares and is therefore typically not useful, but is doable if desired.

### Data coverage and special values

Probable Futures maps contain climate data for most land on Earth but do not cover parts of the Arctic and Antarctic and remote islands. This is because the data comes from CORDEX-CORE framework, a standardization for regional climate model output. To learn more about where the data comes from, visit the [Science page](https://probablefutures.org/science/our-maps/).

We also choose to omit data in deserts for our maps of drought, wildfire, and water balance because these areas are already consistently dry. These dry lands are noted in tilesets with a special value: `-88888`.

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
