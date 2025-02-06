---
layout: data-layout
title: Calling the data API
nav_order: 2
parent: Data API
---

# Calling the data API

The API is a GraphQL endpoint located at `https://graphql.probablefutures.org/graphql` where the query is a mutation with the following inputs:

### 1. Location data, in any of the following formats (required)

- `longitude`: Type: number. Valid longitudes should be between -180 and 180.
- `latitude`: Type: number. Valid latitudes should be between -90 and 90.
- `country`: Generally recognized countries or country codes. Type: string. Example: "France" or "fr". Can be sent alone or with city and/or address.
- `city`: Cities, villages, municipalities. Type: string. Should be sent with a country and/or address.
- `address`: Any place name, postal addresses, individual residential or business addresses. Type: string. Can be sent alone or with city and/or country.

### 2. Warming scenario (optional)

- `warmingScenario`: Specifies the warming scenario. Type: string or string array. Should be one or more of these values: "0.5", "1.0", "1.5", "2.0", "2.5", "3.0". For example, ["1", "2.5"]. If omitted, all 6 warming scenarios will be returned.

### 3. Dataset ID (optional)

- `datasetId`: ID of the dataset requested, of type integer. If omitted the data for all datasets will be returned. See the full list of dataset IDs and their corresponding names on the [maps](/maps) page.

### Example request

```js
mutation {
  getDatasetStatistics(input: {
        country: "USA"
        city: "New York City"
        warmingScenario: "1.5"
        datasetId: 40104
    }) {
    datasetStatisticsResponses{
        datasetId
        midValue
        name
        unit
        warmingScenario
        latitude
        longitude
        info
        mapCategory
    }
  }
}
```

### Responses

The response of the API includes a list of objects that has the following properties:

- datasetId
- highValue
- lowValue
- midValue
- name
- unit
- warmingScenario
- longitude
- latitude
- info
- mapCategory ("heat", "water", "land", "other")
- values

Some or all the fields can be requested to be part of the response.

{: .note }
`values` contains 101 variables corresponding to the precentiles from 0 (the minimum) to 100 (the maximum). Read more about [Statistical Percentiles & Range of Values](/background-definitions). These values can specifically be used to draw charts like plot charts showing the chance of experiencing a sepcific outcome or range of outcomes. To understand this varibable a bit more and see examples of ways to draw these charts read about [Data Charting](/data-charting).

### Example response

```js
{
  "data": {
    "getDatasetStatistics": {
      "datasetStatisticsResponses": [
        {
          "datasetId": 40104,
          "midValue": "25.0",
          "name": "Days above 32°C (90°F)",
          "unit": "days",
          "warmingScenario": "1.5",
          "latitude": 40.8,
          "longitude": -74,
          "info": {},
          mapCategory: "heat"
        }
      ]
    }
  }
}
```

The `"info"` property is an object that provides additional details related to the query, if there any, such as for the climate zones dataset. Here is an example of the `"info"` property displaying the name of the climate zone that is expected in a 1.0°C warming scenario:

```js
{
  "datasetId": 40901,
  "midValue": "33.0",
  "name": "Climate zones",
  "unit": "class",
  "warmingScenario": "1.0",
  "longitude": -74,
  "latitude": 40.8,
  "info": {
    "climateZoneName": "Temperate humid"
  }
}
```

## Applied examples

Calling the API with lon and lat:

<div id ="tab-container-1">
  <div class="tab-container">
    <div class="tab active" onclick="showTab(event, 'tab1', 'tab-container-1')">cURL</div>
    <div class="tab" onclick="showTab(event, 'tab2', 'tab-container-1')">JS</div>
    <div class="tab" onclick="showTab(event, 'tab3', 'tab-container-1')">Python</div>
  </div>
  <div id="tab1" class="tab-content active">
    <zero-md src="/codeSnippets/callingApiLonLatCurl.md"></zero-md>
  </div>
  <div id="tab2" class="tab-content">
    <zero-md src="/codeSnippets/callingApiLonLatJs.md"></zero-md>
  </div>
   <div id="tab3" class="tab-content">
    <zero-md src="/codeSnippets/callingApiLonLatPy.md"></zero-md>
  </div>
</div>

Calling the API with address and country:

<div id ="tab-container-2">
  <div class="tab-container">
    <div class="tab active" onclick="showTab(event, 'tab4', 'tab-container-2')">cURL</div>
    <div class="tab" onclick="showTab(event, 'tab5', 'tab-container-2')">JS</div>
    <div class="tab" onclick="showTab(event, 'tab6', 'tab-container-2')">Python</div>
  </div>
  <div id="tab4" class="tab-content active">
    <zero-md src="/codeSnippets/callingApiAddressCurl.md"></zero-md>
  </div>
  <div id="tab5" class="tab-content">
    <zero-md src="/codeSnippets/callingApiAddressJs.md"></zero-md>
  </div>
   <div id="tab6" class="tab-content">
    <zero-md src="/codeSnippets/callingApiAddressPy.md"></zero-md>
  </div>
  <h2>Try it out yourself</h2>
  <h3>Get the token</h3>
  <div class="playground-container">
    <div id="getTokenEditor" class="editor-container"></div>
    <button class="run-button" onclick="runCode('getTokenEditor', true)">Run Code</button>
    <div id="output_getTokenEditor" class="output"></div>
  </div>
  <h3>Call the API</h3>
  <div class="playground-container">
    <div id="callTheApiEditor" class="editor-container"></div>
    <button class="run-button" onclick="runCode('callTheApiEditor', true)">Run Code</button>
    <div id="output_callTheApiEditor" class="output"></div>
    <button id="showMoreBtn_callTheApiEditor" style="display: none;" onclick="expand('callTheApiEditor')">Show More</button>
  </div>
</div>
