const validator = require('../ajvLogsValidator');
const { expect } = require('chai');
const ValidationError = require('../../exceptions/ValidationError');

describe('validator.logs.validate', () => {
    it('should throw a ValidationError with the message "data should be an object"', () => {
        try {
            validator.logs.validate(1);
            throw new Error('test should have thrown');
        } catch (err) {
            expect(err.message).to.equal('data should be object');
            expect(err).to.be.instanceof(ValidationError);
        }
    });

    it('should throw a ValidationError if the title is missing', () => {
        try {
            validator.logs.validate({});
            throw new Error('test should have thrown');
        } catch (err) {
            expect(err.message).to.equal('data should have required property \'title\'');
            expect(err).to.be.instanceof(ValidationError);
        }
    });

    it('should throw a ValidationError if the title is not a string', () => {
        try {
            validator.logs.validate({ title: {} });
            throw new Error('test should have thrown');
        } catch (err) {
            expect(err.message).to.equal('.title should be string');
            expect(err).to.be.instanceof(ValidationError);
        }
    });

    it('should assign isShipBroken to false by default when validating', () => {
        const data = {
            title: 'My log is here',
            entry: 'Something happened on the ship',
        };
        validator.logs.validate(data);
        expect(data.isShipBroken).to.be.false;
    });

    it('should coerce isShipBroken from string to boolean', () => {
        const data = {
            title: 'My log is here',
            entry: 'Something happened on the ship',
            isShipBroken: 'false',
        };
        validator.logs.validate(data);
        expect(data.isShipBroken).to.be.false;
    });

    it('should require entry', () => {
        try {
            validator.logs.validate({ title: 'My log is here', isShipBroken: false });
            throw new Error('test should have thrown');
        } catch (err) {
            expect(err.message).to.equal('data should have required property \'entry\'');
            expect(err).to.be.instanceof(ValidationError);
        }
    });

    it('should coerce the entry to string', () => {
        const data = { title: 'My log is here', isShipBroken: false, entry: 1234567890 };
        validator.logs.validate(data);
        expect(typeof data.entry === 'string').to.be.true;
    });

    it('should throw a validation error if the date is not a valid date', () => {
        try {
            validator.logs.validate({
                title: 'My log is here',
                isShipBroken: false,
                entry: 'My entry is here',
                date: Date.now(),
            });
            throw new Error('test should have thrown');
        } catch (err) {
            expect(err.message).to.equal('.date should match format "date-time"');
            expect(err).to.be.instanceof(ValidationError);
        }
    });
});