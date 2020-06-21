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

var crypto = require('crypto');
module.exports.getXPayToken = function getXPayToken(resourcePath, apiKey, postBody, sharedSecret) {
    var queryParams = 'apikey=' + apiKey;
    var timestamp = Math.floor(Date.now() / 1000);
    var preHashString = timestamp + resourcePath + queryParams + postBody;
    var hashString = crypto.createHmac('SHA256', sharedSecret).update(preHashString).digest('hex');
    var xPayToken = 'xv2:' + timestamp + ':' + hashString;
    return xPayToken;
}