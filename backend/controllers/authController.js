const UserService = require("../services/userService");
const { SuccessResponse } = require("../utils/baseResponse");

const signupController = async (req, res, next) => {
  try {
    // Handle both camelCase (frontend) and lowercase (backend) property names
    const userData = {
      firstname: req.body.firstName || req.body.firstname,
      lastname: req.body.lastName || req.body.lastname,
      email: req.body.email,
      password: req.body.password
    };
    
    const result = await UserService.userSignup(userData);
    return new SuccessResponse(res, 201, "User registered successfully", result).send();
  } catch (err) {
    console.log("error occurred while signing up: ", err);
    next(err);
  }
};

const loginController = async (req, res, next) => {
  try {
    const result = await UserService.userLogin(req.body);
    return new SuccessResponse(res, 200, "Login successful", result).send();
  } catch (err) {
    console.log("error occurred while logging in: ", err);
    next(err);
  }
};

module.exports = { signupController, loginController };
