const errorMessage = (errMessage, status) => {
  const err = new Error(errMessage);
  err.status = status;
  return err; 
};

module.exports = errorMessage;
