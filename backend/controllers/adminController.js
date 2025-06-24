const errorMessage = require("../utils/errorMessage");
const interviewModel = require("../models/interviewModel");
const feedbackModel = require("../models/feedbackModels");
const certificateModel = require("../models/certificateModel");
const userModel = require("../models/UserModel");

const adminDashboard = async (req, res) => {
  try {
    const activeUsers = await userModel.countDocuments({ status: "active" });
    const totalInterviews = await interviewModel.countDocuments();
    const feedbackCount = await feedbackModel.countDocuments();
    const certificateCount = await certificateModel.countDocuments();

    const recentUsers = await userModel.find().sort({ createdAt: -1 }).limit(5);

    const recentInterviews = await interviewModel
      .find()
      .sort({ completedAt: -1 })
      .limit(5)
      .populate("userId", "name email");

    const recentBadges = await certificateModel
      .find()
      .sort({ issuedAt: -1 })
      .limit(5)
      .populate("userId", "name email");

    const userList = await userModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      metrics: {
        activeUsers,
        totalInterviews,
        feedbackProvided: feedbackCount,
        certificatesIssued: certificateCount,
      },
      recentActivities: {
        recentSignups: recentUsers,
        recentInterviews,
        recentCertificates: recentBadges,
      },
      userList,
    });
  } catch (err) {
    return errorMessage("Error loading admin dashboard", 500);
  }
};

module.exports = adminDashboard;
