---
layout: default
title: API access
nav_order: 2
parent: API
---

# API access
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
