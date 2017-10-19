var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'N5GJakm9QPMXZtf06ZS4DK8U2',
    'D19VkYLHpz5GWjg5ZNksjOjBsH1xNlehie0AiPWyz5IIoP5NKY',
    '1.0A',
    null,
    'HMAC-SHA1'
  );

 

module.exports = oauth