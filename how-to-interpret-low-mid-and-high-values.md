---
layout: default
title: How to interpret low, mid, and high values
nav_order: 4
parent: API
---

# How to interpret low, mid, and high values

The API returns `lowValue`, `midValue`, and `highValue` for each location and warming scenario queried. These represent the range of outcomes that could occur in any given year for the specified location in the specified warming scenario.

In some places, ranges are wider in our current warming scenario. For those of us who live in places that can be both very hot and very cold, we know this well. We must own different types of clothing such as short-sleeved shirts and pants for summer and big coats for winter. In other places, ranges are narrower in our current warming scenario. In places with narrower ranges, people don't need to own so many different types of clothing.

As the climate changes, these ranges change in every place. The range of values in the API offer an opportunity to prepare for ranges of outcomes that are manageable and to seek changes that can help us avoid ranges in warming scenarios that are unmanageable.

The low and high values are not the lowest or highest possible values that could occur in the specified location at a specified warming scenario. In other words, the range goes beyond these low and high points.

For some Probable Futures maps, the low and high are 10th and 90th percentile values and for others they are 5th and 95th percentile values. In other words, for maps with 10th and 90th percentiles, the low and high values should be expected on average once every ten years but can certainly happen more than once in any specific ten year period. Also, since 20% of the values fall outside of the 10th and 90th percentile, lower lows and higher highs will certainly occur as well. For 5th and 95th percentiles, 10% of the values fall outside of the values. So, for these maps, the low and high values should be expected once in every twenty years on average but lower lows and higher highs will certainly occur as well.
