const axios = require("axios");
const fs = require("fs");

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;

const transcribeAudio = async (audioPath) => {
  const audioBuffer = fs.readFileSync(audioPath);

  try {
    const response = await axios.post(
      "https://api.deepgram.com/v1/listen",
      audioBuffer,
      {
        headers: {
          "Authorization": `Token ${DEEPGRAM_API_KEY}`,
          "Content-Type": "audio/mp3", 
        },
        params: {
          punctuate: true,
          diarize: true,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Deepgram Error:", err?.response?.data || err.message);
    return null;
  }
};

module.exports = { transcribeAudio };
