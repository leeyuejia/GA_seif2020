
/*let a = "hi";
let b = "YEP!"
for (x=0; x<=15; x++) {
    console.log(a)
};

for (z=0; z<=30; z++) {
    console.log(b)
};
*/
// let some_num = 9
// let some_numB = Math.random() * 10
// for (let c=0; c<=10; c++) {
//     if (c <= some_numB) {
//         console.log("that is a small number") 
//     };
// };
let found = false;
let count = 0;
let fave_day = 'semptember';
let everyday = ['monday','tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log ('count', count);

for (let x=0; x<=everyday.length; x++) {
    if (fave_day === everyday[x]) {
        console.log ('TGIF') 
        found = true;
    } else {
        console.log ('Boring day')
    }
    
    count = 'banana';
};
if(!found) {
    console.log ('your')
};
console.log ('count', count);
//compare the above//
// let fave_day = 'September';
// let found = false;
// let everyday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// for (let i = 0; i < everyday.length; i++) {
//     if (fave_day === everyday[i]) {
//         if (fave_day === 'Monday' || fave_day === 'Tuesday' ||
//             fave_day === 'Wednesday' || fave_day === 'Thursday' ||
//             fave_day === 'Friday') {
//             console.log('Give me a good \'ol weekday');
//         } else {
//             console.log('I like the weekend');
//         }
//         found = true;
//     }
// }
// if(!found) {
//     console.log('You input is invalid');
// }