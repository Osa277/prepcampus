const UserService = require("../services/userService");
const { SuccessResponse } = require("../utils/baseResponse");

const userInfo = async (req, res, next) => {
  try {
    const result = await UserService.userInfo(req.params);
    return new SuccessResponse(
      res,
      undefined,
      undefined,
       result ,
      undefined
    ).send(); 
  } catch (err) {
    next(err);
  }
};

module.exports = userInfo;