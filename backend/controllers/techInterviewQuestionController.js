const getValidKata = require("../services/kataSelectorService");
const testWrapperService = require("../services/testWrapperService");

const techInteviewQuestionController = async (req, res, next) => {
  try {
    const { selectedLang } = req.body;

    const questionData = await getValidKata(req.body);
    if (!questionData) {
      return res.status(404).json({
        message: "No valid kata found for the selected language.",
      });
    }

    const { slug, description } = questionData;

    let testWrapper = await testWrapperService.findWrapper(slug, selectedLang);
    if (!testWrapper) {
      testWrapper = await testWrapperService.generateWrapper(
        slug,
        selectedLang,
        description
      );
    }

    const { wrapper, expectedOutput } = testWrapper;

    return res.status(200).json({ wrapper, expectedOutput });
  } catch (err) {
    next(err);
  }
};

module.exports = techInteviewQuestionController;
