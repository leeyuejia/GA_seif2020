// //good
// if (true) {
//     const a = 2 + 2;
//     console.log(a);
// }

// //bad
// if (true) {
//     const a = 2 + 2;
//     console.log(a);
// }

// //bad
// if (true) {
//     const a = 2 + 2;
//     console.log(a);
// }

// if(true){
//     if(false){
//         console.log('hi');
//     }
// }

// //Name Variables Semantically
// const a = 1 + 2 + 3; //bad
// const sumOfThreeNumbers = 1 + 2 + 3; //good

// //Define Functions at the Top of the File
// const foo = ()=>{
//     console.log('foo here');
// }
// const bar = ()=>{
//     console.log('bar here');
// }

// foo();
// bar();

/**
 * @description
 * @param {string} name 
 * @param {number} age 
 * @returns {void}
 * @summary console logs an english string consisting of the person's name and how old they are
 */
const describePerson = (name, age)=>{
    const finalString = name + " is " + age + " years old."; //create the message
    console.log(finalString); //log the message
}


describePerson('Mike', 30);

//=== vs == 
//===

console.log(parseInt('18')); // parse string into integer
console.log(parseFloat('19.87654')); // convert string into a float

console.log((18).toString());
//NaN is not a number
console.log(isNaN(1));

console.log(5 + parseInt('5')); 
const a = () => {};
console.log(typeof a);


//modified GA example
const numberOccurance = 5;
let counterForMyTimer = 0, counterForShanTimer = 0;
let myTimer, shanTimer;

const shanTimerCallback = () => {
    console.log(counterForShanTimer + ' by Shan\'s sample');
    if (++counterForShanTimer >= numberOccurance) {
        clearInterval(shanTimer);
    }
};

const myTimerCallback = () => {
    let t = (new Date()).toLocaleTimeString();
    console.log(t + ' - by setInterval');
    if (++counterForMyTimer >= numberOccurance) {
        clearInterval(myTimer);
        shanTimer = setInterval(shanTimerCallback, 2000);
    }
};
myTimer = setInterval(myTimerCallback, 1000); 