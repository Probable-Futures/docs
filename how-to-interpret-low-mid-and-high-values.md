---
layout: default
title: How to interpret low, mid, and high values
nav_order: 4
parent: API
---

# How to interpret low, mid, and high values

The API returns `lowValue`, `midValue`, and `highValue` for each location and warming scenario queried. These values represent the values for three possible years among a distribution of many possible outcomes that could occur in any given year. For example, in New York City in a 1.5°C warming scenario, there could be a cool year with six days above 32°C, an average year with about 17 days above 32°C, or a warm year with 28 days above 32°C. The low and high values are not the lowest or highest possible values that could occur in the specified location at a specified warming scenario but are points on a range. In other words, the range goes beyond these low and high points.

For some Probable Futures maps, the low and high are 10th and 90th percentile values and for others they are 5th and 95th percentile values. In other words, for maps with 10th and 90th percentiles, the low and high values should be expected on average once every ten years but can certainly happen more than once in any specific ten year period. Also, since 20% of the values fall outside of the 10th and 90th percentile, lower lows and higher highs will certainly occur as well. For 5th and 95th percentiles, 10% of the values fall outside of the values. So, for these maps, the low and high values should be expected once in every twenty years on average but lower lowers and higher highs will certainly occur as well.
