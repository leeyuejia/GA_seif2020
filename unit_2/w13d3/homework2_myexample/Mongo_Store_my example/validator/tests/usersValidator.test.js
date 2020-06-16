const chai = require('chai');
const { expect } = chai;
const {validate} = require('../usersValidator');

const asserttype = require('chai-asserttype');
chai.use(asserttype);

describe('Users Validator', () => {
    it('should pass validation if I put username and password combination', async() => {
        const result = validate({username:'somename', password: '111'})
        expect(result).to.be.true;
    })

    it ('should fail', () => {
        try {
            validate({password:'111'});
        } catch (err) {
            expect(err).to.be.ok;
            expect(err.message).to.equal('Error validating logs')
        }
    })

    it ('should coerce both usernam and pwd if both are numbers', () => {
        const data = {username:111, password:111};
        const result = validate(data);
        expect(result).to.be.true;
        expect(data.username).to.be.equal('111')
        expect(data.password).to.be.equal('111')
    })

    it('should pass the validation if the created feild folloes ISO 8601', () => {
        const data = {username: '111', password:'111',createdAt: '2020-09-19T20:00:00Z'}
        const result= validate(data);
        expect(result).to.be.true
    });

    it('should fail if dates do not follow ISO', () => {
        const data = {username: '111', password:'111',createdAt: '2020-09-1'}
        try {
            validate(data);
        } catch(err) {
            expect(err).to.be.ok;
            expect(err.message).to.equal('Error validating logs')
        }
    })

    it('should have createdAt as default current date new Date()', () => {
        const data = {username: '111', password:'111'}
        const result = validate(data)
        expect(result).to.be.true
        // chai to be for date format. google!
        expect(data.createdAt).to.be.date()
    })
})
