const path = require("path");
const fs = require("fs");
const { analyzeFrame } = require("../services/azureFaceService");

const analyzeFrames = async (req, res, next) => {
  const frameFolder = path.join(__dirname, "../storage/frames", req.file.filename);
  const frames = fs.readdirSync(frameFolder).filter(f => f.endsWith(".jpg"));

  const analysisResults = [];

  for (let frame of frames) {
    const framePath = path.join(frameFolder, frame);
    const result = await analyzeFrame(framePath);
    if (result) {
      analysisResults.push({ frame, faces: result });
    }
  }

  res.status(200).json({
    message: "Frame analysis complete",
    data: analysisResults,
  });
};

module.exports = { analyzeFrames };
