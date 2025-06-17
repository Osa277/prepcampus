const UserService = require("../services/userService");

const userInfo = async (req, res, next) => {
  try {
    const result = UserService.userInfo(req.params);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = userInfo;
