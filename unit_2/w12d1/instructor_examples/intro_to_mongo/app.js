const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'tweets';

const client = new MongoClient(url, {
    useUnifiedTopology: true
});

const myFirstTweet = {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
};

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

client.connect((err) => {
    assert.equal(null, err);
    console.log('Connected succcessfully to Mongo Server');
    let db = client.db(dbName);
    const collection = db.collection('tweets');

    // collection.insertMany(manyTweets, (err, result) => {
    //     assert.equal(null, err);
    //     assert.equal(manyTweets.length, result.insertedCount);
    //     client.close();
    // });
    // collection.findOne({
    //     likes: {
    //         $gte: 20
    //     }
    // }).then(doc => {
    //     console.log(doc);
    //     client.close();
    // }).catch(err => {
    //     assert.equal(err, null);
    // });
    // collection.deleteMany({
    //     title: 'Deep Thoughts'
    // }).then(result => {
    //     assert.equal(1, result.result.n);
    //     console.log('Removed the documents with the title equals to \'Deep Thoughts\'');
    //     client.close();
    // }).catch(err => {
    //     assert.equal(err, null);
    // });

    // collection.updateOne({
    //     title: 'Vespa'
    // }, {
    //     $set: {
    //         sponsored: true
    //     }
    // }, function (err, result) {
    //     assert.equal(err, null);
    //     assert.equal(1, result.result.n);
    //     client.close();
    // });

    // collection.updateOne({
    //     title: 'Vespa'
    // }, {
    //     $set: {
    //         sponsored: false
    //     }
    // }).then(result => {
    //     assert.equal(1, result.result.n);
    //     client.close();
    // }).catch(err => {
    //     assert.equal(err, null);
    // });
    // collection.findOneAndUpdate({
    //     title: 'Vespa'
    // }, {
    //     $set: {
    //         sponsored: true
    //     }
    // }, {}).then(doc => {
    //     console.log(doc);
    //     client.close();
    // }).catch(err => {
    //     assert.equal(err, null);
    // });
    // collection.countDocuments({
    //     likes: {
    //         $gt: 20
    //     }
    // }).then(count => {
    //     console.log(count);
    //     client.close();
    // }).catch(err => {
    //     assert.equal(err, null);
    // });
    collection.find({
        likes: {
            $gte: 20
        }
    }).project({
        'title': 1,
        'body': 1,
        'likes': 1,
        '_id': 0
    }).limit(4).sort({
        'likes': 1
    }).toArray((err, docs) => {
        assert.equal(err, null);
        console.log(docs);
        client.close();
    });
});