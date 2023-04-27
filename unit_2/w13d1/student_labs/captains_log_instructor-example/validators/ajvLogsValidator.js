const Ajv = require('ajv');
const ajv = new Ajv({
    useDefaults: true,
    coerceTypes: true,
    allErrors: true,
});
const logsSchema = require('./schema/logs');
const validator = ajv.compile(logsSchema);
const ValidationError = require('../exceptions/ValidationError');

module.exports = {
    logs: {
        validate (data) {
            const isValid = validator(data);
            if (!isValid) {
                throw new ValidationError(validator.errors);
            }
            return isValid;
        }
    },
};