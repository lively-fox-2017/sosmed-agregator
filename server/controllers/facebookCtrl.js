const model = require('../models/facebook.js');
var jwt = require('jsonwebtoken');


class FacebookCtrl {
  static login(req, res, next) {
    model.me(req.body.accessToken).then((response) => {
      var token = jwt.sign({
        name: response.name,
        id: response.id,
        accessToken:req.body.accessToken
      }, process.env.SECRET_JWT);
      res.send(token);
    })
  }
  static post(req, res, next) {
    jwt.verify(req.body.accessToken, process.env.SECRET_JWT, function(err, decoded) {
      model.me(decoded.accessToken).then((response) => {
        model.post(decoded.accessToken, response.id, req.body.post).then((message) => {
          res.send(message);
        })
      })
    });
  }
}

module.exports = FacebookCtrl;
