const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

//podcasts Schema
const podcastsSchema = new.mongoose.Schema({
  "username": {type: String, required: true},
  "name": {type: String, required: true},
  "image": { type: String, required: true },
  "image_id": { type: String }
});

//user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, select: false, required: true},
  podcasts: [podcastsSchema];
});

//compare password
userSchema.methods.comparePassword = function(password) {
  var user = this;

}

const User = mongoose.model('User', userSchema);
const Podcasts = mongoose.model('Podcasts', podcastsSchema);

module.exports = {
  User: User,
  Podcasts: Podcasts
}
