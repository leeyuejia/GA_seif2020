// display a world cup winner within 21 century 
// every two seconds one after another in the chronicle order

// 2002	 Brazil
// 2006	 Italy
// 2010	 Spain
// 2014	 Germany
// 2018	 France
// const INTERVAL = 2000;

// setTimeout(() => {
//     console.log('2002	 Brazil');
//     setTimeout(() => {
//         console.log('2006	 Italy');
//         setTimeout(() => {
//             console.log('2010	 Spain');
//             setTimeout(() => {
//                 console.log('2014	 Germany');
//                 setTimeout(() => {
//                     console.log('2018	 France');
//                 }, INTERVAL);
//             }, INTERVAL);
//         }, INTERVAL);
//     }, INTERVAL);
// }, INTERVAL);

// // Promisify setTimeout
// // the future state if it's fulfilled it calls resolve(value)
// // if it's not fulfilled due to error exception, it calls reject(err);
// const setTimeoutPromise = (duration, action, message) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             action(message);
//             resolve(); 
//         }, duration);
//     });
// };

// setTimeoutPromise(INTERVAL, console.log, '2002	 Brazil')
//     .then(() => {
//         return setTimeoutPromise(INTERVAL, console.log,'2006	 Italy');
//     }).then(() => {
//         return setTimeoutPromise(INTERVAL, console.log,'2010	 Spain');
//     }).then(() => {
//         return setTimeoutPromise(INTERVAL, console.log,'2014	 Germany');
//     }).then(() => {
//         return setTimeoutPromise(INTERVAL, console.log,'2018	 France');
//     });

// const main = async () => {
//     await setTimeoutPromise(INTERVAL, console.log,'2002 Brazil');
//     await setTimeoutPromise(INTERVAL, console.log,'2006	 Italy');
//     await setTimeoutPromise(INTERVAL, console.log,'2010	 Spain');
//     await setTimeoutPromise(INTERVAL, console.log,'2014	 Germany');
//     await setTimeoutPromise(INTERVAL, console.log,'2018	 France');
// };

// main();

// async function testAsync () {
//     return 1;
// }

// function testPromise () {
//     return Promise.resolve(2);
// }

// function test () {
//     return 3;
// }

// testAsync()
//     .then(res => {
//         console.log(`Result is ${res}`);
//     });

// testPromise()
//     .then(res => {
//         console.log(`Result is ${res}`);
//     });

// test()
//     .then(res => {
//         console.log(`Result is ${res}`);
//     });

console.log('Very first message');

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
            return resolve('SetTimeout 2 executed!');
        }, 1000);
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
console.log('End of story');
// console.log('Very first message');
// setTimeout(() => {
//     console.log('Time\'s up');
// }, 100);
// console.log('End of story');
// console.log('End of story');
// console.log('End of story');
// console.log('End of story');
// console.log('End of story');
// console.log('End of story');
// console.log('End of story');