var express = require('express');
var cors = require('cors')
var router = express.Router();
var twitterCtrl = require('../controllers/twitter')


router.use(cors())
/* GET home page. */
router.get('/', twitterCtrl.getTrends);

router.post('/', twitterCtrl.postTweet)

router.get('/timeline', twitterCtrl.getTimeline);

router.post('/search', twitterCtrl.searchTweet);

module.exports = router;
