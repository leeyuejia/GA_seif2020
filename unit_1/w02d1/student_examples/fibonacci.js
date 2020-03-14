// Here is the challenge: 
// By considering the terms in the Fibonacci sequence 
// whose values do not exceed four million, 
// find the sum of the even-valued terms.

// Assume the last two numbers are num1 and num2
// The current num = num1 + num2;
// seed numbers: 1, 2
// during while loop 
// create a new variable called sum which stores the final result
// if the number is even number, then add the number to the sum
// then memorise the current number (rotate)
// then store the num2 to num1
// and store the current number to become the num2 
let num1 = 1, num2 = 2, num = 0, sum = 0;
while (num <= 4000000) {
    // the current number num = num1 + num2;
    num = num1 + num2;
    if (num % 2 === 0) {
        sum += num;
    }
    num1 = num2;
    num2 = num;
}
console.log(sum);

for (let num1 = 1, num2 = 2; num <= 4000000; ) {
    num = num1 + num2;
    if (num % 2 === 0) {
        sum += num;
    }
    num1 = num2;
    num2 = num;
}
console.log(sum);