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

router.post("/", (req, res) => {
  res.send("add consumer details");
});

//update consumer details with put and need id of the consumer that we updating

router.put("/:id", (req, res) => {
  res.send("updating particular consumer details");
});

//delete consumer details with delete and need id of the consumer we deleting

router.delete("/:id", (req, res) => {
  res.send("deleting the contact");
});

module.exports = router;
