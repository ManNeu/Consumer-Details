require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const { body, validationResult } = require("express-validator");

const User = require("../models/User");

//need two routes get the logged in user and login user and get token

//Get route to get infomation about logged in user
router.get("/", auth, async (req, res) => {
  try {
    //getting req.user from middleware auth
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//Post route to post info and looged in
router.post(
  "/",
  //express validation as second parameter
  body("email", "Please enter a valid email").isEmail(),
  body("password", "password is required").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    //deconstructing email and password from req.body
    const { email, password } = req.body;

    //using findOne function of mongoose to look for email
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          msg: "Invalid credentials",
        });
      }
      //using bcrypt.compare to validate password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          msg: "invalid credentials",
        });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.jwtSecret,
        {
          expiresIn: 31556926,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
