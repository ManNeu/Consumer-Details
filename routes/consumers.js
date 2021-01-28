const express = require("express");
const router = express.Router();

//defining four routes read, add, update and delete

//get info of conusmers after login

router.get("/", (req, res) => {
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
