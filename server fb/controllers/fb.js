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
        FB.setAccessToken('EAABxKH2BhN4BAA3hpBamChZAGtNqtkrEwvEZCZC9VZBsos08iZC90dCuPGyGQ3cTtVwDCkMNF5sAmmJtFU2dTOoeXZCgkqxZAqr7SvuvOUYvxsZBzmKKDPYzarbgURHZCUuFCEypwP9Y6FDYw0eEaOWVL8o0KJeS4bxSfrptWaCmdG7srnUUX0rOZCwxw0LAfZBtYgh62gOGYr3SQZDZD');
        axios.get(`https://graph.facebook.com/me?access_token=${req.body.headers.accessToken}`)
            .then(function (response) {
                // userID = response.data.id
                FB.api(
                    "/me/feed",
                    "POST",
                    {
                        "message": req.body.headers.message
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