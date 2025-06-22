const bcrypt = require("bcrypt");
const validateFields = require("../utils/validateFields");
const errorMessage = require("../utils/errorMessage");
const generateToken = require("../helper/tokenGeneration");
const userModel = require("../models/UserModel");

const JWT_SECRET = process.env.JWT_SECRET;

class UserService {
  async userSignup({ firstname, lastname, email, password }) {
    validateFields(["firstname", "lastname", "email", "password"], {
      firstname,
      lastname,
      email,
      password,
    });

    const foundUser = await userModel.findOne({ email });
    if (foundUser) throw errorMessage("User already exists", 409);

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password,
    });
    await newUser.save();
    const token = await generateToken(newUser);
    return token;
  }

  async userLogin({ email, password }) {
    validateFields(["email", "password"], { email, password });

    const foundUser = await userModel.findOne({ email });
    if (!foundUser) throw errorMessage("Invalid credentials", 401);

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) throw errorMessage("Invalid credentials", 401);
    const token = await generateToken(foundUser);
    return token;
  }

  async userInfo({ userId }) {
    const foundUserById = await userModel.findById(userId);
    if (!foundUserById) throw errorMessage("Invalid user Id", 400);
    const userData = {
      username: foundUserById.username,
      email: foundUserById.email,
      level: foundUserById.level,
    };
    return userData;
  }
}

module.exports = new UserService();
