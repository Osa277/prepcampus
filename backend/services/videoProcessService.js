const errorMessage = require("../utils/errorMessage");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const { analyzeFrame } = require("./azureFaceService");
const path = require("path");
const fs = require("fs");
const { transcribeAudio } = require("./deepgramService");
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

class VideoProcess {
  async audioExtraction(file) {
    return new Promise((resolve, reject) => {
      const inputPath = file.path;
      const outputDir = path.join(__dirname, "../storage/output");
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }
      const outputFilename = `${file.filename}.wav`;
      const outputPath = path.join(outputDir, outputFilename);

      ffmpeg(inputPath)
        .noVideo()
        .audioCodec("pcm_s16le")
        .audioChannels(1)
        .audioFrequency(16000)
        .save(outputPath)
        .on("end", () => {
          console.log("✅ Audio extracted:", outputPath);
          resolve(outputPath);
        })
        .on("error", (err) => {
          console.error("❌ FFmpeg error:", err.message);
          reject(new Error("Error extracting audio"));
        });
    });
  }

  async videoFrameExtraction(file) {
    return new Promise((resolve, reject) => {
      const inputPath = file.path;
      const frameDir = path.join(__dirname, "../storage/frames", file.filename);

      if (!fs.existsSync(frameDir)) {
        fs.mkdirSync(frameDir, { recursive: true });
      }

      ffmpeg(inputPath)
        .on("end", () => {
          console.log("✅ Frames extracted to:", frameDir);
          resolve(frameDir); // <-- Return frameDir here
        })
        .on("error", (err) => {
          console.error("❌ FFmpeg error:", err.message);
          reject(new Error("Error extracting frames"));
        })
        .screenshots({
          count: 10, // You can increase this or make it dynamic
          folder: frameDir,
          filename: "frame-%03d.jpg",
          size: "640x480",
        });
    });
  }
}

class Analysis extends VideoProcess {
  async videoAnalysis(frameFolder) {
    const frames = fs
      .readdirSync(frameFolder)
      .filter((f) => f.endsWith(".jpg"));

    const analysisResults = [];

    for (let frame of frames) {
      const framePath = path.join(frameFolder, frame);
      try {
        const result = await analyzeFrame(framePath);
        if (result) {
          analysisResults.push({ frame, faces: result });
        }
      } catch (err) {
        console.error(`Error analyzing frame ${frame}:`, err.message);
      }
    }

    return analysisResults;
  }
  async audioAnalysis(audioPath) {
    try {
      const result = await transcribeAudio(audioPath);
      if (!result) throw errorMessage("Deepgram failed", 500);

      return {
        transcript: result.results.channels[0].alternatives[0].transcript,
        confidence: result.results.channels[0].alternatives[0].confidence,
      };
    } catch (err) {
      throw errorMessage("Deepgram analysis error", 500);
    }
  }
}

module.exports = {
  Analysis,
  VideoProcess,
};
