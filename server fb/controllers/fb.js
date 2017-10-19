const axios = require('axios')
const FB = require('fb')
var userID = ''


class fbook{
    static get(req,res) {
       console.log(accessToken)
       res.send(accessToken)
    }

    static set(req,res) {
        FB.setAccessToken(req.body.headers.accessToken);
        axios.get(`https://graph.facebook.com/me?access_token=${req.body.headers.accessToken}`)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }

    static postTimeline(req,res) {
        FB.setAccessToken(req.body.headers.accessToken);
        axios.get(`https://graph.facebook.com/me?access_token=${req.body.headers.accessToken}`)
            .then(function (response) {
                // console.log(response.data);
                userID = response.data.id
                FB.api(
                    "/me/feed",
                    "POST",
                    {
                        "message": "This is test message"
                    },
                    function (response) {
                      if (response && !response.error) {
                        /* handle the result */
                      }
                    }
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = fbook