function validateFields(fields, reqBody) {
    for (const field of fields) {
        if (!reqBody[field]) {
            return false;
        }
    }
    return true;
}

module.exports = validateFields;