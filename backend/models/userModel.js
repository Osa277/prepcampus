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
  jobRole: {
    type: String,
    enum: [
      "frontend-developer",
      "backend-developer",
      "fullstack-developer",
      "mobile-developer",
      "devops-engineer",
      "data-scientist",
      "machine-learning-engineer",
      "qa-engineer",
      "ui-ux-designer",
      "product-manager",
    ],
    default: "programmer",
  },
  level: {
    type: Number,
    default: 1,
  },
});

const userModel = mongoose.model("userModel", user);

module.exports = userModel;
