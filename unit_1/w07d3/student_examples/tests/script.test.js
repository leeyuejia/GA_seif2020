const chai = require('chai');
const expect = chai.expect;

describe('My first test', () => {
    it('should check that 1 is equal to 1', () => {
        expect(1).to.equal(1);
    });
});