const axios = require("axios");
const fs = require("fs");
const path = require("path");

const AZURE_ENDPOINT = process.env.AZURE_ENDPOINT;
const AZURE_KEY = process.env.AZURE_KEY;

const analyzeFrame = async (framePath) => {
  const imageBuffer = fs.readFileSync(framePath);

  try {
    const response = await axios.post(
      `${AZURE_ENDPOINT}/face/v1.0/detect?returnFaceAttributes=emotion,headPose,blur`,
      imageBuffer,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": AZURE_KEY,
          "Content-Type": "application/octet-stream",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Azure Face API error:", error?.response?.data || error.message);
    return null;
  }
};

module.exports = { analyzeFrame };
