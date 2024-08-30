---
layout: default
title: Restyle and customize maps
nav_order: 4
parent: Use the maps
---


## Restyle and customize the maps

The Probable Futures maps are made of data encoded in [tilesets](/tilesets.md) and styled to apply color and bins. Bins are the groups of colors you see in the map key. They are defined by the number at which one color stops and another starts. For example in the [Days above 32°C (90°F) map](https://probablefutures.org/maps/?selected_map=days_above_32c), the first bin starts and stops at 0 and uses a gray color. The second bin starts at 1, stops at 7, and uses a green color. The third bin starts at 8, stops at 30, and uses a dark blue color.

We publish our custom [map styles](/tilesets/#map-styles) for all our maps, primarily for users who wish to customize the map designs according to their own preferences.

### How to restyle and customize the maps

1. Choose and download the map style json you want from [https://github.com/Probable-Futures/docs/tree/main/mapStyles/v3-styles](https://github.com/Probable-Futures/docs/tree/main/mapStyles/v3-styles)
2. Sign in to or sign up for a [Mapbox account](https://account.mapbox.com/auth/signin/)
3. Navigate to [Mapbox Studio](https://studio.mapbox.com/) where you will create and style your maps
4. On the Styles page, click the "New style" button
5. Click the "Upload" button, and upload the json file you downloaded in step 1
6. Click the "Customize" button. This will create and open your map using the chosen style. After that, you can start customizing your map by changing colors, adding/removing layers and much more.
7. To learn more about customizing Mapbox maps, please see the [Mapbox documentation](https://docs.mapbox.com/).
