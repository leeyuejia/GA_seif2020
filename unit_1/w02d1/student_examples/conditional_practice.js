if (true) {
    console.log("Hello World");// A
} else {
    console.log("Hi"); // B
}

// chose an M&M
let isMMColorGreen = false;
let isGoodTaste = true;

// Decide what to do based on M&M color
if (isMMColorGreen) {
    if (isGoodTaste) {
        console.log('Eiw! I am hurling this gross green M&M across the room.');
    } else {
        console.log('Something wrong');
    }
} else {
    if (isGoodTaste) {
        console.log('Yum! M&Ms are so tasty!');
    } else {
        console.log('Something');
    }
}

const isPartyTonight = true;
const miniGolfCoupon = false;
const saleAtTheMall = false;

if (isPartyTonight) {
    console.log("I am going to party like it is 1999")
} else if (miniGolfCoupon) {
    console.log("Hole in one! Woo!")
} else if (saleAtTheMall) {
    console.log("When you buy more, you save more!")
} else {
    console.log('I love cooking cookies')
}

let hungry = true;
let thirsty = false;

console.log(hungry) // true
console.log(thirsty) // false
// use not/bang
console.log(!hungry) // false
console.log(!thirsty) //true

// start with the player's turn
let playerTurn = true;

console.log("Is it the player's turn? ", playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? ", playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? ", playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? ", playerTurn);

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(0));

let checkMessage; // undefined 
console.log(checkMessage); // undefined
if (checkMessage) {
    console.log("There is a message");
} else {
    console.log("There is no message");
}

//Is the string "beans" equivalent to the string "Beans"?
console.log("beans" == "Beans");
console.log("beans" === "Beans");

// Is (5 + 5 * 3) equivalent to ((5 + 5) * 3)?
console.log((5 + 5 * 3) == ((5 + 5) * 3))

// Is 9 strictly unequal to false?
console.log(9 !== false); // true !== false

// Is NaN equivalent to NaN?
console.log(undefined === undefined); // 

// Explain what is happening in the following code

// first, walk through it and guess what should happen
// run the code
// is it what you expected?
// how can we change this code to run as expected?
let mmColor = 'blue'

if (mmColor = 'green') {
    console.log('Eiw! I am hurling this gross green M&M across the room.')
} else {
    console.log('Yum! M&Ms are so tasty!')
}

console.log("A" < "a");// number representation of characters
console.log("b" > "a"); // number representation of characters
console.log(12 > "12");// 12 > 12 because of type coercion
console.log(12 >= "12"); // 12  >= 12 because of type coercion

console.log('a' > 'b');
console.log('a' >= 12);

// Is -10 greater than or equal to -100?
console.log(-10 >= -100);

// Is Infinity greater than or equal to -Infinity?
console.log(Infinity <= -Infinity);

//Is "McDonald's" greater than "Burger King?"
console.log('😁' > '😢');

for (let i = 0; i < 100; i++) {
    i % 3 === 0 && console.log(i + ' is multiple of 3');
}

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

console.log('⚾');
console.log('⏰');
console.log('🌮');
console.log('🍪');