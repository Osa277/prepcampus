const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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
  experienceLevel: {
    type: String,
    enum: [
      "intern",
      "entry-level",
      "junior-developer",
      "mid-level-developer",
      "senior-developer",
      "lead-developer",
      "principal-engineer",
      "staff-engineer",
      "engineering-manager",
      "cto",
    ],
    default: "entry-level",
  },
  level: {
    type: Number,
    default: 1,
  },

  createdAt: {
    type: String,
    default: Date.now()
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
