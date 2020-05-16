/* eslint-disable no-undef */

const { findHighestFrequency, findWordFrequencies } = require('../wordFreq');

describe('Word Frequency Function', () => {
    it('The function should return the correct counting for "The world is all that is the case"', () => {
        const freqs = findWordFrequencies('The world is all that is the case');

        expect(freqs).toEqual({ the: 2, world: 1, is: 2, all: 1, that: 1, case: 1 });
    });
    
    it('The function should return the highest frequency for "The world is all that is the case"', () => {
        const freqs = findWordFrequencies('The world is all that is the case');

        expect(findHighestFrequency(freqs)).toEqual({ the: 2 });
    });
        
    it('The function should return the highest frequency for "The world is all that is the case"', () => {
        const freqs = findWordFrequencies('That that is is that that is not is not');

        expect(findHighestFrequency(freqs)).toEqual({ that: 4 });
    });

    it('The function should return the highest frequency for "hi"', () => {
        const freqs = findWordFrequencies('hi');

        expect(findHighestFrequency(freqs)).toEqual({ hi: 1 });
    });
});