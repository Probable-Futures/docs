---
layout: default
title: Map quick start
nav_order: 1
parent: Use the maps
---

## Map quick start

Start working with Probable Futures maps in less than five minutes with this simple guide.  

We will use [Mapbox Studio](https://studio.mapbox.com) to quickly get started with Mapbox's excellent visual map editing experience. If you don't have a Mapbox account, you will need to create one to use Mapbox Studio.

### Getting Started

The Probable Futures maps are made of data encoded in [tilesets](/tilesets.md) and styled to apply color and bins. Bins are the groups of colors you see in the map key. They are defined by the number at which one color stops and another starts. For example, in the [Days above 32°C (90°F) map](https://probablefutures.org/maps/?selected_map=days_above_32c), the first bin starts and stops at 0 and uses a gray color. The second bin starts at 1, stops at 7, and uses a green color. The third bin starts at 8, stops at 30, and uses a dark blue color.

You can easily start and customize maps using the following steps:

1. Choose and download the map style JSON file you want from [Probable Futures map styles folder on GitHub](https://github.com/Probable-Futures/docs/tree/main/mapStyles/v3-styles).
2. Sign in to or sign up for a [Mapbox account](https://account.mapbox.com/auth/signin/).
3. Navigate to [Mapbox Studio](https://studio.mapbox.com/).
4. On the Styles page, click the "New style" button.
5. Click the "Upload" button, and upload the JSON file you downloaded in step 1.
6. Click the "Customize" button to open your map using the chosen style. You can then start customizing your map by changing colors, adding/removing layers, and more.
7. To learn more about customizing Mapbox maps, please see the [Mapbox documentation](https://docs.mapbox.com/).

### How it works

The Mapbox Style JSON contains all the styles (colors, layers, etc.) and references to the Probable Futures tilesets, which contain the actual climate data.

The Probable Futures tilesets are public in Mapbox, so anyone can use Mapbox styles to make a map using Probable Futures data by referencing the appropriate tileset IDs for a given map. Visit the [tilesets page](./tilesets.md) to learn more about Probable Futures tilesets.
