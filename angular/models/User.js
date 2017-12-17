const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

userSchema.plugin(passportLocalMongoose);

const User = module.exports = mongoose.model('User', userSchema);

module.exports.register = (newUser) => { // function to register a new user
    newUser.save();
}
