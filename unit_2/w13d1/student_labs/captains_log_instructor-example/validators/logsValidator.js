const ValidationError = require('../exceptions/ValidationError');

module.exports = {
    validate (reqBody) {
        if (!reqBody.title) throw new ValidationError('Title was not provided');

        if (reqBody.title.length < 5) throw new ValidationError('Title had less than 5 characters');
    }
};