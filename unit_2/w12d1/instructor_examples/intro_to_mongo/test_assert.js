<<<<<<< HEAD
// const assert = require('assert');
// assert.equal(1, 1);
const fetch = require('node-fetch');
// console.log('Hello world');
=======
const assert = require('assert');
let varToBeCompared = 1;
assert.equal(varToBeCompared, 1); // if true, continue, else terminate here
>>>>>>> cf63786459ad90073f31a7dcf32dc21207180ff9

//// https://javascript.info/async-await#tasks task////
//task 1
const loadJson = async (url) => {
        let result = await fetch(url)
        if (result.status == 200) {
            return result.json();
        }
        throw new Error (err.status)
    }
  
  loadJson('https://mhw-db.com/charms')
    .catch(console.log('error'))

// task 2

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
  
    return loadJson(`https://api.github.com/users/${name}`)
      .then(user => {
        alert(`Full name: ${user.name}.`);
        return user;
      })
      .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("No such user, please reenter.");
          return demoGithubUser();
        } else {
          throw err;
        }
      });
  }
  
  demoGithubUser();