/* eslint-disable indent */
const fetch = require('node-fetch');

// const promise = new Promise((resolve, reject) => {
// 	resolve(1)
// })

// promise.then(res => {
// 	console.log(res)
// });


// function f() {
// 	let promise = fetch("https://swapi.dev/api/people/1");
// 	promise.then(res => {
// 		return res.json()
// 	}).then(res=>{
// 		console.log(res)
// 	})
// }
// f();
/* -------------------------------------------------------------------------- */


async function getData() {
	console.log("hello");
	// try {
	// 	let response = await fetch("https://swapi.dev/api/peopewqeq/1");
	// } catch (err) {
	// 	console.log(err);
	// }
	// try {
	// 	let response = await fetch("https://swapi.dev/api/people/1");
	// } catch (err) {
	// 	console.log(err);
	// } finally {
	// 	console.log('finished')
	// }
	let results = Promise.all([
		fetch("https://swapi.dev/api/people/1"),
		fetch("https://swapi.dev/api/people/2"),
	]);
	console.log(results)

	// let result = await response.json();
	// console.log(result);
}
// getData().catch(err => {
// 	console.log("err", err.message)
// })
getData()

// promise.then(res=>{
// 	console.log(res);
// }).catch(err=>{
// 	console.log(err);
// })


/* -------------------------------- Callback -------------------------------- */
​
collection.find({}).toArray((err, docs) => {
	assert.equal(err, null);
	console.log("Found the following records");
	console.log(docs)
	client.close()
});
​
// OR
​
const callback = (err, docs) => {
	assert.equal(err, null);
	console.log("Found the following records");
	console.log(docs)
	client.close()
}
​
collection.find({}).toArray(callback);
​
// problem w callback is nesting => callback hell
​
/* --------------------------------- Promise -------------------------------- */
​
const docs = collection.find({}).toArray()
​
docs.then(res => {
	console.log("Found the following records");
	console.log(res)
	client.close()
}).catch(err => {
	assert.equal(err, null);
})
​
/* ---------------------------------- Await --------------------------------- */
​
// remember to place await within an async fn
const fn = async () => {
	try {
		const docs = await collection.find({}).toArray()
		console.log("Found the following records");
		console.log(docs)
		client.close()
	} catch (err) {
		assert.equal(err, null);
	}
}
fn()
