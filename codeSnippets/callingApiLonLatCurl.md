```js
curl --location --request POST 'https://graphql.probablefutures.org/graphql' \
--header 'Authorization: Bearer ACCESS_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n  getDatasetStatistics(input: {\n        latitude: 40.7,\n        longitude: -73.9,\n        warmingScenario: \"1.5\"\n    }) {\n    datasetStatisticsResponses{\n        datasetId\n        highValue\n        lowValue\n        midValue\n        name\n        unit\n        warmingScenario\n    }\n  }\n}","variables":{}}'
```
