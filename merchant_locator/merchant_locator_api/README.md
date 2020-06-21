
# Merchant Locator Api

Find Visa accepting merchants around by geolocation

## Requirements

Building the required modules requires [npm](https://www.npmjs.com/get-npm) to be installed.

This is a sample implementation of merchant_locator_api only for reference purpose.


## Installation

To install the API client library to your local Node repository, simply execute:

```
npm install

```

Refer to the [official documentation](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) for more information.


## Authentication

Authentication schemes defined for the API:**mutualAuth**

For more details check: [Visa Developer - Authentication](https://developer.visa.com/guides/vdpguide#two_way_ssl)


## Getting Started

### Create an App
First  create an app on [Visa Developer - App Dashboard](https://developer.visa.com/portal/#console)

An application within Visa Developer contains a set of APIs that you can access with one set of credentials.

### Generate Authentication Keys
Visa Developer uses simple and effective authentication and authorization methods.
Based on the APIs you select, use one of the following two standard and supported authentication methods for calling the APIs:

- Two-Way SSL (Mutual Authentication)
- API Key - Shared Secret (x-pay-token)

For more details check: [Visa Developer - Authentication](https://developer.visa.com/guides/vdpguide#two_way_ssl)

Set the relevant mutualAuth authentication keys and execute the API call:

```creds
/*set the credentials in credentials.json file*/
{
    "apiKey": "{put your api key here}",
    "sharedSecret": "{put your shared secret here}",
    "userId": "{put your user id here}",
    "password": "{put your password here}",
    "cert": "{put the path to the certificate file here}",
    "key": "{put the path to the private key here}",
    "ca": "{put the path to the client certificate file here}"}

```

```node
'use strict';
var api = require('../src/merchant_locator_api').merchant_locator_api;
var authCredentials = require('../credentials.json');

var merchant_locator_api = new api(authCredentials);

merchant_locator_api.(getParameters())
.then(function (result) {
// Put your custom logic here
console.log('Result is:' + JSON.stringify(result.body));
})
.catch(function (error) {
console.log('Error is: ' + error);
});

```


## Api EndPoints

Method | HTTP request | Description
------------- | ------------- | -------------
    *merchantLocator* | **POST** &#x2F;merchantlocator&#x2F;v1&#x2F;locator | TBD


## Testing

Set the relevant mutualAuth authentication keys in creds.js

Open terminal and execute following commands:

```
cd {pathToAPI}/test

node {testAPI.js} //Example: node api_test.js

```



## Disclaimer

© Copyright 2018 Visa. All Rights Reserved.

NOTICE: The software and accompanying information and documentation (together, the “Software”) remain the property of
and are proprietary to Visa and its suppliers and affiliates. The Software remains protected by intellectual property
rights and may be covered by U.S. and foreign patents or patent applications. The Software is licensed and not sold.

By accessing the Software you are agreeing to Visa's terms of use (developer.visa.com/terms) and privacy policy (developer.visa.com/privacy).
In addition, all permissible uses of the Software must be in support of Visa products, programs and services provided
through the Visa Developer Program (VDP) platform only (developer.visa.com). THE SOFTWARE AND ANY ASSOCIATED
INFORMATION OR DOCUMENTATION IS PROVIDED ON AN “AS IS,” “AS AVAILABLE,” “WITH ALL FAULTS” BASIS WITHOUT WARRANTY OR
CONDITION OF ANY KIND. YOUR USE IS AT YOUR OWN RISK.

All brand names are the property of their respective owners, used for identification purposes only, and do not imply
product endorsement or affiliation with Visa. Any links to third party sites are for your information only and equally
do not constitute a Visa endorsement. Visa has no insight into and control over third party content and code and disclaims
all liability for any such components, including continued availability and functionality. Benefits depend on implementation
details and business factors and coding steps shown are exemplary only and do not reflect all necessary elements for the
described capabilities. Capabilities and features are subject to Visa’s terms and conditions and may require development,
implementation and resources by you based on your business and operational details. Please refer to the specific
API documentation for details on the requirements, eligibility and geographic availability.

This Software includes programs, concepts and details under continuing development by Visa. Any Visa features,
functionality, implementation, branding, and schedules may be amended, updated or canceled at Visa’s discretion.
The timing of widespread availability of programs and functionality is also subject to a number of factors outside Visa’s control,
including but not limited to deployment of necessary infrastructure by issuers, acquirers, merchants and mobile device manufacturers.
##
