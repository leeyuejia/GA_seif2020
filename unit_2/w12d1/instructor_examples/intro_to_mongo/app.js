const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tweets';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const tweets = client.db(dbName).collection('tweets');

    // const myFirstTweet = {
    //     title: 'Deep Thoughts',
    //     body: 'Friends, I have been navel-gazing',
    //     author: 'Karolin'
    // };

    // tweets.insertOne(myFirstTweet, (err, result) => {
    //     assert.equal(null, err); 
    //     assert.equal(1, result.insertedCount);
    //     // get control of terminal back
    //     // else just use control c
    //     client.close();
    // });

    const manyTweets = [
        {
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
            body: 'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
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
    // tweets.insertMany(manyTweets, (err, result) => {
    //     assert.equal(null, err); 
    //     assert.equal(manyTweets.length, result.insertedCount);
    //     client.close();
    // });
    // tweets.find({}, { projection: { title: 1, author: 1, _id: 0 } }).toArray((err, docs) => {
    //     assert.equal(err, null);
    //     console.log('Found the following records');
    //     console.log(docs);
    //     client.close();
    // });  
    // tweets.findOneAndUpdate({
    //     title: 'Vespa'
    // }, {
    //     $set: { sponsored: false }
    // }, {
    //     returnOriginal: false
    // }, (err, doc) => {
    //     assert.equal(err, null);
    //     console.log(doc);
    //     client.close();
    // });

    tweets.find({
        likes: {
            $gte: 20
        }
    }).project({
        'title': 1,
        'body': 1,
        'likes': 1,
        '_id': 0
    }).limit(2).sort({
        'title': 1
    }).toArray((err, docs) => {
        assert.equal(err, null);
        console.log(docs);
        client.close();
    });
});

// setTimeout(()=>{client.close();}, 5000);
