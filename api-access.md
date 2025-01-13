---
layout: default
title: API access
nav_order: 1
parent: Data API
---

## API access

Credentials are required to use the API but we are happy to share credentials with anyone. To request access, please [fill out this form](https://airtable.com/shrOMfMgh7EoHajKN). We will get back to you quickly. Someone on the Probable Futures team will share these with you in a secure way that works for your team. We expect you to store these credentials in a secure location appropriate for storing secrets such as a password manager. The credentials are a client ID and client secret.

## Request an access token

Using your access credentials, you can request an access token.

Below are examples of how to call the authorization API to obtain access tokens. The access token will expire in 24hrs. The response is a JWT token of type `Bearer`.

<div id ="tab-container-1">
  <div class="tab-container">
    <div class="tab active" onclick="showTab(event, 'tab1', 'tab-container-1')">JS</div>
    <div class="tab" onclick="showTab(event, 'tab2', 'tab-container-1')">Python</div>
  </div>
  <div id="tab1" class="tab-content active">
    <zero-md src="/codeSnippets/apiAccessJs.md"></zero-md>
  </div>
  <div id="tab2" class="tab-content">
    <zero-md src="/codeSnippets/apiAccessPy.md"></zero-md>
  </div>
</div>

**Note:** Make sure to set the correct client credentials before using the API.
