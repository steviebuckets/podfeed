const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

//podcasts Schema
const podcastSchema = new mongoose.Schema({
  // "username": {type: String, required: true},
  "name": {type: String, required: true},
  "image": { type: String, required: true },
  "image_id": { type: String }
});

//user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, select: false, required: true},
  podcasts: [podcastsSchema] // One User has Many Podcasts
});

/// shashing before saves
// pre-save
userSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next(); // means that if the password is not changed, just go to the next part and save the user


  bcrypt.hash(user.password, null, null, function(err, hash) {
    if(err) return next(err);
    user.password = hash;
    next();
  });
});


//compare password
userSchema.methods.comparePassword = function(password) {
  var user = this;
  return bcrypt.compareSync(password, user.password);

}

const User = mongoose.model('User', userSchema);
const Podcast = mongoose.model('Podcasts', podcastSchema);

module.exports = {
  User: User,
  Podcast: Podcast
}
