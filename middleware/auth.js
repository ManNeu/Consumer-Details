require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //getting token
  const token = req.header("x-auth-token");

  //checking token

  if (!token) {
    return res.status(401).json({ msg: "No token, authorized denied" });
  }
  try {
    //pull out the payload
    const decoded = jwt.verify(token, process.env.jwtSecret);
    //assigning the user that is in our payload to req.user so we can have access to it in auth.js
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({
      msg: "not a valid token",
    });
  }
};
