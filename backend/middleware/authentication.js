const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

async function authenticate(req, res, next) {
  const token = req.headers['x-access-token']

  try {
    const decode = jwt.verify(token, 'secret123')
    const email = decode.email
    const user = await User.findOne({ email: email })
    req.user = {
      _id: user._id,
      email: user.email,
      name: user.name
    }
    next()

  }catch (err) {
    console.log(err)
    res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = authenticate
