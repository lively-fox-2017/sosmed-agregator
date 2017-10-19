'use strict'

const express = require('express');
const Twatt = require('./../controllers/twatt');

const router = express.Router();

router.get('/', Twatt.timeline);

module.exports = router;