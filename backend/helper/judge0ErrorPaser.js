const parseJudge0Result = async (response) => {
  const statusId = response.status?.id;
  const description = response.status?.description;

  switch (statusId) {
    case 3:
      return {
        success: true,
        message: "Accepted",
        output: response.stdout?.trim(),
        type: "success",
      };

    case 4:
      return {
        success: false,
        message: "Wrong Answer",
        expected: response.expected_output?.trim(),
        got: response.stdout?.trim(),
        type: "wrong-answer",
      };

    case 5:
      return {
        success: false,
        message: "Time Limit Exceeded",
        type: "timeout",
      };

    case 6:
      return {
        success: false,
        message: "Compilation Error",
        error: response.compile_output?.trim(),
        type: "compile-error",
      };

    case 7:
      return {
        success: false,
        message: "Runtime Error (SIGSEGV)",
        error: response.stderr?.trim(),
        type: "runtime-error",
      };

    case 11:
      return {
        success: false,
        message: "Runtime Error (SIGFPE - divide by zero)",
        error: response.stderr?.trim(),
        type: "runtime-error",
      };

    case 13:
      return {
        success: false,
        message: "Internal Error",
        error: response.message || "Something went wrong",
        type: "internal-error",
      };

    default:
      return {
        success: false,
        message: `Unhandled Error: ${description || "Unknown error"}`,
        raw: response,
        type: "unknown",
      };
  }
};

module.exports = parseJudge0Result;
