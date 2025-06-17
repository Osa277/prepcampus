const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
const generateToken = async (user) => {
  const payload = {
    userId: user._id,
    userEmail: user.email,
    userName: user.username,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

module.exports = generateToken