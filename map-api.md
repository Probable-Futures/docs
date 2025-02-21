---
layout: maps-layout
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

## Demo

### Generating climate map using `@probable-futures/probable-futures-html-generator` package

<div id="map-code-editor" style="height: 300px; width: 100%; border: 1px solid #ccc;"></div>
<button class="generate-maps-button" onclick="saveAndRunCode()">Save and Run Code</button>

<div id="map-container"></div>

<div class="pf-warming-scenario-button-wrapper">
  <div>Warming scenarios:</div>
  <button class="change-scenario-button" onclick="changeScenario(event, 0.5)">0.5°C</button>
  <button class="change-scenario-button" onclick="changeScenario(event, 1)">1°C</button>
  <button class="change-scenario-button" onclick="changeScenario(event, 1.5)">1.5°C</button>
  <button class="change-scenario-button selected-scenario" onclick="changeScenario(event, 2)">2°C</button>
  <button class="change-scenario-button" onclick="changeScenario(event, 2.5)">2.5°C</button>
  <button class="change-scenario-button" onclick="changeScenario(event, 3)">3°C</button>
</div>
