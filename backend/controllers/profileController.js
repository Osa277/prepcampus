const userModel = require("../models/UserModel");
const errorMessage = require("../utils/errorMessage");

const profileController = async (req, res) => {
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

module.exports = profileController;
