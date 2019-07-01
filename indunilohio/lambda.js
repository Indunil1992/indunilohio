let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {

    cognito_idp.adminCreateUser({
        UserPoolId: process.env.UserPoolId_cognitoresource,
        Username: "indunil",
        DesiredDeliveryMediums: ["EMAIL", "SMS"],
        ForceAliasCreation: false,
        TemporaryPassword: "Sachithra@142",
        UserAttributes: [],
        ValidationData: [],
        MessageAction: "RESEND"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });


    callback(null, { "message": "Successfully *** executed" });
}