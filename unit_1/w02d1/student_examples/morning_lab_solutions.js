// // Which line(s) is/are valid?
// let a = 0;
// const b = 1; // this is a const, cannot be changed
// 9 = a; //this is not valid. 
// b = b + 5; // because of line 3, this becomes invalid

// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.abs(b-a));
// console.log(Math.max(a,b,c,d,e));
// console.log(Math.min(a,b,c,d,e));
// console.log(Math.sqrt(e));
// console.log(Math.pow(e,d));
// console.log((Math.round(Math.random() * 6)));

// let firstVar = "Hello World"
// firstVar = 9
// let secondVar = firstVar
// secondVar = "Hello World"
// console.log(secondVar);

// let yourName = "YJ"
// console.log(secondVar + " My Name is " + yourName);

// //Boolean Activities
// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// a _ b;
// c _ d;
// 'Peanut' _ 'Peanut';
// a _ b _ c;
// a _ a _ d;
// e _ 'Jelly Bean';
// 48 _ '48';
// // 'e' _ 'Eh'
// console.log(a < b);

//to be continue

//The Farm

// let animal = 'cow';
// animal = "human"

// if (animal == 'cow') {
//     console.log("moooo") } 
// else {
//     console.log("Hey! Your're Not a cow!")
//     }

// // Driver's Ed
// let age = 32

// if (age <= 16) {
//     console.log("You are too young")
// } else if (age>16) {
//     console.log("Here are the keys")
// };

//just loop it

// for (i=0; i<= 10; i ++) {
//     console.log (i)
// };

// for (z=100; z>=90; z--) {
//     console.log(z)
// };

// // let's get odd

// for (y=0; y<=10; y++) {
//     y%2 === 1 && console.log(y + " is an odd number")
// };

// Give me Five

// for (x=0; x<=10; x++) {
//     if (x%5 === 0) {
//         console.log("I found a " + x + " High five")
//     } else if (x%3 === 0) {
//         console.log("its multiples of three")
//     } else {
//         console.log("I found a " + x + " three is a crowd")
// }
// };
//saving accounts

let bankAccount = 0;

for (let q=0; q<=100; q++) {
   bankAccount = bankAccount + q ;
}
let double = bankAccount * 2;
console.log(double);

//Fibonanci
// Assume the last two numbers are num1 and num2
// The current num = num1 + num2;
// seed numbers: 1, 2
// during while loop 
// create a new variable called sum which stores the final result
// if the number is even number, then add the number to the sum
// then memorise the current number (rotate)
// then store the num2 to num1
// and store the current number to become the num2 
//For WHILE LOOP//


// let num1 = 1;
// let num2 = 2;
// let num = 0;
// let sum = 0; 

// while (num <= 400) {
//     num = num1 + num2;
//     if(num%2 === 0) {
//         sum += num; 
//     }
//     num1 = num2;
//     num2 = num;
// }
// console.log(sum)

//For FOR LOOP//
// let num1 = 1
// let num2 = 2
// let sum = 0;

// for (let i=0; i<=10; i++) {
//     num3 = num1 + num2;
//     num1 = num2
//     num2 = num3
// if (num3%2 === 0) {
//     console.log(num3);
//     sum += num3
// }
// };
// console.log(sum)

const boardSize = 20
let area = ""; //create an empty "space"

for (let axisy = 1; axisy <=boardSize; axisy++) { // Create a loop that loops downwards
        for (let axisx = 1; axisx <=boardSize; axisx++) { //create another loop that loops horizontal 
            if (axisx%2 === 0) { //in horizontal, if its even add a "#", if odd, add " "
                area += "#"
            }else {
                area += " "
            } // axis x will loop 8 times resulting in "# # # # " 
        }
    if (axisy%2 === 1) {  // for even number, axis y will break line after the above loop
        area += "\n "
    }
    else ( // for odd number, axis x will breakline with a space
        area += "\n"
    )
};
console.log(area);