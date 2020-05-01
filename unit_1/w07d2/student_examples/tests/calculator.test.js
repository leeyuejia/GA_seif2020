const chai = require('chai');
const expect = chai.expect;
const calculator = require('../src/calculator');

describe('calculator', () => {
    it('should check that 1 is equal to 1', () => {
        expect(1).to.equal(1);
    });
});