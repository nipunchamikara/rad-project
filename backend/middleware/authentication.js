const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

async function authenticate(req, res, next) {
  const token = req.headers['x-access-token']

  try {
    const decode = jwt.verify(token, 'secret123')
    if(decode) {
      req.user = {
        _id: decode._id,
        email: decode.email,
        name: decode.name
      }
      next()
    }else {
      throw "No user found for email: " + email
    }
   

  }catch (err) {
    console.log(err)
    res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = authenticate
