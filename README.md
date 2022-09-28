# Probable Futures API Documentation

## Background
Climate describes conditions that occur over seasons and years. Therefore, climate can be described in probabilistic terms: Many places near the equator are very likely to have daytime temperatures reach at least 32°C (90°F) for three months every year. Other places are very unlikely to have so many months with such daytime temperatures. Similarly, the same place near the equator may be very unlikely to have any nights reach freezing temperatures, but it still may happen from time to time. You will encounter values representing these probabilities in the API.

As the global climate changes, the range of probabilities for heat, precipitation, and dryness change as well. The Probable Futures data available in this API offer insight into this range of probable conditions by sending queries for six warming scenarios. More warming scenarios may be added in the future. 

Warming scenarios are typically measured and referred to in Celsius such as 1°C, 1.5°C, and 2°C of global average temperature rise since pre-industrial times. These small-sounding numbers appear incremental but represent substantially different climates. Every increase in global temperature has implications for local and regional weather, natural systems, and society. So how can we prepare for the climate futures that are likely, and avoid the ones that carry the most profound risks for our world?

Before creating anything with this API, we recommend reading all four volumes on ProbableFutures.org: Heat, Water, Land, and Onward. The interactive maps, science, historical context, and stories are essential context for creating applications using Probable Futures data. 

Examples of how the data in this API can be visualized can be seen in the public maps application located at ProbableFutures.org/maps


### Access credentials
To access the API, you will need credentials. Someone on the Probable Futures team will share these with you in a secure way that works for your team.

- ID
- Secret

## Request an access token
Using your access credentials, you can request an access token.

Below are examples of how to call the authorization API to obtain access tokens. The access token will expire in 24hrs. The response is a JWT token of type `Bearer`.

- **Using cURL**: 

```
curl --request POST \
  --url https://probablefutures.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"CLIENT_ID_HERE","client_secret":"CLIENT_SECRET_HERE","audience":"https://graphql.probablefutures.com","grant_type":"client_credentials"}'
```
- **Using JavaScript**:

  ```
  var request = require("request");

  var options = { method: 'POST',
    url: 'https://probablefutures.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"CLIENT_ID_HERE","client_secret":"CLIENT_SECRET_HERE","audience":"https://graphql.probablefutures.com","grant_type":"client_credentials"}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
  ```

  **Note:** Make sure to set the correct client credentials before using the API.

### Calling the API

The API is a graphql endpoint located at `https://graphql.probablefutures.org/graphql` where the query is a mutation with the following inputs:

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

### Contextual notes on how to interpret low, mid, and high values

- The `lowValue`, `midValue`, and `highValue` are points on a distribution of outcomes. The low and high values not the lowest or highest possible values that could occur in the specified location at a specified warming scenario but are points on a range which goes beyond these low and high points. For some Probable Futures maps, the low and high are 10th and 90th percentile values and for others they are 5th and 95th percentile values. In other words, for maps with 10th and 90th, the low and high should be expected on average once every ten years but can certainly happen more than once in any specific ten year period. Also, since 20% of the values fall outside of the 10th and 90th percentile, lower lows and higher highs will certainly occur as well. For 5th and 95th, 10% of thevalues fall outside of the the values. So, for these maps, the low and high values should be expected once in every twenty years on average but lower lowers and higher highs will certainly occur as well. 
- We recently saw this happen in the Pacific Northwest of the US where extremely hot heat waves occurred which were within the bounds of expectations for the current level of warming, though far out on the projected probability curve. It is important for people to understand and plan for events like this when planning for risks because if they do not, their infrastructure will be unprepared for less likely but still possible outcomes which, over time, will result in substantial damage and loss.
- Because of this, it can be clarifying to display the data along a continuum which expands beyond the specified low and high values. 
