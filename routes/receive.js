var express = require('express'),
    sendText = require('../Functions/sendText'),
    updateGDoc = require('../functions/updateGoogleDoc'),
    cron = require('cron'),
    router = express.Router();


var promptJob = new cron.CronJob({
    cronTime: '00 21 * * 0-6',
    onTick: function() {
        promptCronLogic();
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});

var resetJob = new cron.CronJob({
    cronTime: '59 23 * * 0-6',
    onTick: function() {
        promptJob.start();
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});

function promptCronLogic () {
    console.log("Send prompt Text");
    sendText('+19723658656', 'What is one important thing you have learned in the past day?');
}

/* GET users listing. */
router.post('/', (req, res) => {
    console.log("=-=-=-=-- Message from: " + req.body.From + " with text: " + req.body.Body); 
    
    updateGDoc(req.body.Body, req.body.From);
    
    // This is built for one person, if multiple people start using this, we will need to move this
    // to check per user. 
    promptJob.stop();
    res.send('respond with a resource');
});

module.exports = router;