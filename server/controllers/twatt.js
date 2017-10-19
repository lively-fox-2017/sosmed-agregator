'use strict'
const Twatt = require('./../models/twatt');

const search = (req, res) => {
	Twatt.search(req.params.keyword)
	.then(data => {
		res.status(200).send(data);
	})
	.catch(err => {
		res.status(500).send(err);
	});
};

const timeline = (req, res) => {
	Twatt.timeline()
	.then(data => {
		res.status(200).send(data);
	})
	.catch(err => {
		res.status(500).send(err);
	});
};

const tweet = (req, res) => {
	Twatt.tweet(req.body.status)
	.then(data => {
		res.status(200).send(data);
	})
	.catch(err => {
		res.status(500).send(err);
	});
};

module.exports = {search, timeline, tweet}