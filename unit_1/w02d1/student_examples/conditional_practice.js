// // let a = 1

// // if(!a === true) {//!a is the opposite which means 1 becomes false now.
// //     console.log("hello! World")
// // } else {
// //     console.log("hi");
// // }

// // chose an M&M
// // let isMMColorGreen = true;

// // // Decide what to do based on M&M color
// // if (isMMColorGreen){
// //   console.log('Eiw! I am hurling this gross green M&M across the room.');
// // } else {
// //   console.log('Yum! M&Ms are so tasty!');
// // }

// const isPartyTonight = false;
// const miniGolfCoupon = false;
// const saleAtTheMall = false;


// if (isPartyTonight) {
//   conosle.log("I am going to party like it is 1999")
// } else if (miniGolfCoupon) {
//   console.log("Hole in one! Woo!")
// } else if (saleAtTheMall) {
//   console.log("When you buy more, you save more!")
// } else {
//   console.log('I love cooking cookies')
// }

// start with the player's turn
// let playerTurn = true;

// console.log("Is it the player's turn? " , playerTurn);
// playerTurn = !playerTurn;
// console.log("Is it the player's turn? " , playerTurn);
// playerTurn = !playerTurn;
// console.log("Is it the player's turn? " , playerTurn);
// playerTurn = !playerTurn;
// console.log("Is it the player's turn? " , playerTurn);

// a = ""

// if (a == true) {
//     console.log(a)
// } else {
//     console.log("not true")
//     }





// // Is the number 1 equivalent to the number 1?
// console.log(1)
// console.log(Boolean(1));
// // Is the string "beans" equivalent to the string "Beans"?
// console.log("beans" === "beans")
// // Is (5 + 5 * 3) equivalent to ((5 + 5) * 3)?
// console.log(5 + 5 *3) === ((5+5) *3)
// // Is 9 strictly unequal to false?
// console.log(9 !== false);
// // Is NaN equivalent to NaN?
// console.log (NaN == NaN);
// // Explain what is happening in the following code

// console.log (5 == "5")
// console.log (5 === "5")

// console.log("A" > "a");
// console.log("b" > "a");
// console.log(12 > "12");
// console.log(12 >= "12");
// console.log("z" > 6);

// Is "McDonald's" greater than "Burger King?"

// console.log('McDonald\'s ' + " Burger King");


// username = ''
// let user = username || 'Bob Bobby Bob'
// console.log(user)

// for (let i=0; i<10; i++) {
//     i % 3 === 0 && console.log (i + " is a multiple of 3");
// }
// i % 3 === 0 is a condition. if it is true, then log. if it is not true, dun log.

// Check: a && a == b
// Check: !true || !false && !false
// Check: 8 > 1 && true || false
const a = true;
const b = false;

console.log(a && a ==b);

//javascript use thisIsCamelCase. //thisIsCamelCase
//python use snake_case // this_is_snake_case
//html use sausage-case // this-is-snake-case

////////////////////////////////////////////////////////////////////////   LECTURER CODE BELOW   /////////////////////////////////////////////////////////////////////////
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

console.log('⚾');
console.log('⏰');
console.log('🌮');
console.log('🍪');
console.info("Info here");
