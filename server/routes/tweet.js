'use strict'

const express = require('express');
const Twatt = require('./../controllers/twatt');

const router = express.Router();

router.post('/', Twatt.tweet);

module.exports = router;