---
layout: data-layout
title: Data API access
nav_order: 1
parent: Data
---

# Data API access

Anyone is welcome to use the data API. To sign up and receive API credentials, please [fill out this form](https://airtable.com/shrOMfMgh7EoHajKN). We expect you to store these credentials in a secure location appropriate for storing secrets such as a password manager. The credentials are a `client ID` and `client secret`.

## Request an access token

Using your access credentials, you can request an access token.

Below are examples of how to call the authorization API to obtain access tokens. The access token will expire in 24 hours. The response is a JWT token of type `Bearer`.

<div id ="tab-container-1">
  <div class="tab-container">
    <div class="tab active" onclick="showTab(event, 'tab1', 'tab-container-1')">cURL</div>
    <div class="tab" onclick="showTab(event, 'tab2', 'tab-container-1')">JS</div>
    <div class="tab" onclick="showTab(event, 'tab3', 'tab-container-1')">Python</div>
  </div>
  <div id="tab1" class="tab-content active">
    <zero-md src="/codeSnippets/apiAccessCurl.md"></zero-md>
  </div>
  <div id="tab2" class="tab-content">
    <zero-md src="/codeSnippets/apiAccessJs.md"></zero-md>
  </div>
  <div id="tab3" class="tab-content">
    <zero-md src="/codeSnippets/apiAccessPy.md"></zero-md>
  </div>
</div>
