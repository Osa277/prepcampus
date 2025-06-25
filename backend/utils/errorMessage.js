const errorMessage = (errMessage, status = 400) => {
  const err = new Error(errMessage);
  err.status = status;
  return err; 
};

module.exports = errorMessage;
