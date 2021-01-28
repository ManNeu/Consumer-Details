const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "checking server" }));

//requiring routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/consumers", require("./routes/consumers"));

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
