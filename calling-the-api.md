---
layout: default
title: Calling the API
nav_order: 4
parent: API
---

# Calling the API

The API is a GraphQL endpoint located at `https://graphql.probablefutures.org/graphql` where the query is a mutation with the following inputs:

-   `longitude`: Shorthand for longitude, of type number, optional. Valid longitudes should be between -180 and 180.
-   `latitude`: Shorthand for latitude, of type number, optional. Valid latitudes should be between -90 and 90.
-   `country`: Generally recognized countries or country codes, of type string, optional. Example "France" or "fr". Can be sent alone or with city and/or address.
-   `city`: Cities, villages, municipalities, of type string, optional. Should be sent with a country and/or address.
-   `address`: Postal addresses, individual residential or business addresses, of type string, optional. Can be sent alone or with city and/or country.
-   `warmingScenario`: Specifies the warming scenario, of type string, required. Should be one of these values: "0.5", "1.0", "1.5", "2.0", "2.5", "3.0".
-   `datasetId`: ID of the dataset requested, of type integer, optional. If omitted the data for all datasets will be returned. See the full list of dataset IDs and their corresponding names on the [maps](/maps) page.

### Responses

The response of the API includes a list of objects that has the following properties:

-   datasetId
-   highValue
-   lowValue
-   midValue
-   name
-   unit
-   warmingScenario
-   longitude
-   latitude

Some or all the fields can be selected to be part of the response.

Response example:

```
{
  "datasetId": 40104,
  "highValue": "28.0",
  "lowValue": "6.0",
  "midValue": "17.0",
  "name": "Days above 32°C (90°F)",
  "unit": "days",
  "warmingScenario": "1.0"
}
```

### Applied examples

Calling the API using cURL with lon and lat:

```
curl --location --request POST 'https://graphql.probablefutures.org/graphql' \
--header 'Authorization: Bearer ACCESS_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n  getDatasetStatistics(input: {\n        latitude: 40.7,\n        longitude: -73.9,\n        warmingScenario: \"1.5\"\n    }) {\n    datasetStatisticsResponses{\n        datasetId\n        highValue\n        lowValue\n        midValue\n        name\n        unit\n        warmingScenario\n    }\n  }\n}","variables":{}}'
```

Calling the API in JavaScript with lon and lat:

```
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
  redirect: 'follow'
};

fetch("https://graphql.probablefutures.org/graphql", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
```

Calling the API in Python with lon and lat:

```
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

```
curl --location --request POST 'https://graphql.probablefutures.org/graphql' \
--header 'Authorization: Bearer {ACCESS_TOKEN_HERE}' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n      getDatasetStatistics(\n        input: {country: \"us\", address: \"121 East 48th Street, Apt. 123, New York, NY 10001\", warmingScenario: \"1.5\", datasetId: null}\n      ) {\n        datasetStatisticsResponses {\n          datasetId\n          highValue\n          lowValue\n          midValue\n          name\n          unit\n          warmingScenario\n          longitude\n          latitude\n      }\n    }\n}","variables":{}}'
```

Calling the API in JavaScript with address and country:

```
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
  redirect: 'follow'
};

fetch("https://graphql.probablefutures.org/graphql", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

Calling the API in Python with address and country:

```
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
