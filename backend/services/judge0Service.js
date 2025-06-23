const axios = require("axios");
const errorMessage = require("../utils/errorMessage");
const { getJudge0LangId } = require("../helper/judegeLanguageMapping");

const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true";
const JUDGE0_HEADERS = {
  "content-type": "application/json",
  "X-RapidAPI-Key": process.env.JUDGE0_API_KEY,
  "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
};

const submitCodeToJudge0 = async ({ code, wrapper, language, expectedOutput }) => {
  try {
    const languageId = getJudge0LangId(language);

    const fullCode = `${code}\n\n${wrapper}`;

    const response = await axios.post(
      JUDGE0_API_URL,
      {
        source_code: fullCode,
        language_id: languageId,
        expected_output: expectedOutput,
      },
      { headers: JUDGE0_HEADERS }
    );

    return response.data;
  } catch (err) {
    console.error("Judge0 Error:", err?.response?.data || err.message);
    throw errorMessage("Code execution failed on Judge0", 500);
  }
};

module.exports = submitCodeToJudge0