const mongoose = require('mongoose')

const UserCchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('user', UserCchema)

module.exports = User