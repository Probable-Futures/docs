```js
const username =
  'CLIENT_ID_HERE';
const password =
  'CLIENT_SECRET_HERE';
const url =
  'https://graphql.probablefutures.org/auth/token';
// Encode username and password
const encodedCredentials = btoa(
  username + ':' + password);
const headers = new Headers();
headers.set('Authorization', 'Basic ' +
  btoa(username + ':' + password));
fetch(url, {
    method: 'GET', // or 'POST', 'PUT', etc.
    headers: headers
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(
        'Network response was not ok'
      );
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(
      'There was a problem with your fetch operation:',
      error);
  });
```
