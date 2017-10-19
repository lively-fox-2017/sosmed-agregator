const express = require('express')
const router = express.Router()
const controller = require('../controller/twatt')


router.get('/testing', controller.testing)
router.get('/search', controller.search)
router.post('/post', controller.post)
router.get('/timeline', controller.timeline)


module.exports = router