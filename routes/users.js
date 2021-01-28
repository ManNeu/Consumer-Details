const express = require("express");
const router = express.Router();

// we are sending post request to register our store
// this is a public route and anyone can have access
// this route is created for the registeration process
router.post("/", (req, res) => {
  res.send("we are registering our store");
});

module.exports = router;
