


/**
Work around situations
- when websites enforce CORS policies on the client. -> Cross Origin Resource sharing ()

Client / Frontend talks to backend; backend talks to 3rd party API; API talks back to backend; backend sends data to the front. [Super FAST!]


*/
var unirest = require('unirest');
var podcast = req.query['q']
var Request = unirest.get('https://api.mixcloud.com/search/?q=/the%20verge/&type=cloudcast');
Request.end(function (response) {
  console.log(response.body);
  res.json(response.body);
});
