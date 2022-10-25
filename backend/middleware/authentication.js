const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

async function authenticate(req, res, next) {
  const auth =
    req.headers.Authorization ||
    req.headers["x-access-token"] ||
    req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    res.status(401).json({ error: "No token provided" });
  }
  console.log(auth);
  const token = auth.split(" ")[1];

  try {
    const decode = jwt.verify(token, "secret123");
    const id = decode.id;
    const user = await User.findOne({ _id: id });
    req.user = {
      _id: user._id,
      email: user.email,
      name: user.name,
    };
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = authenticate;
