---
layout: default
title: Ranges of outcomes
nav_order: 3
parent: Data background
---

## Ranges of outcomes

Probable Futures maps contain low, mid, and high values for each location and warming scenario. You can think of these values as a range. People must be prepared for the full range in the same way we all must be prepared for a range of weather. In other words, this range can be thought of as potential outcomes in any given year in the specified warming scenario for the specified location.

In some places, the ranges of potential outcomes are wider. For those of us who live in places that can be both very hot and very cold, we know this well. We must own different types of clothing for summer and winter. In other places, ranges are narrower. In places with narrower ranges, people don't need so many different types of clothing.

As the climate changes, these ranges change in every place. The range of values in the API offer an opportunity to prepare for ranges of outcomes that are manageable and to seek changes in human actions that can help avoid ranges in warming scenarios that are unmanageable.

The low and high values are not the lowest or highest possible values that could occur in the specified location at a specified warming scenario. In other words, the range goes beyond these low and high points.

For all current Probable Futures maps with low and high values, the low and high are 5th and 95th percentile values. So, for these maps, the low and high values should be expected about 5% of the time each, on average. Lower lows and higher highs may occur as well.

## Range of expected values: applied example

Consider [the number of days above 32°C (90°F) in Delhi in a 1.5°C warming scenario](https://probablefutures.org/maps/?selected_map=days_above_32c&volume=heat&warming_scenario=1.5&map_version=latest#9.18/28.5824/77.1749). In this scenario, the global average temperature is 1.5°C above the pre-industrial global average. Delhi is warmer too. It experiences new ranges of weather.

As you can see by clicking on Delhi in the map linked above, Delhi with a climate of 1.5°C above the pre-industrial climate typically experiences 227 days above 32°C on average. In a warm year, about 5% of the time, Delhi experiences about 264 days above 32°C. In a cool year, about 5% of the time, Delhi experiences about 191 days above 32°C.

If the warming scenario numbers increase from 1.5°C above pre-industrial to 1.6°C, 1.7°C and eventually 2°C, the range shifts warmer again. If you click the 2°C tab, you will see the range of expected values in Delhi has shifted. In this 2°C scenario, the low, mid and high number of days above 32°C is 195, 232, and 269. You can think of this as a bell curve of values shifting to the right, toward the warmer side of a graph of temperatures in a place. Often the shape of the bell curve changes as it shifts.

- `low`: This is the low value in the range. These conditions should be expected approximately 5% of the time.
- `mid`: This is the average or median condition. Conditions near this value should be expected in a typical year.
- `high`: This is the high value in the range. These conditions should be expected approximately 5% of the time.

### Note on average and median values

When creating these maps, we realized the range of values sometimes formed a normal distribution and other times skewed toward the tail. To provide reliable expected mid values, we chose to use median on maps that tend to have ranges with long tails.

- Maps of temperature use average
- Maps of precipitation use median
- Maps of dryness vary: the two maps of drought use average and the map of wildfire and water balance use median
- The climate zones map uses average

To see the full list of the percentiles used for each map, please see the [Low-Mid-High Values tab in the Probable Futures Public Dataset Inventory](https://docs.google.com/spreadsheets/d/1pE7KBSzsKXq7Qwsxgic_0YCIMi-dYtOEEFlGcvRLdOg/edit#gid=180787380).
