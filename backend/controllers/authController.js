const UserService = require("../services/userService");

const signupController = async (req, res, next) => {
  try {
    const result = await UserService.userSignup(req.body)
    res.status(201).json(result);
  } catch (err) {
    console.log("error occured while signing in: ", err);
    next(err);
  }
};

const loginController = async (req, res, next) => {
  try {
    const result = await UserService.userLogin(req.body)
    res.status(200).json(result);
  } catch (err) {
    console.log("error occured while Loging in: ", err);
    next(err);
  }
};

module.exports = { signupController, loginController };