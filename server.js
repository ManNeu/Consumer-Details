const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "checking server" }));

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
