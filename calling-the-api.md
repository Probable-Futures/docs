---
layout: default
title: Calling the API
nav_order: 2
parent: API
---

## Calling the API

The API is a GraphQL endpoint located at `https://graphql.probablefutures.org/graphql` where the query is a mutation with the following inputs:

1. Location data, in any of the following formats (required)

- `longitude`: Type: number. Valid longitudes should be between -180 and 180.
- `latitude`: Type: number. Valid latitudes should be between -90 and 90.
- `country`: Generally recognized countries or country codes. Type: string. Example: "France" or "fr". Can be sent alone or with city and/or address.
- `city`: Cities, villages, municipalities. Type: string. Should be sent with a country and/or address.
- `address`: Any place name, postal addresses, individual residential or business addresses. Type: string. Can be sent alone or with city and/or country.

2. Warming scenario (optional)

- `warmingScenario`: Specifies the warming scenario. Type: string or string array. Should be one of these values: "0.5", "1.0", "1.5", "2.0", "2.5", "3.0". eg. ["1", "2.5"]. If omitted, all 6 warming scenarios will be returned.

3. Dataset ID (optional)

- `datasetId`: ID of the dataset requested, of type integer. If omitted the data for all datasets will be returned. See the full list of dataset IDs and their corresponding names on the [maps](./maps.md) page.

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

Some or all the fields can be selected to be part of the response.

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

The "info" property is an object that provides additional details related to the query, if there any, such as for the climate zones dataset. Here is an example of the "info" property displaying the name of the climate zone that is expected in a 1.0°C warming scenario:

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

### Applied examples

Calling the API using cURL with lon and lat:

```bash
curl --location --request POST 'https://graphql.probablefutures.org/graphql' \
--header 'Authorization: Bearer ACCESS_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n  getDatasetStatistics(input: {\n        latitude: 40.7,\n        longitude: -73.9,\n        warmingScenario: \"1.5\"\n    }) {\n    datasetStatisticsResponses{\n        datasetId\n        highValue\n        lowValue\n        midValue\n        name\n        unit\n        warmingScenario\n    }\n  }\n}","variables":{}}'
```

Calling the API in JavaScript with lon and lat:

```js
var headers = new Headers();
headers.append("Authorization", "Bearer {ACCESS_TOKEN_HERE}");
headers.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "mutation {\n      getDatasetStatistics(\n        input: {longitude: -73.9, latitude: 40.7, warmingScenario: \"1.0\", datasetId: 40104}\n      ) {\n        datasetStatisticsResponses {\n          datasetId\n          highValue\n          lowValue\n          midValue\n          name\n          unit\n          warmingScenario\n      }\n    }\n  }",
    variables: {}
});
var requestOptions = {
  method: 'POST',
  headers: headers,
  body: graphql,
};

fetch("https://graphql.probablefutures.org/graphql", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
```

Calling the API in Python with lon and lat:

```py
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + ACCESS_TOKEN_HERE
}
query = {
    "query": "mutation {\n      getDatasetStatistics(\n        input: {longitude: -73.9, latitude: 40.7, warmingScenario: \"1.0\", datasetId: 40104}\n      ) {\n        datasetStatisticsResponses {\n          datasetId\n          highValue\n          lowValue\n          midValue\n          name\n          unit\n          warmingScenario\n      }\n    }\n  }",
    "variables": {}
}
response = requests.post('https://graphql.probablefutures.org/graphql', headers=headers, json=query)
```

Calling the API using cURL with address and country:

```bash
curl --location --request POST 'https://graphql.probablefutures.org/graphql' \
--header 'Authorization: Bearer {ACCESS_TOKEN_HERE}' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n      getDatasetStatistics(\n        input: {country: \"us\", address: \"121 East 48th Street, Apt. 123, New York, NY 10001\", warmingScenario: \"1.5\", datasetId: null}\n      ) {\n        datasetStatisticsResponses {\n          datasetId\n          highValue\n          lowValue\n          midValue\n          name\n          unit\n          warmingScenario\n          longitude\n          latitude\n      }\n    }\n}","variables":{}}'
```

Calling the API in JavaScript with address and country:

```js
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {ACCESS_TOKEN_HERE}");
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "mutation {\n      getDatasetStatistics(\n        input: {country: \"us\", address: \"121 East 48th Street, Apt. 123, New York, NY 10001\", warmingScenario: \"1.5\", datasetId: null}\n      ) {\n        datasetStatisticsResponses {\n          datasetId\n          highValue\n          lowValue\n          midValue\n          name\n          unit\n          warmingScenario\n          longitude\n          latitude\n      }\n    }\n}",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
};

fetch("https://graphql.probablefutures.org/graphql", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

Calling the API in Python with address and country:

```js
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + ACCESS_TOKEN_HERE
}
query = {
    "query": "mutation {\n      getDatasetStatistics(\n        input: {country: \"us\", address: \"121 East 48th Street, Apt. 123, New York, NY 10001\", warmingScenario: \"1.5\", datasetId: null}\n      ) {\n        datasetStatisticsResponses {\n          datasetId\n          highValue\n          lowValue\n          midValue\n          name\n          unit\n          warmingScenario\n          longitude\n          latitude\n      }\n    }\n}",
    "variables": {}
}
response = requests.post('https://graphql.probablefutures.org/graphql', headers=headers, json=query)
```
