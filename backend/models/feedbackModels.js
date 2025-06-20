const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});

const feedbackModel = mongoose.model('feedbackModel', feedbackSchema);

module.exports = feedbackModel;
