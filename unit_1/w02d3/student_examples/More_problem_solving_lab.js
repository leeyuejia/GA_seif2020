// Write a function calculateCube that takes a single number
//  and prints the volume of a cube made from that number.

// const cube = (num) => {
//     return num * num * num
// };

// console.log (cube(5));

// Is a Vowel?
// Write a function isAVowel that takes a character (i.e. a string of length 1) and 
// returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
// let vowels = ['A','a','E','e', 'I', 'i', 'O', 'o', 'U' ,'u'];

// const isAVowel = (i) => {
//      if (i === "A" || i === "a" || 
//         i === "E" || i === "e" ||
//         i === "I" || i === "i" ||
//         i === "O" || i === "o" ||
//         i === "U" || i === "u") {
//         return true}
//     else {
//         return false
//     }};

// console.log(isAVowel('A'));

// Write a function getTwoLengths that accepts two parameters (strings). The function should return 
// an array of numbers where each number is the length of the corresponding string.

// let array = []
// const getTwolengths = (stringA, stringB) => {
//     array.push(stringA.length)
//     array.push(stringB.length)
//     return (array)
// }
// console.log(getTwolengths("Hank","Hippopopalous"));

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
// The function should return an array of numbers where each number is the length of the corresponding string.

// const getMultipleLengths = (arrayOfStrings) => {
//     let array2 = []
//     for (i=0; i<=arrayOfStrings.length -1; i++) {
//     array2.push(arrayOfStrings[i].length) };
//     return array2  
// };
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

// Define a function maxOfThree 
// that takes three numbers as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. 
// If the two largest numbers are the same, one of them should be returned.

// const maxOfThree = (num1, num2, num3) => {
//     let array = [num1, num2, num3]
//     return Math.max(...array)
// };
// console.log(maxOfThree(6, 9, 1));

// Write a function printLongestWord that accepts a single argument, an array of strings. 
// The method should return the longest word in the array. In case of a tie, the method should 
// return the word that appears first in the array.

const printLongestWord = (arrayOfWords) => {
    let max = 
    for (i=0; i<arrayOfWords.length; i++) {
            words = arrayOfWords[i].length
            if (arrayOfWords[i].length > words ) {
            words = arrayOfWords[i].length
        }
    }
    return (max);
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));