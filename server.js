const express = require('express');
const dotenv = require('dotenv');
dotenv.config({silent: true});
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let secret = 'mysecret';

//for user authentication
const jwt = require('jsonwebtoken');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

const app = express();
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
}

const Podcasts = require('./models').Podcasts;
const User = require('./models').User;
const bcrypt = require('bcrypt-nodejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

//signin route
app.post('/login/', (req, res) => {
  User.findOne({email: req.body.email}).select('email password').exec((err, user) => {
    if (err) {
      return res.status(404).json({message: 'User not found'})
    };
    if (!user) {
      return res.status(500).json({success: false, message: 'User does not exist'});
    }
    if (!user.comparePassword(req.body.password)) {
      res.json({success: false, message: 'Wrong password'});
    } else {
      let myToken = jwt.sign({
        email: user.email,
        id: user._id
      }, secret, {expiresIn: "24h"});
      res.json({
        success: true,
        message: 'Your token! ' + myToken,
        token: myToken
      });
    }
  });
});

//register route
app.post('/register/', (req, res) => {
  let user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.save((err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({message: "User already exists here!"})
    }
    let myToken = jwt.sign({
      email: user.email,
      id: user._id
    }, secret, {expiresIn: "24h"});
    console.log("my response in server!")
    res.json({

      success: true,
      message: "User successfully registered!" + myToken,
      token: myToken
    });
  })

});

/// anything below is "PROTECTED"
app.use((req, res, next) => {
  let token = req.body.token || req.query.token || req.params['token'] || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.json({success: false, message: 'failed to authenticate token.'});
      } else {
        req.decoded = decoded;
        req.person = "Steve rocks!"
        next();
      }

    });
  } else {
    return res.status(403).send({success: false, message: 'No token provided'});
  }
});

app.get('/subscriptions', (req, res) => {
  User.findById(req.decoded.id, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(404).json({message: 'Sorry, no podcasts found'});
    } else {
      res.status(200).json(user.podcasts);
    }
  })
})

//if user show me podcasts
app.get('/podcasts', (req, res) => {
  User.findById(req.decoded.id, (err, user) => {
    console.log(err)
    res.json(user.podcasts.sort((prev, next) => {
      return new Date(next.created) - new Date(prev.created);
    }));

  });

});

//New Podcast Subscription
app.post('/subscribe', (req, res) => {
  // const required = 'key';
  // const required = ['key', 'image';
  // console.log('body', req.body);
  // User.find({_id: req.decoded.id})
  // or User.find({key: req.params.key})
  User.findById(req.decoded.id, (err, user) => {
    user.podcasts.push({
      key: req.body.key, image: req.body.image, url: req.body.url
      // slug: req.body.slug,
      // username: req.body.username
    });
    console.log(user, "my user data from server");
    user.save((err) => {
      if (err) {
        console.log(err);
        return res.status(404).json({message: 'Failed to subscribe'}); // this is an aer
      }
      res.status(200).json(user.podcasts);
    })
  })

});

//Delete Podcast Subscription
app.delete('/subscriptions/:id', (req, res) => {
  //  /:ha/:blah --> req.params.ha ,or req.params.blah
  console.log("my subscriptions")
  User.findById(req.decoded.id, (err, user) => {

    let subscription = user.podcasts.id(req.params.id); // id is s epcial method in mongoose to access a subdoc by _id

    if (subscription){
      subscription.remove();
      user.save(function(err){
        if (err)
          res.status(404).json({message: "Cannot save user"});
        else
          res.status(200).json({message: 'you deleted'})
      });
    } else {
      res.status(404).json({message: "Not found!"});
    }

    //
    // parent.children.id(_id).remove();
    // // Equivalent to `parent.child = null`
    // parent.child.remove();
    // parent.save(function (err) {
    //   if (err) return handleError(err);
    //   console.log('the subdocs were removed');
    // });
      // you send back a response!!!

    // if (subscription) {
    //     subscription.remove();
    //     user.save((err) => {
    //         if (err) return res.status(404).json({ message: 'Error, Could not delete' });
    //         res.json({});
    //     });
    // } else {
    //     res.status(404).json({ message: 'Error, not located' });
    // }

  });
});

//if user let me search for podcasts
app.get('/search', (req, res) => {
  if (req.query) {
    const search = req.query['q'];
    // your unirest stuff
    var unirest = require('unirest');
    var podcast = encodeURI(req.query['q']);
    var Request = unirest.get(`https://api.mixcloud.com/search/?q=/${podcast}/&type=cloudcast`);
    Request.end(function(response) {
      let responseData = JSON.parse(response.body)
      // // # Dummy data
      // /// what if you had a way tocheck the database, for the existings of the key
      // // 1. get the user (req.decoded.id)
      // User.findById(req.decoded.id, (err, user) =>{
      //   for (user) {
      //       podcasts:
      // [0]    [ { key: '/DjComplexion/the-future-beats-show-063-maximusmmc-interview/',
      // [0]        image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/f/2/b/23ac-421d-4179-876d-16a7def9ec14',
      // [0]        _id: 592f4fd96acaa072edac2b90 },

      //
      //   }
      // })
      // responseData.data[0].subscribed = true; // making a change!! or introducing one
      // console.log(responseData, 'We are here')

      /// change the contents of data in side responseData
      res.json(responseData);
    });
  }
})

//catch-all endpoint if client makes request to non existent endpoint
app.use('*', function(req, res) {
  res.status(404).json({message: 'Not Found'});
});

//connect to database here
// catch-all endpoint if client makes request to non existent endpoint
app.use('*', function(req, res) {
  res.status(404).json({message: 'Not Found'});
});

let server;

//this function connects to our databse, then starts server
function runServer() {
  return new Promise((resolve, reject) => {

    mongoose.connect(process.env.DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(3001, () => {
        /* console.log(`Your app is listening on port ${PORT}`);*/
        resolve();
      }).on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

//this function closes server, and returns a promise
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });

}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {
  app,
  runServer,
  closeServer
};
