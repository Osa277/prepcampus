const bcrypt = require("bcrypt");
const validateFields = require("../utils/validateFields");
const errorMessage = require("../utils/errorMessage");
const generateToken = require("../helper/tokenGeneration");
const userModel = require("../models/UserModel");
const levelModel = require("../models/userLevelModel");

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

    const levelDoc = await levelModel.create({});
    const newUser = new userModel({
      firstname,
      lastname,
      email,
      password,
      levels: levelDoc._id,
    });
    await newUser.save();
    
    const token = await generateToken(newUser);
    
    // Return both token and user data
    const userData = {
      _id: newUser._id,
      firstName: newUser.firstname,
      lastName: newUser.lastname,
      email: newUser.email,
      level: newUser.level || 1,
      stage: newUser.stage || 1,
      isAdmin: newUser.isAdmin || false,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt
    };
    
    return { token, user: userData };
  }

  async userLogin({ email, password }) {
    validateFields(["email", "password"], { email, password });

    const foundUser = await userModel.findOne({ email });
    if (!foundUser) throw errorMessage("Invalid credentials", 401);

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) throw errorMessage("Invalid credentials", 401);
    
    const token = await generateToken(foundUser);
    
    // Return both token and user data
    const userData = {
      _id: foundUser._id,
      firstName: foundUser.firstname,
      lastName: foundUser.lastname,
      email: foundUser.email,
      level: foundUser.level || 1,
      stage: foundUser.stage || 1,
      isAdmin: foundUser.isAdmin || false,
      createdAt: foundUser.createdAt,
      updatedAt: foundUser.updatedAt
    };
    
    return { token, user: userData };
  }

  async userInfo({ userId }) {
    const foundUserById = await userModel.findById(userId);
    if (!foundUserById) throw errorMessage("Invalid user Id", 400);
    const userData = {
      fullname: `${foundUserById.firstname} ${foundUserById.lastname}`,
      email: foundUserById.email,
      level: foundUserById.level,
    };
    return userData;
  }
}

module.exports = new UserService();
