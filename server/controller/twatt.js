const dotenv = require('dotenv').config()

const OAuth = require('oauth')
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CUSTOMER_KEY, // Customer_KEY
    process.env.CUSTOMER_SECRET,// Customer_Secret_KEY
    '1.0A',
    null,
    'HMAC-SHA1'
);


// twitter trand
function testing (req, res){
    let testing = req.body.testing
    oauth.get(
        'https://api.twitter.com/1.1/trends/place.json?id=23424977',
        process.env.KEY_USER_TOKEN, //User token 
        process.env.KEY_USER_SECRET, //User secret token            
    function (err, data, resp){
        if (err){
            res.send(err)
        }else{
            res.send(data)
        }              
    });    
}

// Function Search
function search (req, res){
    let search = req.body.search
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
        process.env.KEY_USER_TOKEN,// User Token
        process.env.KEY_USER_SECRET, // User Secret Token
        
        function (err, data, resp){
            if(err){
                res.send(err)
            }else {
                res.send(data)
            }
        }
    )
}

//  post Status Update user

function post (req, res){
    let status = req.body.status
    oauth.post(
        'https://api.twitter.com/1.1/statuses/update.json',
        process.env.KEY_USER_TOKEN,// User Token
        process.env.KEY_USER_SECRET, // User Secret Token
        {"status": "nyampah lagi ahhh"}, // isi status anda disini
        (e, data, resp)=>{
            if(e)res.send(e);
            res.send(data)
        }
    )
}

function timeline(req,res){
    // res.send('blala')
    let timeline = req.body.timeline
    oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json',
        process.env.KEY_USER_TOKEN,// User Token
        process.env.KEY_USER_SECRET, // User Secret Token
        function (err, data, response){
            if(err){
                res.send(err)
            }else {
                res.send(data)
            }
        }
    )
}


module.exports = {
    testing,
    search,
    post,
    timeline
};

