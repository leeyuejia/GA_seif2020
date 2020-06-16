const chai = require('chai');
const { expect } = chai;
const asserttype = require('chai-asserttype');
chai.use(asserttype);
const { validate } = require('../usersValidator');

describe('Users Validator', () => {

    it('should pass the validation if I put username and password combination', () => {
        const result = validate({ username: 'eason', password: '111' });
        expect(result).to.be.true;
    });

    it('should fail the validation if I missed username in my input', () => {
        try {
            validate({ password: '111' });
        } catch(err) {
            expect(err).to.be.ok;
            expect(err.message).to.equal('Error validating logs');
        }
    });

    it('should fail the validation if I missed password in my input', () => {
        try {
            validate({ username: 'eason' });
        } catch(err) {
            expect(err).to.be.ok;
            expect(err.message).to.equal('Error validating logs');
        }
    });

    it('should coerce both username and password to string if both are numbers', () => {
        const data = { username: 111, password: 111 };
        const result = validate(data);
        expect(result).to.be.true;
        expect(data.username).to.equal('111');
        expect(data.password).to.equal('111');
    });

    it('should pass the validation if the createdAt field follows the ISO 8601', () => {
        const data = { username: '111', password: '111', createdAt: '2020-06-19T20:00:00Z' };
        const result = validate(data);
        expect(result).to.be.true;
    });

    it('should fail the validation if the createdAt field doesnt follow the ISO 8601', () => {
        const data = { username: '111', password: '111', createdAt: '20200619-200000' };
        try {
            validate(data);
        } catch(err) {
            expect(err).to.be.ok;
            expect(err.message).to.equal('Error validating logs');
        }
    });


    it('should have createdAt as default values equal to currentTime if createdAt is not provided', () => {
        const data = { username: '111', password: '111' };        
        const result = validate(data);
        expect(result).to.be.true;
        expect(data.createdAt).to.be.date();
    });

    it('should coerce createdAt to a date type if createdAt is provided as ISO 8601 dateString', () => {
        const data = { username: '111', password: '111', createdAt: '2020-06-19T20:00:00Z' };        
        const result = validate(data);
        expect(result).to.be.true;
        expect(data.createdAt).to.be.date();
    });
});