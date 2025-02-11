---
layout: default
title: Map APIs and embeds
nav_order: 2
parent: Maps
---

# Map APIs and embeds

This section is for people who want to integrate the Probable Futures maps into their own websites or applications. It is possible to achieve this in three ways:

1. Use the map APIs (npm packages) to integrate the maps into your own application, for example if you are creating an application where you will display more than one map. 
2. Download an embeddable map, for example to display a map in an article.
3. Customize, restyle, and host the maps with your own Mapbox account, for example if you would like to use different colors or bins on the maps.

### Use cases

These maps APIs can be used to:

- Add clear and compelling visual maps of our changing climate to any website, article, story, or app
- Show any place in the world, at any zoom level
- Do the above for a single warming scenario or multiple, in comparison or sequentially

## Embeddable maps API - using React 

`@probable-futures/probable-futures-maps` is an npm package that enables developers to integrate dynamic and interactive climate maps into their web applications using React.

This package offers ready-to-use React components used to render the Probable Futures maps based on a variety of props.

Learn more about this package and find installation instruction in [the npm registry: @probable-futures/probable-futures-maps](https://www.npmjs.com/package/@probable-futures/probable-futures-maps).

<video class="video-embed" width="320" height="240" controls>
  <source src="/assets/videos/docs-demo-part2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

## Embeddable maps API - HTML generator

`@probable-futures/probable-futures-html-generator` is an npm package that enables developers to integrate dynamic and interactive climate maps into their web applications using pure HTML.

This package offers an HTML generator that creates pure HTML versions of the Probable Futures maps. 

Learn more about this package and find installation instruction in [the npm registry: @probable-futures/probable-futures-maps-html-generator](https://www.npmjs.com/package/@probable-futures/probable-futures-maps-html-generator).

## Embeddable maps - direct download

1. Go to [probablefutures.org/maps](https://probablefutures.org/maps).
2. Navigate the map to a place in the world that you would like to show in the embeddable map.
3. Click the download button on the top right.
4. Select "Download as embeddable map" or "Download as embeddable comparison map". If selecting a standard embeddable map, the warming scenario you are viewing will be shown in the embeddable map. If selecting a comparison map, choose the warming scenarios you would like to include in the embeddable map in the next step.
5. Click the download button to download the embeddable map file.
6. Add the file to any website, application, or article.

## Customize maps using Mapbox Studio

We will begin by using [Mapbox Studio](https://studio.mapbox.com), Mapbox's excellent visual map editing experience, to import a Probable Futures map. If you don't have a Mapbox account, you will need to create one to use Mapbox Studio.

1. Choose and download the map style JSON file you want from [Probable Futures map styles folder on GitHub](https://github.com/Probable-Futures/docs/tree/main/mapStyles/v3-styles).
2. Sign in to or sign up for a [Mapbox account](https://account.mapbox.com/auth/signin/).
3. Navigate to [Mapbox Studio](https://studio.mapbox.com/).
4. On the Styles page, click the "New style" button.
5. Click the "Upload" button, and upload the JSON file you downloaded in step 1.
6. Click the "Customize" button to open your map using the chosen style. You can then start customizing your map by changing colors, adding/removing layers, and more.
7. To learn more about customizing Mapbox maps, please see the [Mapbox documentation](https://docs.mapbox.com/).

<video class="video-embed" controls>
  <source src="/assets/videos/docs-demo-part1.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

### How it works

The Probable Futures maps are made of data encoded in [tilesets](/map-tilesets) and styled to apply color and bins. The Mapbox Style JSON contains all the styles (colors, layers, specification for place labels and borders, terrain, etc.) and references to the Probable Futures tilesets, which contain the actual climate data. The Probable Futures tilesets are public in Mapbox, so anyone can use Mapbox styles to make a map using Probable Futures data by referencing the appropriate tileset IDs for a given map. 

\
![alt Arizon Phoenix, days above 32](../assets/annotated-map-image.png "Customize Map Style")

The colors applied to the climate data are grouped into bins. Bins are the groups of colors you see in the map key. They are defined by the number at which one color stops and another starts. For example, in the [Days above 32°C (90°F) map](https://probablefutures.org/maps/?selected_map=days_above_32c), the first bin starts and stops at 0 and uses a gray color. The second bin starts at 1, stops at 7, and uses a green color. The third bin starts at 8, stops at 30, and uses a dark blue color.

To learn more about bins and even more dynamic ways to display climate data, visit the [Mapbox documentation on data expressions](https://docs.mapbox.com/style-spec/reference/expressions/).
