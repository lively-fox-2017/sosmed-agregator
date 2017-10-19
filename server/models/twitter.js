const oauth = require('oauth');

class Auth {
  static request_token() {
    var myOauth = new oauth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    return myOauth
  }
  static search(search) {
    return new Promise((resolve, reject) => {
      var myOauth = Auth.request_token();
      myOauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=' + search,
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        function(err, data, result) {
          if (err) reject(err);
          resolve(JSON.parse(data));
        }
      )
    })
  }
  static timeline() {
    return new Promise((resolve, reject) => {
      var myOauth = Auth.request_token();
      myOauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        function(err, data, result) {
          if (err) reject(err);
          resolve(JSON.parse(data));
        }
      )
    })
  }
  static postTweet(tweet) {
    return new Promise((resolve, reject) => {
      var myOauth = Auth.request_token();
      myOauth.post(
        'https://api.twitter.com/1.1/statuses/update.json',
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET, {
          status: tweet
        },
        function(err, data, result) {
          if (err) reject(err);
          resolve(JSON.parse(data));
        }
      )
    })
  }
}

module.exports = Auth;
