var express = require('express');
var router = express.Router();

var SMSru = require('sms_ru');
var sms = new SMSru('1084D6ED-A727-DA85-DA94-7AC96F7B360E');
//var sms = new SMSru('1084D6ED-A727-DA85-DA94');

router.post('/', function (req, res, next) {
    console.log('POST');
    sms.sms_send({
        to: '79969383396',
        text: req.body.text,
        test: 1
    }, function (e) {
        if (e.code === '100') {
            return res.status(200).json({message: e.description});
        }

        return res.status(500).json({message: e.description});
    });
});

module.exports = router;
