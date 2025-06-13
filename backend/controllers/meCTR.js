const userModel = require("../models/UserModel");
const errorMessage = require("../utils/errorMessage");

const userInfo = async (req, res, next) => {
  try {
    const { userId } = req.params;
      const foundUserById = await userModel.findById(userId);
    if (!foundUserById) return errorMessage("Invalid user Id", 400, next);
    const userData = {
      username: foundUserById.username,
      email: foundUserById.email,
      level: foundUserById.level,
    };
    res.status(200).json(userData);
  } catch (err) {
    next(err);
  }
};

module.exports = userInfo;
