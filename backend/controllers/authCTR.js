const userModel = require("../models/UserModel");
const errorMessage = require("../utils/errorMessage");
const validateFields = require("../utils/validateFields");
const bcrypt  = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const Signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!validateFields(["username", "email", "password"], req.body)) {
      return errorMessage("Missing Field!", 400, next);
    }
    const foundUser = await userModel.findOne({ email });
    if (foundUser) return errorMessage("User already Exist", 401, next);

    const newUser = new userModel({ username, email, password });
    await newUser.save();

    const payload = {
      userId: newUser._id,
      userEmail: newUser.email,
      userName: newUser.username,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ token });
  } catch (err) {
    console.log("error occured while signing in: ", err);
    next(err);
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!validateFields(["email", "password"], req.body)) {
      return errorMessage("Missing Field!", 400, next);
    }
    const foundUser = await userModel.findOne({ email });
    if (!foundUser) return errorMessage("invalid email or password", 401, next);

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) return errorMessage("invalid email or password", 401, next);

    const payload = {
      userId: foundUser._id,
      userEmail: foundUser.email,
      userName: foundUser.username,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (err) {
    console.log("error occured while Loging in: ", err);
    next(err);
  }
};

module.exports = { Signup, Login };