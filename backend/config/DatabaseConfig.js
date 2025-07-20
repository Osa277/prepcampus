const mongoose = require("mongoose");

const MongoConnect = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/prepcampus';
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.warn("MongoDB connection failed:", err.message);
    console.log("Running without database - some features may not work");
    // Don't exit the process, just log the warning
  }
};

module.exports = MongoConnect