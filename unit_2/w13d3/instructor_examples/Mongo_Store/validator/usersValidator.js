const Ajv = require('ajv');
const ajv = new Ajv({
    useDefaults: true,
    coerceTypes: true,
    allErrors: true,
});
require('ajv-keywords')(ajv);
const usersSchema = require('./schema/users');
const validator = ajv.compile(usersSchema);
const ValidationError = require('../exceptions/ValidationError');

module.exports = {
    users: {
        validate (data) {
            const isValid = validator(data);
            if (!isValid) {
                console.log(`Error in validator: ${JSON.stringify(validator.errors)}`);
                throw new ValidationError(validator.errors);
            }
            return isValid;
        }
    },
};