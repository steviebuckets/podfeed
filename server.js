const express = require('express');
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
app.post('/login', (req, res) => {
    User.findOne({email: req.body.email}).select('email password').exec((err, user) => {
        if (err) {
            return res.status(404).json({message: 'User not found'})
        };
        if else
            (!user) {
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
        });});

    //register route
    app.post('/register', (req, res) => {
        let user = new User();
        user.email = req.body.email;
        user.password = req.body.password;
        user.save((err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({message: "User already exists"})
            }
            let myToken = jwt.sign({
                email: user.email,
                id: user._id
            }, secret, {expiresIn: "24h"});
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

    //find a user
    app.get('/users', (req, res) => {
        User.find().then(users => {
            res.json(users);
        });
    })

    //if user show me podcasts
    app.get('/podcasts', (req, res) => {
        if (User) {

            User.findById(req.decoded.id, (err, user) => {
                console.log(err)
                res.json(user.podcasts.sort((prev, next) => {
                    return new Date(next.created) - new Date(prev.created);

                }));

            });
        }

    });

//if user let me search for podcasts
    app.get('/search', (req, res) => {
        console.log(req.query)
        if (req.query) {
            const search = req.query['q'];
            // your unirest stuff
            var unirest = require('unirest');
            var podcast = encodeURI(req.query['q']);
            var Request = unirest.get(`https://api.mixcloud.com/search/?q=/${podcast}/&type=cloudcast`);
            Request.end(function(response) {
                // console.log(response.body);
                res.json(JSON.parse(response.body));
            });
        }
    })app.listen(app.get('port'), () => {
        console.log(`Find the server at: http://localhost:${app.get('port')}/`);
    });
