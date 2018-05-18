
var express = require('express'),
    router = express.Router(),
    sendText = require('../Functions/sendText'),
    nconf = require('nconf');


/* GET users listing. */
router.get('/', (req, res) => {
    console.log("----- We have gotten a text, now we need to do something about it")
    
    res.send('respond with a resource');
});

module.exports = router;
