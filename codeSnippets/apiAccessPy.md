```py

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
