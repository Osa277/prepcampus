class Response {
  constructor(res, code, message, data, status) {
    this.res = res;
    this.code = code;
    this.message = message;
    this.data = data;
    this.status = status;
  }

  send() {
    return this.res.status(this.code).json({
      status: this.status,
      message: this.message,
      data: this.data,
    });
  }
}

class SuccessResponse extends Response {
  constructor(
    res,
    code = 200,
    message = "Request successful",
    data = {},
    status = "success"
  ) {
    super(res, code, message, data, status);
  }
}

class ErrorResponse extends Response {
  constructor(
    res,
    code = 500,
    message = "Internal Server Error",
    data = null,
    status = "error"
  ) {
    super(res, code, message, data, status);
  }
}

module.exports = { SuccessResponse, ErrorResponse };
