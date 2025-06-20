const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    level: String,
    status: { type: String, default: 'completed' },
    completedAt: Date
});

const interviewModel = mongoose.model('interviewModel', interviewSchema);

module.exports = interviewModel;