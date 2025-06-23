const userModel = require("../models/UserModel");
const errorMessage = require("../utils/errorMessage");

const profileController = async (req, res) => {
        const userId = req.params.userId;
    const { jobRole, experienceLevel } = req.body;

    if (!jobRole || !experienceLevel) {
        return errorMessage('Job role and experience level are required', 404);
    }

    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { jobRole, experienceLevel },
            { new: true }
        );

        if (!updatedUser) {
            return errorMessage('User not found', 404)
        }

        res.json({
            message: 'Profile updated successfully',
            user: updatedUser
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }

};

module.exports = profileController;