const chai = require('chai');
const expect = chai.expect;
const calculator = require('../src/calculator');

describe('calculator', () => {
    it('should check that 1 is equal to 1', () => {
        expect(1).to.equal(1);
    });

    it('shoud check that 1 + 2 = 3', () => {
        expect(1 + 2).to.equal(3);
    })
});