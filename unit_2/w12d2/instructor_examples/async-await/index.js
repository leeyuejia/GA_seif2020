// async function testAsync() {
//   return 1;
// }

// function testPromise() {
//   return Promise.resolve(2);
// }

// function test() {
//   return 3;
// }

// testAsync()
// .then(res => {
//   console.log(`Result is ${res}`);
// });

// testPromise()
// .then(res => {
//   console.log(`Result is ${res}`);
// })

// test()
// .then(res => {
//   console.log(`Result is ${res}`);
// });

console.log('AAAAAA');

function tryTestTimeout () {
    return new Promise((resolve, reject) => {
        console.log('Before Timeout 1');
        setTimeout(function () {
            // console.log('SetTimeout executed!');
            return resolve('SetTimeout 1 executed!');
        }, 1000);
    });
}

let testPromise = 
new Promise((resolve, reject) => {
    console.log('Before Timeout 2');
    setTimeout(function () {
        return resolve('SetTimeout 2 executed!');}, 1000);
});


console.log('BREAK POINT 1 HERE ');

tryTestTimeout()
    .then(res => {
        console.log(res);
    });

console.log('BREAK POINT 2 HERE');

testPromise.then(res => {
    console.log(res);
});
console.log('BBBBBB');