const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
if (process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'));
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

app.get('/podcasts', (req, res) => {
  res.json({
    name: 'podcast',
    title: 'title'
});
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
