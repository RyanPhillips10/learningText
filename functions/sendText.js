var express = require('express'),
    TwilioNumber = '+15592061823',
    keys = require ('../Resources/Key');
    client = require('twilio')(keys.TWILIO_ACCOUNT_SID, keys.TWILIO_AUTH_KEY);


module.exports = function (phoneNumber, message) {
  // Sends a single message to a given phone number
    console.log('==================== Begin: sendText ====================');
    
    client.messages
        .create({
            body: message,
            from: TwilioNumber,
            to: phoneNumber
        })
        .then(message => console.log("Message sent: " + message.sid))
        .done();
    
    
        console.log('==================== End: sendText ====================');
};