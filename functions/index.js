const functions = require('firebase-functions');
const fs = require('fs')
const requestAPI = require('request');
// var request = require('request');                                    
// // Create and Deploy Your First Cloud Functions                       
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.merchantLocator = functions.https.onRequest(async (request, response) => {   
    let payload = " \n{\n\"header\": {\n\"messageDateTime\": \"2020-06-18T04:37:30.903\",\n\"requestMessageId\": \"Request_001\",\n\"startIndex\": \"0\"\n},\n\"searchAttrList\": {\n\"merchantName\": \"Starbucks\",\n\"merchantCountryCode\": \"840\",\n\"latitude\": \"37.363922\",\n\"longitude\": \"-121.929163\",\n\"distance\": \"2\",\n\"distanceUnit\": \"M\"\n},\n\"responseAttrList\": [\n\"GNLOCATOR\"\n],\n\"searchOptions\": {\n\"maxRecords\": \"5\",\n\"matchIndicators\": \"true\",\n\"matchScore\": \"true\"\n}\n}";
    let headers = {
        'Authorization': 'Basic QjFOTVkwU1FDWUxYWThLTzZHSzkyMUk3Q3BrSURDdUFlWk5BcEtUM2VJdDZhNUVSbzpBQTJYcUFmNW9BTURpY2VpeVlTdDc5OFI1WUJoZEl2Qm90MFdVcA==',
        'Content-Type': 'application/json'
      } 
    response.set('Access-Control-Allow-Origin' , '*');
    requestAPI.post({
        url: "https://sandbox.api.visa.com/merchantlocator/v1/locator",
        headers: headers,
        body: payload,
        agentOptions: {
          cert: fs.readFileSync("./cred/cert.pem"),
          key: fs.readFileSync("./cred/privateKey.pem")
        }
      }, function(error, httpResponse, body) {
          if (error) {
            response.send('{"status":500,"error":"'+error+'"}');
            console.log(error);
          }
          else {
            response.send(body);
          }
      });    
});