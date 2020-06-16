const validator = require('../usersValidator');
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-iso8601')());
const ValidationError = require('../../exceptions/ValidationError');

describe('validator.users.validate', () => {
    it('should assign createAt and updateAt to now by default when validating', () => {
        const data = {
            username: 'abc',
            password: 'Something happened on the ship',
        };
        validator.users.validate(data);
        expect(data.createdAt).to.be.iso8601(data.createdAt);
        expect(data.updatedAt).to.be.iso8601(data.updatedAt);
    });

    it('should require username', () => {
        try {
            validator.users.validate({ username: 'baban' });
            throw new Error('test should have thrown');
        } catch (err) {
            expect(err.message).to.equal('Error validating logs');
            expect(err).to.be.instanceof(ValidationError);
        }
    });

    it('should coerce the password to string', () => {
        const data = { username: 'baban', password: 1234567890 };
        validator.users.validate(data);
        expect(typeof data.password === 'string').to.be.true;
    });
});