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

- **Using JavaScript**:

```
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

- **Using Python**:

```
import requests
import base64

username = 'CLIENT_ID_HERE'
password = 'CLIENT_SECRET_HERE'
url = 'https://graphql.probablefutures.org/auth/token'

# Encode username and password
encoded_credentials = base64.b64encode((username + ':' + password).encode()).decode()
headers = {
    'Authorization': 'Basic ' + encoded_credentials
}

try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raise an exception for HTTP errors

    data = response.json()
    print(data)

except requests.exceptions.RequestException as e:
    print('There was a problem with your request:', e)
```

**Note:** Make sure to set the correct client credentials before using the API.
