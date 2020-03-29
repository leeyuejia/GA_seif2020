// const iceCreams = ['vanilla', ' chocolate','strawberry']

// //traditional loop and function it to all array

// const updatedIceCreams = iceCreams.map((flavor) => {
//     return flavor + ' Ice Cream';
// });

// console.log(iceCreams)
// console.log(updatedIceCreams)

// const numArray = [2,4,6]
// const newNumArray = numArray.map((num) => {
//     return num * 2
// });
// console.log(numArray)
// console.log(newNumArray)


//EVERY
// const arrayOfNumbers = [5, 20, 3, 40, 60]
// function checknum(arrayOfNumbers) {
//     return arrayOfNumbers >= 6;
// }
// console.log(arrayOfNumbers.every(checknum));


const temp = [37.7, 37.8, 37.9, 38.7, 38.0, 37.8,35.0]
function checktemp(temp) {
    return temp >= 37.5
};
console.log('Is everyone\s temperature higher than 37.5?' + temp.every(checktemp));

const success = ['understand','understand','understand','understand','understand']
function checkSuccess(success) {
    return success == 'understand'
};
const check = () => {
    if (success.every(checkSuccess) === true) {
        console.log(' I have succeed')
    } else {
        console.log( ' I have fail')
    }
};
check()


// 1. Every
// 2. Filter
// 3. Find
// 4 Find Index
// 5 For Each
// 6 Map (come up with a new example!)
// 7 Reduce
// 8 Some
// 9 Sort (research how to use sort with a callback)

// const classArray = ['Javascript','HTML','CSS','Data Analysis', 'Marketing', 'Database Design', 'Visual Design']
// const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 1];
// // please come up with a real world example of when you might use this method. (edited) 

// //1 EVERY
// function checknumber(classArray) {
//     return classArray == String
// };
// console.log(classArray.every(checknumber));

// const success = ['understand','understand','understand','understand','understand']
// function checkSuccess(success) {
//     return success == 'understand'
// };
// const check = () => {
//     if (success.every(checkSuccess) === true) {
//         console.log(' I have succeed')
//     } else {
//         console.log( ' I have fail')
//     }
// };
// check()