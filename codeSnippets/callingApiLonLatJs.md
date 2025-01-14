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
