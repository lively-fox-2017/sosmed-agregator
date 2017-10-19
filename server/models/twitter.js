const OAuth = require('oauth');

class Twitter {
  constructor() {
    this.oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.APIKEY,
      process.env.APISECRET,
      '1.0',
      "http://localhost:3000/api/set_access_token",
      'HMAC-SHA1'
    );
  }

  searchTweet(query) {
    return new Promise((resolve, reject) => {
      this.oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${query}&result_type=popular&count=4`,
        process.env.ACCESSKEY,
        process.env.ACCESSSECRET,
        function(e, data, res) {
          if (e) reject(e);
          console.log(data);
          resolve(data)
        });
    })
  }

  timeline(count) {
    return new Promise((resolve, reject) => {
      this.oauth.get(
        `https://api.twitter.com/1.1/statuses/home_timeline.json?count=${count}`,
        process.env.ACCESSKEY,
        process.env.ACCESSSECRET,
        function(e, data, res) {
          if (e) reject(e);
          console.log(data);
          resolve(data)
        });
    })
  }

  trending(id) {
    return new Promise((resolve, reject) => {
      this.oauth.get(
        `https://api.twitter.com/1.1/trends/place.json?id=${id}`,
        process.env.ACCESSKEY,
        process.env.ACCESSSECRET,
        function(e, data, res) {
          if (e) reject(e);
          console.log(data);
          resolve(data)
        });
    })
  }

  postTweet(status) {
    return new Promise((resolve, reject) => {
      console.log(encodeURIComponent(status));
      this.oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json`,
        process.env.ACCESSKEY,
        process.env.ACCESSSECRET, {
          status: status
        },
        function(e, data, res) {
          if (e) reject(e);
          console.log(data);
          resolve(data)
        });
    })
  }

  requestToken(req, res, next) {
    this.oauth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results) {
      if (error) {
        console.log('error');
        console.log(error);
      } else {
        // store the tokens in the session
        req.session.oauth_token = oauth_token;
        req.session.oauth_token_secret = oauth_token_secret;
        // redirect the user to authorize the token
        res.redirect("https://twitter.com/oauth/authorize?oauth_token=" + req.session.oauth_token);
      }
    })
  }

  setAccessToken(req, res, next) {
    this.oauth.getOAuthAccessToken(req.session.oauth_token, req.session.oauth_token_secret, req.query.oauth_verifier, function(error, oauthAccessToken, oauthAccessTokenSecret, results) {
      if (error) {
        res.send("Error getting OAuth access token : " + util.inspect(error) + "[" + oauthAccessToken + "]" + "[" + oauthAccessTokenSecret + "]" + "[" + util.inspect(results) + "]", 500);
      } else {
        req.session.oauthAccessToken = oauthAccessToken;
        req.session.oauthAccessTokenSecret = oauthAccessTokenSecret;

        res.status(200).send('Access Token Acquired');
      }
    });
  }
}

module.exports = Twitter;
