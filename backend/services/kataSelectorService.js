const axios = require("axios");
const kataBank = require("../data/kataData.json");
const levelToKata = require("../utils/kataLevelMapping");
const errorMessage = require("../utils/errorMessage");
const validateFields = require("../utils/validateFields");

const getValidKata = async ({ userLevel, selectedLang }) => {
  validateFields(["userLevel", "selectedLang"], { userLevel, selectedLang });

  const kataLevel = levelToKata(userLevel);
  const slugList = [...kataBank[kataLevel]];
  const language = selectedLang.toLowerCase();
  const CODEWAR_API = process.env.CODEWAR_API_URL;

  let attempts = 0;
  const MAX_ATTEMPTS = 10;

  while (slugList.length > 0 && attempts < MAX_ATTEMPTS) {
    const randIndex = Math.floor(Math.random() * slugList.length);
    const slug = slugList.splice(randIndex, 1)[0];
    attempts++;

    try {
      const res = await axios.get(`${CODEWAR_API}${slug}`);
      const supportedLanguages = res.data.languages.map((lang) =>
        lang.toLowerCase()
      );

      if (supportedLanguages.includes(language)) {
        return {
          name: res.data.name,
          slug: res.data.slug,
          description: res.data.description,
          languages: res.data.languages,
        };
      }
    } catch (err) {
      console.warn(`⚠️ Error fetching kata ${slug}:`, err.message);
    }
  }

  throw errorMessage("No matching kata found for the selected language.", 404);
};

module.exports = getValidKata;
