var express = require('express');
var cors = require('cors')
var router = express.Router();
var fbCtrl = require('../controllers/fb')


router.use(cors())


/* GET users listing. */
router.get('/', fbCtrl.get);

router.post('/', fbCtrl.set)

router.post('/timeline', fbCtrl.postTimeline)

module.exports = router;
