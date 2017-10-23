const Facebook = require('../models/facebook');

class FacebookCtrl {
  static requestToken(req, res, next) {
    Facebook.requestToken(req, res, next);
  }
}

module.exports = FacebookCtrl;
