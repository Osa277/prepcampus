const axios = require("axios");
const kataBank = require("../data/kataData.json");
const errorMessage = require("../utils/errorMessage");
const validateFields = require("../utils/validateFields");
const {
  getUsedSlugs,
  saveUsedSlug,
  savePrevLevel,
  clearAllUserSlugs,
} = require("../helper/slugTracker");
const getKataLevel = require("../helper/kataLevelMapping");

const getValidKata = async ({ userLevel, selectedLang }, { userId }) => {
  validateFields(["userLevel", "selectedLang"], { userLevel, selectedLang });

  const kataLevel = getKataLevel(userLevel);
  const slugList = [...kataBank[kataLevel]];
  const language = selectedLang.toLowerCase();
  const CODEWAR_API = process.env.CODEWAR_API_URL;

  let attempts = 0;
  const MAX_ATTEMPTS = 10;

  const usedSlugs = await getUsedSlugs(userId, userLevel);
  const availableSlug = slugList.filter((s) => !usedSlugs.has(s));

  if (availableSlug.length === 0)
    throw errorMessage("no available slug for selected language", 400);


  const clearPrevLevelSlug = await savePrevLevel(userId, Number(kataLevel));
  if (clearPrevLevelSlug) {
    await clearAllUserSlugs(userId);
  }

  while (availableSlug.length > 0 && attempts < MAX_ATTEMPTS) {
    const randIndex = Math.floor(Math.random() * availableSlug.length);
    const slug = availableSlug.splice(randIndex, 1)[0];
    attempts++;

    try {
      const res = await axios.get(`${CODEWAR_API}${slug}`);
      const supportedLanguages = res.data.languages.map((lang) =>
        lang.toLowerCase()
      );

      if (supportedLanguages.includes(language)) {
        await saveUsedSlug(userId, userLevel, slug);
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
