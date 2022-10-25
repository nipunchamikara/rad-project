const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const secret = "secret123";

// Add new user - registration
router.post("/register", async (req, res) => {
  try {
    const { createHmac } = await import("node:crypto");
    const hashedPassword = createHmac("sha256", secret)
    .update(req.body.password)
    .digest("hex");

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();
    const token = jwt.sign(
      {
        _id: user._id,
        username: user.username,
        email: user.email
      },
      secret,
      { expiresIn: "1h" },
      (err, token) => {
        res.status(200).json({
          message: "Auth successful",
          token: token
        });
      }
    );
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error occurred while adding user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { createHmac } = await import("node:crypto");
    const hashedPassword = createHmac("sha256", secret)
      .update(req.body.password)
      .digest("hex");

    const user = await User.findOne({
      username: req.body.username,
      password: hashedPassword,
    });

    if (user) {
      const token = jwt.sign(
        {
          _id: user._id,
          username: user.username,
          email: user.email
        },
        secret,
        { expiresIn: "1h" },
        (err, token) =>
          res.status(200).json({
            message: "Auth successful",
            token: token
          })
      );
    } else {
      console.log("User not found");
      res.status(403).json({ error: "Invalid details" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
