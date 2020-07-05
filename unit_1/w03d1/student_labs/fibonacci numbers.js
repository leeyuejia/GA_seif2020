let firstNum = 0
let secondNum = 1
let thirdNum = firstNum + secondNum
let sum = 0

while (thirdNum <= 4000000) {
    firstNum = secondNum
    secondNum = thirdNum
    thirdNum = firstNum + secondNum
    if ( thirdNum%2 ===0) {
        sum +=thirdNum
    }
};

console.log(sum);