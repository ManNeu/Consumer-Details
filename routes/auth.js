const express = require("express");
const router = express.Router();

//need two routes get the logged in user and login user and get token

//Get route to get infomation about logged in user
router.get("/", (req, res) => {
  res.send("get the logged in user");
});

//Post route to post info and looged in
router.post("/", (req, res) => {
  res.send("log in user");
});

module.exports = router;
