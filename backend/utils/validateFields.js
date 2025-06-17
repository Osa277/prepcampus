function validateFields(fields, data) {
  const missing = fields.filter(field => !data[field]);
  if (missing.length) {
    const err = new Error(`Missing required field(s): ${missing.join(', ')}`);
    err.status = 400;
    throw err;
  }
}

module.exports = validateFields;
