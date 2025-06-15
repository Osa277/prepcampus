const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const path = require("path");
const fs = require("fs");
const errorMessage = require("../utils/errorMessage");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const frameExtractor = async (req, res, next) => {
  if (!req.file) return errorMessage("No file uploaded", 400, next);

  const inputPath = req.file.path;
  const frameDir = path.join(__dirname, "../storage/frames", req.file.filename);

  if (!fs.existsSync(frameDir)) {
    fs.mkdirSync(frameDir, { recursive: true });
  }

  ffmpeg(inputPath)
    .on("end", () => {
      console.log("✅ Frames extracted to:", frameDir);
      res.status(200).json({
        message: "Frames extracted successfully",
        frameFolder: req.file.filename,
      });
    })
    .on("error", (err) => {
      console.error("❌ FFmpeg error:", err.message);
      return errorMessage("Error extracting frames", 500, next);
    })
    .screenshots({
      count: 10, // You can increase this
      folder: frameDir,
      filename: "frame-%03d.jpg",
      size: "640x480",
    });
};

module.exports = frameExtractor;
