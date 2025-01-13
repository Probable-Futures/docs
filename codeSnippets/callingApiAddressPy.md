
```js
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
