const errorMessage = require("../utils/errorMessage");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const path = require("path");
const fs = require("fs");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const audioExtractor = async (req, res, next) => {
  if (!req.file) return errorMessage("No file uploaded", 400, next);

  const inputPath = req.file.path;
  const outputDir = path.join(__dirname, "../storage/output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  const outputFilename = `${req.file.filename}.wav`;
  const outputPath = path.join(outputDir, outputFilename);

  ffmpeg(inputPath)
    .noVideo()
    .audioCodec("pcm_s16le")
    .audioChannels(1)
    .audioFrequency(16000)
    .save(outputPath)
    .on("end", () => {
    //   fs.unlink(inputPath, (err) => {
    //     if (err) {
    //       console.error("❌ Error deleting video file:", err.message);
    //     } else {
    //       console.log("🗑️ Video file deleted:", inputPath);
    //     }
    //   });
      console.log("✅ Audio extracted:", outputPath);
      res.status(200).json({
        message: "Audio extracted successfully",
        audioFile: outputFilename,
      });
    })
    .on("error", (err) => {
      console.error("❌ FFmpeg error:", err.message);
      return errorMessage("Error extracting audio", 500, next);
    });
};

module.exports = audioExtractor;
