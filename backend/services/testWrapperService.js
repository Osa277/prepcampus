const openai = require("../config/OpenAiConfig");
const TestWrapper = require("../models/TestWrapperModel");
const errorMessage = require("../utils/errorMessage");

class TestWrapperService {
  /**
   * Find existing test wrapper from DB.
   * @param {string} slug
   * @param {string} language
   * @returns {Promise<object|null>}
   */
  async findWrapper(slug, language) {
    const result = await TestWrapper.findOne({
      slug,
      language: language.toLowerCase(),
    });
    return result;
  }

  /**
   * Generate wrapper using OpenAI and save it.
   * @param {string} slug
   * @param {string} language
   * @param {string} description
   * @returns {Promise<object>}
   */
  async generateWrapper(slug, language, description) {
    const prompt = `
You're an AI backend developer assistant.

Your task is:
1. Based on the following kata description, write a test wrapper in ${language} that:
   - calls the user's function with one or more sample inputs.
   - logs or returns the output to validate correctness.
2. Return the expected output for that sample input(s).

Kata Description:
${description}

Respond ONLY in JSON format like this:
{
  "wrapper": "your wrapper code here",
  "expectedOutput": "expected result here"
}
`;

    let completion;
    try {
      completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI developer assistant.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.2,
      });
    } catch (err) {
      throw errorMessage("OpenAI API error", 502);
    }

    const jsonText = completion.choices[0]?.message?.content.trim();

    let parsed;
    try {
      parsed = JSON.parse(jsonText);
    } catch (err) {
      throw errorMessage("Invalid JSON from OpenAI response", 500);
    }

    if (!parsed.wrapper || !parsed.expectedOutput) {
      throw errorMessage("OpenAI response missing required fields", 500);
    }

    const newWrapper = await TestWrapper.create({
      slug,
      language: language.toLowerCase(),
      wrapper: parsed.wrapper,
      expectedOutput: parsed.expectedOutput,
    });

    return newWrapper;
  }
}

module.exports = new TestWrapperService();
