const languageMap = {
  javascript: 63,
  python: 71,
  java: 62,
  c: 50,
  cpp: 54,
  csharp: 51,
  ruby: 72,
  go: 60,
  swift: 83,
  php: 68,
  typescript: 74,
  rust: 73,
  kotlin: 78,
  bash: 46,
  scala: 81,
};

const getJudge0LangId = (language) => {
  const langId = languageMap[language.toLowerCase()];
  if (!langId) throw new Error(`Unsupported language: ${language}`);
  return langId;
};

module.exports = {
  getJudge0LangId,
};
