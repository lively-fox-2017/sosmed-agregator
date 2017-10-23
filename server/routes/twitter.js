var express = require('express');
var router = express.Router();
const TwitterCtrl = require('../controllers/twitterCtrl');

router.get('/', TwitterCtrl.requestToken);
router.get('/set_access_token', TwitterCtrl.setAccessToken);
router.get('/search_tweet', TwitterCtrl.searchTweet);
router.get('/timeline', TwitterCtrl.timeline);
router.get('/trending', TwitterCtrl.trending);
router.post('/post_tweet', TwitterCtrl.postTweet);

module.exports = router;
