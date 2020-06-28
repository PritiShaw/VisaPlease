const fs = require('fs')
const requestAPI = require('request');
const cors = require('micro-cors')();

const handler = async (request, response) => {

    let payload = {

        "requestHeader": {
            "messageDateTime": "2020-06-25T13:48:55.327Z",
            "requestMessageId": "6da60e1b8b024532a2e0eacb1af58581"
        },
        "requestData": {
            "naicsCodeList": [
                ""
            ],
            "merchantCategoryCodeList": [
                request.body.merchantCategoryCode
            ],
            "merchantCategmerchantCountryCodeoryGroupsCodeList": [
                ""
            ],
            "postalCodeList": [
                ""
            ],
            "msaList": [
                "7362"
            ],
            "countrySubdivisionList": [
                ""
            ],
            "merchantCountry": request.body.merchantCountryCode,
            "monthList": [
                "201706"
            ],
            "accountFundingSourceList": [
                "All"
            ],
            "eciIndicatorList": [
                "All"
            ],
            "platformIDList": [
                "All"
            ],
            "posEntryModeList": [
                "All"
            ],
            "cardPresentIndicator": "CARDPRESENT",
            "groupList": [
                "STANDARD"
            ]
        }
    };
    let headers = {
        'Authorization': 'Basic QjFOTVkwU1FDWUxYWThLTzZHSzkyMUk3Q3BrSURDdUFlWk5BcEtUM2VJdDZhNUVSbzpBQTJYcUFmNW9BTURpY2VpeVlTdDc5OFI1WUJoZEl2Qm90MFdVcA==',
        'Content-Type': 'application/json'
    }
    requestAPI.post({
        url: "https://sandbox.api.visa.com/merchantmeasurement/v1/merchantbenchmark",
        headers: headers,
        body: JSON.stringify(payload),
        agentOptions: {
            cert: fs.readFileSync(__dirname + "/cred/cert.pem"),
            key: fs.readFileSync(__dirname + "/cred/privateKey.pem")
        }
    }, function (error, httpResponse, body) {
        if (error) {
            response.send('{"status":500,"error":"' + error + '"}');
            console.log(error);
        }
        else {
            response.send(body);
        }
    });
}
module.exports = cors(handler);
