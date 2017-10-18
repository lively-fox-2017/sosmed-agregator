const model = require('../models/twitter.js');

class TwitterCtrl {
  static search(req, res, next) {
    model.search(req.params.search).then((data)=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
      res.status(400).res.json(err);
    })
  }
  static timeline(req, res, next) {
    model.timeline().then((data)=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
      res.status(400).res.json(err);
    })
  }
  static postTweet(req, res, next) {
    model.postTweet(req.body.tweet).then((data)=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
      res.status(400).res.json(err);
    })
  }
}

module.exports = TwitterCtrl;
