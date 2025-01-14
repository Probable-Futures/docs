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
