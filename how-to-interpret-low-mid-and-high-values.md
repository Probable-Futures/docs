---
layout: default
title: How to interpret low, mid, and high values
nav_order: 4
parent: API
---

# How to interpret low, mid, and high values

The API returns `lowValue`, `midValue`, and `highValue` for each location and warming scenario queried. You can think of these values as a range. People must be prepared for the full range in the same way we all must be prepared for a range of weather. In other words, this range can be thought of as potential outcomes in any given year in the specified warming scenario for the specified location.

In some places, the ranges of potential outcomes are wider. For those of us who live in places that can be both very hot and very cold, we know this well. We must own different types of clothing for summer and winter. In other places, ranges are narrower. In places with narrower ranges, people don't need so many different types of clothing.

As the climate changes, these ranges change in every place. The range of values in the API offer an opportunity to prepare for ranges of outcomes that are manageable and to seek changes in human actions that can help avoid ranges in warming scenarios that are unmanageable.

The low and high values are not the lowest or highest possible values that could occur in the specified location at a specified warming scenario. In other words, the range goes beyond these low and high points.

For some Probable Futures maps, the low and high are 10th and 90th percentile values and for others they are 5th and 95th percentile values. In other words, for maps with 10th and 90th percentiles, the low and high values should be expected on average once every ten years but can certainly happen more than once in any specific ten year period. Also, since 20% of the values fall outside of the 10th and 90th percentile, lower lows and higher highs will certainly occur as well. For 5th and 95th percentiles, 10% of the values fall outside of the values. So, for these maps, the low and high values should be expected once in every twenty years on average but lower lows and higher highs will certainly occur as well.
