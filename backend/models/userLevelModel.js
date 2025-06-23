const { default: mongoose } = require("mongoose");

const LevelSchema = new mongoose.Schema({
  initialScreening: {
    level: { type: Number, default: 1 },
    badge: { type: Number, default: 0 },
  },
  technicalInterview: {
    level: { type: Number, default: 1 },
    badge: { type: Number, default: 0 },
  },
  behaviouralInterview: {
    level: { type: Number, default: 1 },
    badge: { type: Number, default: 0 },
  },
  deepDiveInterview: {
    level: { type: Number, default: 1 },
    badge: { type: Number, default: 0 },
  },
  mockInterview: {
    level: { type: Number, default: 1 },
    badge: { type: Number, default: 0 },
  },
});

const levelModel = mongoose.model("levelModel", LevelSchema);
module.exports = levelModel;
