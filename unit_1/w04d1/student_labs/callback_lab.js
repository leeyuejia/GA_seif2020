// const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

// //EVERY
// const checkNums = (input) => {
//     return input >=0
// };
// console.log(smallNums.every(checkNums));
// console.log(nums.every(checkNums))

// const checkLength = String => {
//     return String.length < 8
// };
// console.log(panagram.every(checkLength))
// console.log(panagrams.every(checkLength))

// //Filter
// console.log(smallNums.filter(num => {return num <100}))
// console.log(nums.filter(num => {return num <100}))
// console.log(panagram.filter(word => {return word.length%2 === 0}))
// console.log(panagrams.filter(word => {return word.length%2 === 0}))

// //Find
// console.log(smallNums.find(evenNum => {return evenNum% 5 === 0}))
// console.log(nums.find(evenNum => {return evenNum%5 ===0}))
// console.log(panagram.find(word => {return word.length > 6}))
// console.log(panagrams.find(word => {return word.length > 6}))

// //findindex
// console.log(smallNums.findIndex(indexNum => {return indexNum%3 === 0}))
// console.log(nums.findIndex(indexNum => {return indexNum%3 === 0}))
// console.log(panagrams.findIndex(wordLength => {return wordLength.length < 2}))
// console.log(panagram.findIndex(wordLength => {return wordLength.length < 2}))

// //ForEach
// smallNums.forEach(timesThree => {console.log(timesThree*3)})
// nums.forEach(timesThree => {console.log(timesThree*3)})
// panagram.forEach(mark => {console.log(mark + '!')})
// panagrams.forEach(mark => {console.log(mark + '!')})

// //Array remains unchanged
// //No, You cannot store the values into the array
// //Map
// console.log(smallNums.map(mapOneHundred => mapOneHundred * 100))
// console.log(nums.map(mapOneHundred => mapOneHundred * 100))
// console.log(panagram.map(words => words.toUpperCase()))
// console.log(panagrams.map(words => words.toUpperCase()))

// //reduce
// console.log(smallNums.reduce((accumlator, currentNum) => accumlator + currentNum))
// console.log(nums.reduce((accumlator,currentNum) => accumlator + currentNum))
// console.log(panagram.reduce((accumlator,currentWord) => accumlator + ' ' + currentWord))
// console.log(panagrams.reduce((accumlator,currentWord) => accumlator + ' ' + currentWord))

// //Some
// console.log(smallNums.some((someNum) => someNum%7 === 0))
// console.log(nums.some((someNum) => someNum%7 === 0))
// console.log(panagram.some((words) => words.includes('a')))
// const includesA = (words) => {
//   return words.toLowerCase().includes('a')
// }
// console.log(panagrams.some(includesA))

// //Sort
// console.log(nums.sort())
// const numAscending = (a,b) => {
//   return (a - b)
// };
// console.log(nums.sort(numAscending))
// console.log(smallNums.sort((a,b) => a-b));
// console.log(nums.sort(numAscending).reverse())
// let wordsJoin = panagram.join().toUpperCase().split(',')
// console.log(wordsJoin.sort())
// console.log(panagram.join().toUpperCase().split(',').sort().reverse())
// console.log(panagram)

//hungry for more
const vowels = ['a','e','i','o','u']
const checkVowels = () => {
 for (let i = 0; i <vowels.length; i++) {
   let anyTwoVowels;
   if (vowels[i])
 }
}
for (words of panagram) {
  console.log(words)
}
// Below is Ryan solution
const wordsTwoVowels = panagrams.filter(word => {
  let counter = 0;
  for (letter of word.toLowerCase()) {
      vowels.includes(letter) && counter++ ;
  }
  return counter >= 2 ? true : false;
})
console.log('Words Two Vowels');
console.log(wordsTwoVowels);
