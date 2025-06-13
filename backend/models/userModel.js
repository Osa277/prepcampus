const mongoose = require("mongoose");

const user = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Level: {
    type: Number,
    default: 1,
    // ref: "levelModel",
  },
});

const userModel = mongoose.model("userModel", user);

module.exports = userModel;
