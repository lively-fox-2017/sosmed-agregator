'use strict'

const OAuth = require('oauth');

const reqTokenURL = 'https://api.twitter.com/oauth/request_token';
const accTokenURL = 'https://api.twitter.com/oauth/access_token';

const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRET;
const userToken = process.env.USER_TOKEN;
const userSecret = process.env.USER_SECRET;

const oauth = new OAuth.OAuth(reqTokenURL, accTokenURL, consumerKey, consumerSecret, '1.0A', null, 'HMAC-SHA1');


const search = (keyword) => {
	const reqEndpoint = 'https://api.twitter.com/1.1/search/tweets.json';
	const params = '?q=' + keyword;

	return new Promise((resolve, reject) => {
		oauth.get(reqEndpoint + params, userToken, userSecret, (err, data, res) => {
			if (err) reject(err);
			data = JSON.parse(data).statuses.map(datum => {
				return {
					createdAt: datum.createdAt,
					text: datum.text,
					hashtags: datum.entities.hashtags.length > 0 ? datum.entities.hashtags.map(hashtag => hashtag.text) : null,
					media: datum.entities.media ? datum.entities.media.map(medium => ({url: medium.media_url_https, type: medium.type})) : null,
					user: {
						name: datum.user.name,
						username: datum.user.screen_name,
						picture: datum.user.profile_image_url_https
					}
				}
			});
			resolve(data);
		});
	});
};

const timeline = () => {
	const reqEndpoint = 'https://api.twitter.com/1.1/statuses/home_timeline.json';

	return new Promise((resolve, reject) => {
		oauth.get(reqEndpoint, userToken, userSecret, (err, data, res) => {
			if (err) reject(err);
			data = JSON.parse(data).map(datum => {
				return {
					createdAt: datum.createdAt,
					text: datum.text,
					hashtags: datum.entities.hashtags.length > 0 ? datum.entities.hashtags.map(hashtag => hashtag.text) : null,
					media: datum.entities.media ? datum.entities.media.map(medium => ({url: medium.media_url_https, type: medium.type})) : null,
					user: {
						name: datum.user.name,
						username: datum.user.screen_name,
						picture: datum.user.profile_image_url_https
					}
				}
			});
			resolve(data);
		});
	});
};

const tweet = (status) => {
	const reqEndpoint = 'https://api.twitter.com/1.1/statuses/update.json';
	const stat = { "status": status };
	return new Promise((resolve, reject) => {
		oauth.post(reqEndpoint, userToken, userSecret, stat, (err, data) => {
			if (err) reject(err);
			data = JSON.parse(data);
			data = {
				createdAt: data.createdAt,
				text: data.text,
				hashtags: data.entities.hashtags.length > 0 ? data.entities.hashtags.map(hashtag => hashtag.text) : null,
				user: {
					name: data.user.name,
					username: data.user.screen_name
				}
			}
			resolve(data);
		});
	});
};

module.exports = {search, timeline, tweet};