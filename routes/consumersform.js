const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

const Consumer = require("../models/Consumer");

//@route  Post routes    api/consumersform
//@description    Post detail about consumer by themselves
//@access  public everyone with the link or qr code

router.post(
  "/",
  [
    body("first_name", "first_name is required").notEmpty(),
    body("last_name", "last_name is required").notEmpty(),
    body("email", "email is required").notEmpty(),
    body("phone", "phone is required").notEmpty(),
    body("address", "address is required").notEmpty(),
    body("symptoms", "symptoms is required").notEmpty(),
    body("travel_history", "travel_history is required").notEmpty(),
    body("type", "type is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      symptoms,
      travel_history,
      type,
    } = req.body;
    try {
      const newConsumer = new Consumer({
        first_name,
        last_name,
        email,
        phone,
        address,
        symptoms,
        travel_history,
        type,
      });

      const consumer = await newConsumer.save();
      res.json(consumer);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
