// Word Frequency
//'The world is all that is the case'
// => 'The', 'world', 'is', 'all', 'that', 'is', 'the', 'case';
// => 'the', 'world', 'is', 'all', 'that', 'is', 'the', 'case';
// => counting for loop, create stats = {}
// => stats[word] === undefined => stats[word] = 1
// => stats[word]++
// => { the: 2, world: 1, is: 2, all: 1, that: 1, case: 1 }
const findWordFrequencies = sentence => {
    let words = sentence.split(' ');
    words = words.map(word => word.toLowerCase());
    const stats = {};
    words.forEach(word => {
        if(stats[word] === undefined) {
            stats[word] = 1;
        } else {
            stats[word]++;
        }
    });
    return stats;
};

let wordO = { the: 2, world: 1, is: 2, all: 1, that: 1, case: 1 }
const findHighestFrequency = wordObject => {
    const hWord = Object.keys(wordObject).reduce((hWord, word) => {
        if(wordObject[hWord] < wordObject[word]) {
            hWord = word;
        }
        return hWord;
    });
    const result = {};
    result[hWord] = wordObject[hWord];
    return result;
};
console.log(findHighestFrequency(wordO))
module.exports = {
    findHighestFrequency,
    findWordFrequencies
};