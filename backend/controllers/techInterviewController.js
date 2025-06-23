const parseJudge0Result = require("../helper/judge0ErrorPaser");
const submitCodeToJudge0 = require("../services/judge0Service");
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

    const { wrapper, expectedOutput, testInput = null } = testWrapper;
    return res.status(200).json({ slug, wrapper, expectedOutput, testInput });
  } catch (err) {
    next(err);
  }
};

const techInteviewSubmitController = async (req, res, next) => {
  try {
    const { code, slug, selectedLang } = req.body;

    if (!code || !slug || !selectedLang) {
      return errorMessage("Missing required fields", 400);
    }

    const wrapperData = await testWrapperService.findWrapper(
      slug,
      selectedLang
    );
    if (!wrapperData) {
      return errorMessage(
        "Test wrapper not found for this slug and language",
        404
      );
    }

    const { wrapper, expectedOutput } = wrapperData;
    const payload = {
      code: code,
      wrapper: wrapper,
      language: selectedLang,
      expectedOutput: expectedOutput,
    };
    const result = await submitCodeToJudge0(payload);
    const final_result = await parseJudge0Result(result);

    if (final_result.success) {
      return res
        .status(200)
        .json({ message: "Correct!", output: final_result.output });
    } else {
      return res
        .status(400)
        .json({ message: final_result.message, details: final_result });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = techInteviewQuestionController;
