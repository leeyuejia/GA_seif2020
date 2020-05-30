// let promise = new Promise((resolve, reject) => {
//     resolve(1)
// })

// promise.then((res) => {
//     console.log(res)
// })

// async function f() {
//     return 1
// }
// console.log(f()) // this will return "Promise { 1 }"
// const promise = f()

// promise.then((res) => {
//     console.log(res)
// }) // this will return 1

console.log('Test1')

// async function f() {
//     console.log('test2');
//     let promise = new Promise((resolve,reject) => {
//         console.log('test3');
//         setTimeout(() => resolve('done'), 1000)
//     })
//     console.log('test4')
//     promise.then(res => {
//         console.log(res)
//     })
//     console.log('test 5');
// }
// console.log('test6');
// f();
// console.log('test7')


// async function f() {
//     console.log('test2');
//     let promise = new Promise((resolve,reject) => {
//         console.log('test3');
//         setTimeout(() => resolve('done'), 1000)
//     })
//     let result = await promise;
//     console.log(result)
//     console.log('test4')
//     console.log('test 5');
// }

// console.log('test6');
// f();
// console.log('test7')
const fetch = require("node-fetch")
/*


let data = fetch('https://mhw-db.com/charms')
async function f() {
    console.log('test 2');


    let response = await data;
    let result = await response.json();
    console.log(result[1].ranks[4].skills)
    console.log('test 4')
    console.log('test 5');
}
console.log('test6')
f();
console.log('test7')

class Waiter {
    async wait() {
        return await Promise.resolve(1)
    }
}

new Waiter()
.wait().then(alert)
*/

async function getData() {
    
    try {
        let response = await fetch('https://mhw-db.com/charms/5');
    let result = await response.json();
    console.log(result);

    } catch(err) {
        console.log(err.message)
    }
}
getData()


