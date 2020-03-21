// write a pseudocode for waffles. 
// let waffle maker machine power to be true
// let frozenwaffles to be laid on the table
// if syrup = maple syrup, remove from refridgerator
// fronzenwaffles += maples syrup
// 

// peanut butter and jelly sandwich
// first do we have peanut butter and jam and bread on the table?
// if we not have the above items, search for the items 
// take two slices of bread and let it be on the chopping board
// Check if the peanut butter is open? if it is return true, else return false.
// search for a spoon, if found, spoon += peanut butter. 
// let twoscoop of peanut butter = peanutbutter on the spoon
// add the twoscoop of peanut butter unto the breadsliceA.
// let jamscoop = jam +=spoon.
// add jamscoop on breadsliceB. 
// let peanutbutterjellysandwich = breadsliceA + breadsliceB

//QNS: Find all fibonacci sequence. if fibonacci numbers within 400000, all up the numbers
// that are even numbers.

//fibonacci number :
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
let firstNum = 0;
let secondNum = 1;
let thirdNum = firstNum + secondNum;
let sum = 0;

while (thirdNum <= 4000000) {
    firstNum = secondNum
    secondNum = thirdNum
    thirdNum = firstNum + secondNum
    if (thirdNum%2 ===0) {
        sum +=thirdNum
    }
};

console.log(sum);
// if num3 %2 === 0, sum += num3 then 
// num1 = num3
// num2 = num3
// num3 = num1 + num2
 
