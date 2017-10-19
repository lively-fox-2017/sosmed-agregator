const model = require('../models/facebook.js');
var jwt = require('jsonwebtoken');


class FacebookCtrl {
  static login(req, res, next){
    model.me(req.body.accessToken).then((response)=>{
      model.coba(req.body.accessToken, response.id).then((respond)=>{
        console.log(respond)
      }).catch((err)=>{
        console.log(err);
      })
      var token = jwt.sign({ name: response.name, id:response.id }, process.env.SECRET_JWT);
      res.send(token);
    })
  }
}

module.exports = FacebookCtrl;
