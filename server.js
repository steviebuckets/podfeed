const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

app.get('/podcasts', (req, res) => {
    res.json({name: 'podcast', title: 'title'});
});

app.get('/search', (req, res) => {
  console.log(req.query)
    if (req.query) {
        const search = req.query['q'];
        // your unirest stuff
        var unirest = require('unirest');
        var podcast = encodeURI(req.query['q']);
        var Request = unirest.get(`https://api.mixcloud.com/search/?q=/${podcast}/&type=cloudcast`);
        Request.end(function(response) {
            console.log(response.body);
            res.json(JSON.parse(response.body));
        });
    }
})

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
