```js
curl --location --request POST 'https://graphql.probablefutures.org/graphql' \
--header 'Authorization: Bearer {ACCESS_TOKEN_HERE}' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n      getDatasetStatistics(\n        input: {country: \"us\", address: \"121 East 48th Street, Apt. 123, New York, NY 10001\", warmingScenario: \"1.5\", datasetId: null}\n      ) {\n        datasetStatisticsResponses {\n          datasetId\n          highValue\n          lowValue\n          midValue\n          name\n          unit\n          warmingScenario\n          longitude\n          latitude\n      }\n    }\n}","variables":{}}'
```
