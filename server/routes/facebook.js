var express = require('express');
var router = express.Router();
var FacebookCtrl = require('../controllers/facebookCtrl');

/* GET home page. */
router.post('/login', FacebookCtrl.login);

router.post('/post', FacebookCtrl.post);

module.exports = router;
