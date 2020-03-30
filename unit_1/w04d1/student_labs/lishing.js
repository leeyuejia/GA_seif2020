const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

//Determine if every number is greater than or equal to 0
const greaterThanZero = (value) =>{
    return(value >= 0);
};
console.log(smallNums.every(greaterThanZero)); //true
console.log(nums.every(greaterThanZero)); //false 

//determine if every word shorter than 8 characters
const shorterThanEight = (value) =>{
    return(value.length<8);
};
console.log(panagram.every(shorterThanEight)); //true
console.log(panagrams.every(shorterThanEight)); //false

//filter the array for numbers less than 100
const lessThanHundred = (value) =>{
    return (value < 100);
};
console.log(smallNums.filter(lessThanHundred));
console.log(nums.filter(lessThanHundred));

//filter words that have an even length
const evenLengthWords = (value) => {
    return (value.length % 2 === 0);
};
console.log(panagram.filter(evenLengthWords));
console.log(panagrams.filter(evenLengthWords));

//find the first value divisible by 5
const divideByFive = (value) =>{
    return (value % 5 === 0);
};

console.log(nums.find(divideByFive)); //525
console.log(smallNums.find(divideByFive)); //5

// find the first word that is longer than 6 characters
const longerThanSix = (value) =>{
    return(value.length > 6);
};

console.log(panagrams.find(longerThanSix)); //requires
console.log(panagram.find(longerThanSix)); // returns undefined

//find the index of the first number that is divisible by 3
const divideByThree = (value) => {
    return (value % 3 === 0);
};

console.log(nums.findIndex(divideByThree)); //4
console.log(smallNums.findIndex(divideByThree)); //2

//find the index of the first word that is less than 2 charaters long
const shorterThanTwo = (value) =>{
    return (value.length < 2);
};

console.log(panagrams.findIndex(shorterThanTwo)); //-1, non existant
console.log(panagram.findIndex(shorterThanTwo)); //-1, non existant

//console.log each value of the nums array multiplied by 3
nums.forEach((value) => console.log(value * 3));
//console.log each word with an exclamation point at the end of it
panagram.forEach((value) => console.log(value + '!'));
panagrams.forEach((value) => console.log(value + '!'));

//thought question: the original array remainds unchanged
//we can store values for a forEach method in a new array using .push method.

//make a new array of each number multiplied by 100
const multiplyByHundred = (value) => {
    return (value *= 100);
};

console.log(`Nums.map is ${nums.map(multiplyByHundred)}`);
console.log(smallNums.map(multiplyByHundred));

//make a new array of all the words in all uppercase
const toUpperCase = (string) =>{
    return string.toUpperCase();
};

console.log(panagrams.map(toUpperCase));
console.log(panagram.map(toUpperCase));

//thought question: original array remains unchanged
//yes, we can store values into a new array, as this prints out a new array

// Add all the numbers in the array together using the reduce method
const reducer = (accumulater, currentValue) => accumulater + currentValue;
console.log(nums.reduce(reducer)); //25535
console.log(smallNums.reduce(reducer)); //55

// concatenate all the words using reduce
const concatenate = (a,b) => a + b;
console.log(panagrams.reduce(concatenate));
console.log(panagram.reduce(concatenate));

//thought question: original array remainds unchanged

//Find out if some numbers are divisible by 7
const divideBySeven = (value) =>{
    return (value % 7 === 0);
};

console.log(smallNums.some(divideBySeven)); //true
console.log(nums.some(divideBySeven)); true

//Find out if some words have the letter a in them
const containsA = (value) =>{
    return(value.includes('a'));
};

console.log(panagrams.some(containsA)); //true
console.log(panagram.some(containsA)); //true

// Try to sort without any arguments, do you get what you'd expect with the numbers array?
//it sorts from smallest to large
console.log(nums.sort()); 
console.log(smallNums.sort());
// Sort the numbers in ascending order
console.log(nums.sort((a, b) => a - b));
console.log(smallNums.sort((a, b) => a - b));
// Sort the numbers in descending order
console.log(nums.sort((a,b) => b - a));
console.log(smallNums.sort((a,b)=> b-a));
// Sort the words in ascending order
console.log(panagram.sort((firstWord, secondWord) => firstWord.length - secondWord.length));

// Sort the words in descending order
console.log(panagram.sort((firstWord, secondWord) => secondWord.length - firstWord.length));

//thought question: the array remains unchanged
