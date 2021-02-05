const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ConsumerSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  travel_history: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "staff",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Consumer = mongoose.model("consumer", ConsumerSchema);

module.exports = Consumer;
