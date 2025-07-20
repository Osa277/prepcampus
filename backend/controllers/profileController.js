const userModel = require("../models/UserModel");
const errorMessage = require("../utils/errorMessage");
const { SuccessResponse } = require("../utils/baseResponse");

const getProfileController = async (req, res, next) => {
  try {
    const userId = req.user.id; // From auth middleware
    
    const user = await userModel.findById(userId);
    if (!user) {
      return errorMessage("User not found", 404);
    }

    const userData = {
      _id: user._id,
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      level: user.level || 1,
      stage: user.stage || 1,
      isAdmin: user.isAdmin || false,
      jobRole: user.jobRole,
      experienceLevel: user.experienceLevel,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    return new SuccessResponse(res, 200, "Profile retrieved successfully", userData).send();
  } catch (err) {
    next(err);
  }
};

const updateProfileController = async (req, res, next) => {
  const userId = req.params.userId;
  const { jobRole, experienceLevel } = req.body;

  if (!jobRole || !experienceLevel) {
    return errorMessage("Job role and experience level are required", 404);
  }

  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { jobRole, experienceLevel },
      { new: true }
    );

    if (!updatedUser) {
      return errorMessage("User not found", 404);
    }

    return new SuccessResponse(res, 200, "Profile updated successfully", {
      user: updatedUser,
    }).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getProfileController, updateProfileController };
