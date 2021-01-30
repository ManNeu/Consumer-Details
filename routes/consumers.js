const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

const Consumer = require("../models/Consumer");

//defining four routes read, add, update and delete

//get info of conusmers after login, auth will protect the routes

router.get("/", auth, async (req, res) => {
  try {
    //finding consumers by user id and sorting by date
    const consumers = await Consumer.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(consumers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
  res.send("get info of consumer");
});

//add consumer details with post

router.post(
  "/",
  [
    //from auth we can get req.user
    auth,
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
        user: req.user.id,
      });

      const consumer = await newConsumer.save();
      res.json(consumer);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);

//update consumer details with put and need id of the consumer that we updating

router.put("/:id", (req, res) => {
  res.send("updating particular consumer details");
});

//delete consumer details with delete and need id of the consumer we deleting

router.delete("/:id", (req, res) => {
  res.send("deleting the contact");
});

module.exports = router;
