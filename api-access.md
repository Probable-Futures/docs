---
layout: default
title: API access
nav_order: 1
parent: API
---

# API access

Credentials are required to use the API but we are happy to share credentials with anyone. To request access, please [fill out this form](https://airtable.com/shrOMfMgh7EoHajKN). We will get back to you quickly. Someone on the Probable Futures team will share these with you in a secure way that works for your team. We expect you to store these credentials in a secure location appropriate for storing secrets such as a password manager. The credentials are a client ID and client secret. 

## Request an access token

Using your access credentials, you can request an access token.

Below are examples of how to call the authorization API to obtain access tokens. The access token will expire in 24hrs. The response is a JWT token of type `Bearer`.

-   **Using cURL**:

```
curl --request POST \
  --url https://probablefutures.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"CLIENT_ID_HERE","client_secret":"CLIENT_SECRET_HERE","audience":"https://graphql.probablefutures.com","grant_type":"client_credentials"}'
```

-   **Using JavaScript**:

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

-   **Using Python**:

```
import requests
response = requests.post('https://probablefutures.us.auth0.com/oauth/token',
	json={"client_id": "CLIENT_ID_HERE", "client_secret": "CLIENT_SECRET_HERE", "audience": "https://graphql.probablefutures.com", "grant_type": "client_credentials"})
access_token = response.json()['access_token']
```

**Note:** Make sure to set the correct client credentials before using the API.
