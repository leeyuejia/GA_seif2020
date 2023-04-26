// const assert = require('assert');
// assert.equal(1, 1);
const fetch = require('node-fetch');
// console.log('Hello world');
const assert = require('assert');
let varToBeCompared = 1;
assert.equal(varToBeCompared, 1); // if true, continue, else terminate here

//// https://javascript.info/async-await#tasks task////
//task 1
// const loadJson = async (url) => {
//         let result = await fetch(url)
//         if (result.status == 200) {
//           let json = await result.json()
//           return json
//         }
//         throw new Error (result.status)
//     }

//   loadJson('https://mhw-db.com/charms').then(res => {
//     console.log(res)
//   }).catch(console.log('error'))

// // task 2
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
const loadJson = async (url) => {
  let result = await fetch(url)
  if (result.status == 200) {
    let jsonResult = await result.json()
    return jsonResult
  }
  throw new HttpError(result)
}


// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let name = await prompt("Enter a name?", "iliakan");
  try {
    let result = await loadJson(`https://api.github.com/users/${name}`)
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      console.log("No such user, please reenter.");
      // return demoGithubUser();
    } else {
      throw err;
    }
  }
    console.log(`Full name: ${user.name}.`)
    return user
}
demoGithubUser().then(res => console.log(res).catch(console.log('err is:'+ err)));

//task 3

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 5000));

  return 10;
}

async function f() {
  let promise = new Promise((resolve,reject)=> {
    resolve(wait())
  })
  promise.then(res => {console.log(res)})
  // ...what to write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
}

f();