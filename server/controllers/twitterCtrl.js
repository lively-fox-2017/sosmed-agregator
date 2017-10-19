const Twitter = require('../models/twitter');

class TwitterCtrl {
  static searchTweet(req, res, next) {
    let twitter = new Twitter();

    twitter.searchTweet(req.query.q)
      .then(data => {
        res.status(200).json(JSON.parse(data));
      })
      .catch(reason => {
        res.status(400).json(reason);
      });
  }

  static timeline(req, res, next) {
    let twitter = new Twitter();

    twitter.timeline(req.query.count)
      .then(data => {
        res.status(200).json(JSON.parse(data));
      })
      .catch(reason => {
        res.status(400).json(reason);
      });
  }

  static trending(req, res, next) {
    let twitter = new Twitter();

    twitter.trending(req.query.id)
      .then(data => {
        res.status(200).json(JSON.parse(data));
      })
      .catch(reason => {
        res.status(400).json(reason);
      });
  }

  static postTweet(req, res, next) {
    let twitter = new Twitter();

    twitter.postTweet(req.body.tweet)
      .then(data => {
        res.status(200).json(JSON.parse(data));
      })
      .catch(reason => {
        res.status(400).json(reason);
      });
  }

  static requestToken(req, res, next) {
    let twitter = new Twitter();

    twitter.requestToken(req, res, next);
  }

  static setAccessToken(req, res, next) {
    let twitter = new Twitter();

    twitter.setAccessToken(req, res, next);
  }
}

module.exports = TwitterCtrl;
