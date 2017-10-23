var express = require('express');
var router = express.Router();
const FacebookCtrl = require('../controllers/facebookCtrl');

router.post('/', FacebookCtrl.requestToken);

module.exports = router;
