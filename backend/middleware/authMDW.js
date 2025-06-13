const errorMessage = require("../utils/errorMessage");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return errorMessage("authorization missing in headers", 401, next);
  try {
    const token = authHeader.split(" ")[1];
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken)
      return errorMessage("token is Expired or tampered", 401, next);
    next();
  } catch (err) {
    next(err);
  }
};


module.exports = authMiddleware