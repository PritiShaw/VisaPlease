const fs = require('fs')
const requestAPI = require('request');
const cors = require('micro-cors')();

const handler = async (request, response) => {
  let payload = {
    "header": {
      "messageDateTime": "2020-06-18T04:37:30.903",
      "requestMessageId": "Request_001",
      "startIndex": "0"
    },
    "searchAttrList": {
      "merchantName": request.body.merchantName,
      "merchantCountryCode": request.body.merchantCountryCode,
      "merchantPostalCode": request.body.merchantPostalCode,
      "distance": request.body.distance,
      "distanceUnit": request.body.distanceUnit,
    },
    "responseAttrList": [
      "GNLOCATOR"
    ],
    "searchOptions": {
      "maxRecords": "5",
      "matchIndicators": "true",
      "matchScore": "true"
    }
  };
  let headers = {
    'Authorization': 'Basic QjFOTVkwU1FDWUxYWThLTzZHSzkyMUk3Q3BrSURDdUFlWk5BcEtUM2VJdDZhNUVSbzpBQTJYcUFmNW9BTURpY2VpeVlTdDc5OFI1WUJoZEl2Qm90MFdVcA==',
    'Content-Type': 'application/json'
  }
  requestAPI.post({
    url: "https://sandbox.api.visa.com/merchantlocator/v1/locator",
    headers: headers,
    body: JSON.stringify(payload),
    agentOptions: {
      cert: fs.readFileSync(__dirname + "/cred/cert.pem"),
      key: fs.readFileSync(__dirname + "/cred/privateKey.pem")
    }
  }, async (error, httpResponse, body) => {
    if (error) {
      response.send('{"status":500,"error":"' + error + '"}');
      console.log(error);
    }
    else {
      response.send(body);
    }
  });
  // response.send('{"status":400,"error":"Unknown"}');
}

module.exports = cors(handler);
