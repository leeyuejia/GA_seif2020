module.exports = class ValidationError extends Error {
    constructor (errors) {
        super('Error validating logs');
        this.status = 400;
        this.data = errors;
    }
};