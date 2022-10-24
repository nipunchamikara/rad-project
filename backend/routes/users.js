const express = require('express');
const router = express.Router();
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const secret = 'secret123';

// Add new user - registration
router.post('/register', async (req, res, next) => {

  const { createHmac } = await import('node:crypto');
  const hashedPassword = createHmac('sha256', secret)
              .update(req.body.password)
              .digest('hex');

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })

    const result = await user.save()
    res.status(200).json({ user: {
      _id: user._id,
      name: user.name,
      email: user.email
    } })
  
  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Error occured while adding user' })
  } 
});

// Login
router.post('/login', async (req, res, next) => {
  
  const { createHmac } = await import('node:crypto');
  const hashedPassword = createHmac('sha256', secret)
              .update(req.body.password)
              .digest('hex');

  try {
    const user = await User.findOne({
      email: req.body.email,
      password: hashedPassword
    })

    if(user) {
      const token = jwt.sign({
        email: user.email
      }, 'secret123')

      return res.status(200).json({ status: 'ok', user: token })
      
    }else {
      res.status(403).json({ error: 'Invalid details' })
    }
  
  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Login failed' })
  }
})

module.exports = router;
