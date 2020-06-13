const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });
const logsSchema = require('./schema/logs');
const validator = ajv.compile(logsSchema);

module.exports = {
    logs: {
        validate (data) {

        }
    },
};