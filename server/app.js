'use strict'

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

const search = require('./routes/search');
const timeline = require('./routes/timeline');
const tweet = require('./routes/tweet');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/search', search);
app.use('/timeline', timeline);
app.use('/tweet', tweet);

app.listen(3000);