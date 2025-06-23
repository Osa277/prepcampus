const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel' },
    title: { type: String, required: true },        
    issuedAt: { type: Date, default: Date.now }
});

const certificateModel = mongoose.model('certificateMOdel', certificateSchema);

module.exports = certificateModel;
