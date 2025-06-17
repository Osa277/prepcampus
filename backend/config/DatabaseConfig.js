const mongoose = require("mongoose");

const MongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoose connected");
  } catch (err) {
    console.error("err connecting to mongoodb: ", err);
    process.exit(1);
  }
};

module.exports = MongoConnect