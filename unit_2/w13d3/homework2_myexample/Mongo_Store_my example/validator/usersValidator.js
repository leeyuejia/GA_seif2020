const { required } = require("./schema/users");

const User = require('./schema/users');
const Ajv = require('ajv');
const ajv = new Ajv({
    useDefaults: true,
    coerceTypes: true,
    allErrors: true,
});
const validator = ajv.compile(User);
const ValidationError = require('../exceptions/ValidationError')

module.exports = {
    validate(data) {
        const isValid = validator(data);
        if(!isValid) {
            console.log(`Validator Errors: ${validator.errors}`);
            throw new ValidationError(validator.errors);
        }
        // Add default values for createdAt and updatedAt
        data.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
        data.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
        return isValid;
    }

}