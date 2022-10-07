---
layout: default
title: Calling the API
nav_order: 3
parent: API
---

# Calling the API

The API is a GraphQL endpoint located at `https://graphql.probablefutures.org/graphql` where the query is a mutation with the following inputs:

- **lon**: shorthand for longitude, of type string - required. Valid longitudes should be between -180 and 180.
- **lat**: shorthand for latitude, of type string - required. Valid latitudes should be between -90 and 90.
- **warmingScenario**: specifies the warming scenario, of type string - required. Should be one of these values: "0.5", "1.0", "1.5", "2.0", "2.5", "3.0".
- **datasetId**: Id of the dataset requested, of type integer - optional. If omitted the data for all datasets will be returned. Below is a list of dataset IDs and their corresponding names:

| datasetId | name                                          |
|:---------:|-----------------------------------------------|
|   40101   | Average temperature                           |
|   40102   | Average daytime temperature                   |
|   40103   | 10 hottest days                               |
|   40104   | Days above 32°C (90°F)                        |
|   40105   | Days above 35°C (95°F)                        |
|   40106   | Days above 38°C (100°F)                       |
|   40201   | Average nighttime temperature                 |
|   40202   | Frost nights                                  |
|   40203   | Nights above 20°C (68°F)                      |
|   40204   | Nights above 25°C (77°F)                      |
|   40205   | Freezing days                                 |
|   40301   | Days above 26°C (78°F) wet-bulb               |
|   40302   | Days above 28°C (82°F) wet-bulb               |
|   40303   | Days above 30°C (86°F) wet-bulb               |
|   40304   | Days above 32°C (90°F) wet-bulb               |
|   40305   | 10 hottest wet-bulb days                      |
|   40601   | Change in total annual precipitation          |
|   40607   | Change in dry hot days                        |
|   40612   | Change in frequency of "1-in-100 year" storm  |
|   40613   | Change in precipitation "1-in-100 year" storm |
|   40614   | Change in snowy days                          |
|   40616   | Change in wettest 90 days                     |
|   40701   | Likelihood of year-plus extreme drought       |
|   40702   | Likelihood of year-plus drought               |
|   40703   | Change in water balance                       |
|   40704   | Change in wildfire danger days                |
|   40901   | Climate zones                                 |

### Responses

The response of the API includes a list of objects that has the following properties:

- datasetId
- highValue
- lowValue
- midValue
- name
- unit
- warmingScenario

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

Calling the API using cURL:
```
curl --location --request POST 'https://graphql.probablefutures.org/graphql' \
--header 'Authorization: Bearer ACCESS_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n  getDatasetStatistics(input: {\n        lat: \"40.7\",\n        lon: \"-73.9\",\n        warmingScenario: \"1.5\"\n    }) {\n    datasetStatisticsResponses{\n        datasetId\n        highValue\n        lowValue\n        midValue\n        name\n        unit\n        warmingScenario\n    }\n  }\n}","variables":{}}'
```


Calling the API in JavaScript:

  ```
  var headers = new Headers();
  headers.append("Authorization", "Bearer {ACCESS_TOKEN_HERE}");
  headers.append("Content-Type", "application/json");

  var graphql = JSON.stringify({
    query: "mutation {\n      getDatasetStatistics(\n        input: {lon: \"-73.9\", lat: \"40.7\", warmingScenario: \"1.0\", datasetId: 40104}\n      ) {\n        datasetStatisticsResponses {\n          datasetId\n          highValue\n          lowValue\n          midValue\n          name\n          unit\n          warmingScenario\n      }\n    }\n  }",
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
