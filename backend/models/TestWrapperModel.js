const mongoose = require("mongoose");

const TestWrapperSchema = new mongoose.Schema({
  functionName: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
    lowercase: true,
  },
  wrapper: {
    type: String,
    required: true,
  },
  testInput: {
    type: String,
  },
  expectedOutput: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

TestWrapperSchema.index({ slug: 1, language: 1 }, { unique: true });
const TestWrapper = mongoose.model("TestWrapper", TestWrapperSchema);
module.exports = TestWrapper;
