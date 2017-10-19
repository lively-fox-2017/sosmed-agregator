var oauth = require('../models/twitter')

class Twitter{
    static getTrends(req,res) {
        var tweets = ''
        oauth.get(
            'https://api.twitter.com/1.1/trends/place.json?id=23424977',
            '582131408-MdlJd3JcvSFQvCZYJC05w8RI6ukJvhSkl6w6h3tq', //test user token 
            'ilKfbT0Yweu7r9QtzLwYdb6d8g7tMJK1yjLMvihrurXa6', //test user secret             
            function (e, data){
              if (e) console.error(e); 
                var tweets = JSON.parse(data)
                res.send(tweets[0].trends)
                // res.render('index', {title: 'tweets', tweets: tweets[0].trends}) 
            });
    }

    static getTimeline(req,res) {
        var tweets = ''
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            '582131408-MdlJd3JcvSFQvCZYJC05w8RI6ukJvhSkl6w6h3tq', //test user token 
            'ilKfbT0Yweu7r9QtzLwYdb6d8g7tMJK1yjLMvihrurXa6', //test user secret             
            function (e, data){
              if (e) console.error(e); 
                var tweets = JSON.parse(data)
                res.send(tweets)
                // res.render('timeline', {title: 'timeline', tweets: tweets}) 
            });
    }

    static searchTweet(req,res) {
        if(req.body.max === '') {
            req.body.max = 5
        }
        var tweets = ''
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=%23${req.body.hashtag}&result_type=mixed&count=${req.body.max}`,
            '582131408-MdlJd3JcvSFQvCZYJC05w8RI6ukJvhSkl6w6h3tq', //test user token 
            'ilKfbT0Yweu7r9QtzLwYdb6d8g7tMJK1yjLMvihrurXa6', //test user secret             
            function (e, data){
              if (e) console.error(e); 
                var tweets = JSON.parse(data)
                res.send(tweets.statuses)
                // res.render('searchResults', {title: 'Search Results', tweets: tweets.statuses}) 
            });
    }

    static postTweet(req,res) {
        // var tweets = ''
        oauth.post(
            'https://api.twitter.com/1.1/statuses/update.json?',
            '582131408-MdlJd3JcvSFQvCZYJC05w8RI6ukJvhSkl6w6h3tq', //test user token 
            'ilKfbT0Yweu7r9QtzLwYdb6d8g7tMJK1yjLMvihrurXa6',
            {"status":`${req.body.status}`}, //test user secret             
            function (e, data){
              if (e) console.error(e); 
                res.redirect('/')
            });
    }
}

module.exports = Twitter
