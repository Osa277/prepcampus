const userModel = require('../models/User');
const interviewModel = require('../models/Interview');
const feedbackModel = require('../models/Feedback');
const certificateModel = require('../models/Certificate');
const errorMessage = require("../utils/errorMessage");

const adminDashboard = async (req, res) => {
    try {
        const activeUsers = await userModel.countDocuments({ status: 'active' });
        const totalInterviews = await interviewModel.countDocuments();
        const feedbackCount = await feedbackModel.countDocuments();
        const certificateCount = await certificateModel.countDocuments();

        const recentUsers = await userModel.find().sort({ createdAt: -1 }).limit(5);

        const recentInterviews = await interviewModel.find()
            .sort({ completedAt: -1 })
            .limit(5)
            .populate('userId', 'name email');

        const recentBadges = await certificateModel.find()
            .sort({ issuedAt: -1 })
            .limit(5)
            .populate('userId', 'name email');

        const userList = await userModel.find().sort({ createdAt: -1 });

        res.json({
            metrics: {
                activeUsers,
                totalInterviews,
                feedbackProvided: feedbackCount,
                certificatesIssued: certificateCount
            },
            recentActivities: {
                recentSignups: recentUsers,
                recentInterviews,
                recentCertificates: recentBadges
            },
            userList
        });
    } catch (err) {
        return errorMessage('Error loading admin dashboard', 500, res);
    }
};

module.exports = adminDashboard;
