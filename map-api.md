---
layout: maps-layout
title: Map APIs and embeds
nav_order: 2
parent: Maps
---

# Map APIs and embeds

This section describes how to integrate the Probable Futures maps into any website or application. Typically, there are two ways people prefer to do this. If a map will be added to an article, embeddable maps downloaded directly from the Probable Futures website are a simple and efficient option. If the maps will be used in an application, where the maps will change dynamically, one of the two map API packages work best. For more customization options, see the [map customizations page](/map-customization).

## Embeddable maps - downloaded from probablefutures.org

1. On [probablefutures.org/maps](https://probablefutures.org/maps), position the map location and zoom level exactly as you would like it to appear in the embed. 
2. Click the download button on the right side. In the pop-up, select between either a standard embeddable map or embeddable comparison map. When you are done choosing your options, click the download button to download the embeddable map as an HTML file.
3. Add the file to any website. Typically, it's best to do this by placing the contents of the HTML file inside an `<iframe>` element. 

<!-- display comparison map here: assets/html/Likelihood of year-plus drought comparing 1°C and 3°C.html -->

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

### Demo: Generating a climate map using a map API package

The code below uses the `@probable-futures/probable-futures-html-generator` package to generate a map. You can edit the code and click the "Save and Run Code" button to change the map. For example, change the `datasetID` to change the type of map being shown, change the `zoom` to change the zoom of the map, and change the `latitude` or `longitude` to change the center focus of the map. 

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
