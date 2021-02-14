const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  // alternative
  store_name: {
    type: String,
    required: true,
  },

  store_location: {
    type: String,
    required: true,
  },
  // first_name: {
  //   type: String,
  //   required: true,
  // },
  // last_name: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
