const Ajv = require('ajv');
const ajv = new Ajv({
    useDefaults: true,
    coerceTypes: true,
});
const logsSchema = require('./schema/logs');
const validator = ajv.compile(logsSchema);
const ValidationError = require('../exceptions/ValidationError');

const buildErrorMessage = errors => {
    const error = errors[0];
    const key = error.dataPath || 'data';
    return `${key} ${error.message}`;
};

module.exports = {
    logs: {
        validate (data) {
            const isValid = validator(data);
            if (!isValid) {
                const formattedErrorMessage = buildErrorMessage(validator.errors);
                throw new ValidationError(formattedErrorMessage);
            }
            return isValid;
        }
    },
};