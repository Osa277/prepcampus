const errorMessage = (errMessage, status, next) => {
  const err = new Error(errMessage);
  err.status = status;
  return next(err);
};

module.exports = errorMessage;
