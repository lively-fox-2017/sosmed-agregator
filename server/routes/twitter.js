var express = require('express');
var router = express.Router();
var TwitterCtrl = require('../controllers/twitterCtrl');

/* GET home page. */
router.get('/search/:search', TwitterCtrl.search);

router.get('/timeline', TwitterCtrl.timeline);

router.post('/tweet', TwitterCtrl.postTweet);

module.exports = router;
