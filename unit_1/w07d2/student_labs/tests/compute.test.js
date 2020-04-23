const fooBarQix = require('../src/fooBarQix');
const chai = require('chai');
const expect = chai.expect;

describe('fooBarQix.compute', () => {
    it('should pass the first test', () => {
        expect(1).to.equal(1);
    });
    it('should return 1 when the inout is 1', () => {
        expect(fooBarQix.compute(1)).to.equal("1");
    })
    it('shoud return "Foo" when the input is divisible by 3 but does not contain 3', () => {
        expect(fooBarQix.compute(6)).to.equal('Foo')
    })
    it('should reutrn "Foo" when the input contains 3', () => {
        expect(fooBarQix.compute(13)).to.equal('Foo')
    })
    it('should return "Bar" when if divisible by 5', () => {
        expect(fooBarQix.compute(10)).to.equal('Bar')
    })
    it('should return Qix when divisible by 7 or contains 7', () => {
        expect(fooBarQix.compute(14)).to.equal("Qix")
    })
    it('should return Qix when divisible by 7 or contains 7', () => {
        expect(fooBarQix.compute(17)).to.equal("Qix")
    })
    it('should return FooBarBar when divisible by 3 and 5 and contains 5', () => {
        expect(fooBarQix.compute(15)).to.equal("FooBarBar")
    })
    it('should return FooBar when divisible by 3 and contains 5', () => {
        expect(fooBarQix.compute(51)).to.equal("FooBar")
    })
});