/* ----------------------------------------------------------------------------------------------------------------------
* © Copyright 2018 Visa. All Rights Reserved.
*
* NOTICE: The software and accompanying information and documentation (together, the “Software”) remain the property of
* and are proprietary to Visa and its suppliers and affiliates. The Software remains protected by intellectual property
* rights and may be covered by U.S. and foreign patents or patent applications. The Software is licensed and not sold.
*
* By accessing the Software you are agreeing to Visa's terms of use (developer.visa.com/terms) and privacy policy
* (developer.visa.com/privacy). In addition, all permissible uses of the Software must be in support of Visa products,
* programs and services provided through the Visa Developer Program (VDP) platform only (developer.visa.com).
* THE SOFTWARE AND ANY ASSOCIATED INFORMATION OR DOCUMENTATION IS PROVIDED ON AN “AS IS,” “AS AVAILABLE,” “WITH ALL
* FAULTS” BASIS WITHOUT WARRANTY OR CONDITION OF ANY KIND. YOUR USE IS AT YOUR OWN RISK.
---------------------------------------------------------------------------------------------------------------------- */

'use strict';
var api = require('../src/merchant_locator_api').merchant_locator_api;
var authCredentials = require('../credentials.json');

var merchant_locator_api = new api(authCredentials);

// path invoked is '/merchantlocator/v1/locator';
merchant_locator_api.merchantLocator(getParameters())
    .then(function(result) {
        // Put your custom logic here
        console.log('\n Response: ' + JSON.stringify(result.response));
        console.log('\n Response Status: ' + JSON.stringify(result.response.statusCode));
        console.log('\n--------------- Above product is Merchant Locator ---------------');
        console.log('\n--------------- API is Merchant Locator Api ---------------');
        console.log('\n--------------- EndPoint is merchantLocator ---------------');
        console.log('\n\n');
    })
    .catch(function(error) {
        console.log('\n Response: ' + JSON.stringify(error.response));
        console.log('\n Response Status: ' + JSON.stringify(error.response.statusCode));
        console.log('\n--------------- Above product is Merchant Locator ---------------');
        console.log('\n--------------- API is Merchant Locator Api ---------------');
        console.log('\n--------------- EndPoint is merchantLocator ---------------');
        console.log('\n\n');
    });

function getParameters() {
    var parameters = {
        "x-client-transaction-id": "{enter appropriate value}",
        "Accept": "application/json",
        "Content-Type": "application/json"
    };
    parameters.payload = {
        "responseAttrList": ["GNLOCATOR"],
        "header": {
            "messageDateTime": "2016-04-12T22:41:17.903",
            "startIndex": "0",
            "requestMessageId": "Request_001"
        },
        "searchOptions": {
            "matchScore": "true",
            "maxRecords": "5",
            "matchIndicators": "true"
        },
        "searchAttrList": {
            "distance": "2",
            "merchantName": "Starbucks",
            "longitude": "-121.929163",
            "merchantCountryCode": "840",
            "distanceUnit": "M",
            "latitude": "37.363922"
        }
    };

    return parameters;
}