/* eslint-disable quotes */
/* eslint-disable indent */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'manyTweets';

const manyTweets = [{
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
},
{
    title: 'Sage Advice',
    body: 'Friends, I am vegan and so should you',
    author: 'Karolin',
    likes: 20
},
{
    title: 'Whole Reality',
    body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Karolin',
    likes: 40
},
{
    title: 'Organic',
    body: 'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Karolin',
    likes: 162
},
{
    title: 'Confusion',
    body: 'Friends, why do you just respond with the word `dislike` ? Surely you mean to click the like button?',
    author: 'Karolin',
    likes: -100
},
{
    title: 'Vespa',
    body: 'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Karolin',
    likes: 2
},
{
    title: 'Licensed',
    body: 'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
    author: 'Karolin',
    likes: 3
},
{
    title: 'Water',
    body: 'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Karolin',
},
];

const client = new MongoClient(url, {
	useUnifiedTopology: true
});

client.connect(async err => {
	assert.equal(null, err);
	console.log("connected to Mongo server!");
	let db = client.db(dbName);

	const collection = db.collection('manyTweets');

	try {
		const response = await collection.find({}).toArray();
		console.log("Found the following records");
		console.log(response)
	} catch (err) {
		console.log("test")
		assert.equal(err, null);
	} finally {
		client.close()
	}
});

