const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  local: {
    name: String,
    password: String
  }
});

module.exports = mongoose.model('User', userSchema);
