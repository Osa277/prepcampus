const UserService = require("../services/userService");
const { SuccessResponse } = require("../utils/baseResponse");

const signupController = async (req, res, next) => {
  try {
    const token = await UserService.userSignup(req.body);
    return new SuccessResponse(res, 201, "User registered successfully", {
      token,
    }).send();
  } catch (err) {
    console.log("error occurred while signing up: ", err);
    next(err);
  }
};

const loginController = async (req, res, next) => {
  try {
    const token = await UserService.userLogin(req.body);
    return new SuccessResponse(res, 200, "Login successful", { token }).send();
  } catch (err) {
    console.log("error occurred while logging in: ", err);
    next(err);
  }
};

module.exports = { signupController, loginController };
