'use strict'

const express = require('express');
const Twatt = require('./../controllers/twatt');

const router = express.Router();

router.get('/:keyword', Twatt.search);

module.exports = router;