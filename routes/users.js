const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const { body, validationResult } = require("express-validator");

const User = require("../models/User");

// we are sending post request to register our store
// this is a public route and anyone can have access
// this route is created for the registeration process
router.post(
  "/",

  body("first_name", "first_name is required").not().isEmpty(),
  body("last_name", "last_name is required").not().isEmpty(),
  body("email", "please enter a valid email").isEmail(),
  body("password", "Password must be minimum 6 character ").isLength({
    min: 6,
  }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //deconstructing req.body
    const { first_name, last_name, email, password } = req.body;

    //finding user by email and checking if it already exist
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          msg: "User already exist",
        });
      }
      //if user doesnot exist we will create new user using User model
      user = new User({
        first_name,
        last_name,
        email,
        password,
      });
      //we will hash the password before saving to database with bcrypt

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      //saving the user
      await user.save();
      res.send("saved in database");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
