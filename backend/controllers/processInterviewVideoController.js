const { VideoProcess, Analysis } = require("../services/videoProcessService");
const vidProcess = new VideoProcess();
const vidAnalysis = new Analysis();
const errorMessage = require("../utils/errorMessage");

const processInterviewVideo = async (req, res, next) => {
  try {
    if (!req.file) {
      return errorMessage("No video uploaded", 400, next);
    }

    // 1. Extract Audio
    const audioPath = await vidProcess.audioExtraction(req.file);

    // 2. Extract Frames
    const framesFolder = await vidProcess.videoFrameExtraction(req.file);

    // 3. Analyze video frames with Azure
    const videoAnalysis = await vidAnalysis.videoAnalysis(framesFolder);

    // 4. Analyze audio with Deepgram
    const { transcript, confidence } = await vidAnalysis.audioAnalysis(
      audioPath
    );

    // Final response
    return res.status(200).json({
      message: "Interview video processed successfully",
      videoAnalysis,
      audioAnalysis,
    });
  } catch (error) {
    console.error("❌ Processing error:", error.message);
    return errorMessage("Failed to process interview video", 500, next);
  }
};

module.exports = processInterviewVideo;
