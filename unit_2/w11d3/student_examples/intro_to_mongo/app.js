const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'tweets';

const client = new MongoClient(url, {
    useUnifiedTopology: true
});
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
//mongoshell - cursor is a pointer 
client.connect((err) => {
    assert.equal(null, err);
    console.log('connnected')
    let db = client.db(dbName)
    const collection = db.collection('tweets'); // to get collection

    // //findOne
    // collection.findOne({likes:{$gte: 20}},(err, docs) => {
    //     assert.equal(err, null);
    //     console.log(docs)
    // });

    // //find that returns an array
    // collection.find({likes:{$gte: 20}
    // }).toArray((err, docs)=> {
    //     assert.equal(err,null);
    //     console.log(docs)
    // })

    // // for promise usage to find one
    // collection.findOne(
    //     {likes:{$gte: 20}},{projection: {_id:0, title:1}}
    //     ).then(doc => {
    //         console.log(doc);
    //     }).catch(err => {
    //         assert.equal(err, null);
    //     })

    // // to delete
    // collection.deleteOne({title: 'Deep Thoughts'},
    // (err,result) => {
    //     assert.equal(err,null);
    //     assert.equal(1,result.result.n);
    // })

    // // to delete promise
    // collection.deleteOne({
    //     title: 'Whole Reality'
    // }).then (result => {
    //     assert.equal(1, result.result.n);
    // }).catch(err => {
    //     assert.equal(err,null);
    // })

    // update
    // collection.updateOne({
    //     title: 'Vespa'
    // }, {
    //     $set: {
    //         sponsored: true
    //     }
    // }, (err, result) => {
    //     assert.equal(err, null);
    //     assert.equal(1, result.result.n);
    // })

    // update (promise)
    // collection.updateOne({
    //     title: 'Vespa'
    // }, { $set: { sponsored: false } }
    // ).then(result => {
    //     assert.equal(1, result.result.n);
    // }).catch(err => {
    //     assert.equal(err, null);
    // })

    // // findone and update
    // collection.findOneAndUpdate({
    //     title:'Vespa'
    // }, {
    //     $set:{
    //         sponsored: true
    //     }
    // }, {
    //     returnOriginal:false
    // }, (err,doc)=> {
    //     assert.equal(err, null);
    //     console.log(doc)
    // });
    
    // // findone update (promise)
    // collection.findOneAndUpdate({
    //     title:'Vespa'
    // }, {
    //     $set:{
    //         sponsored: false
    //     }
    // }, {}).then(doc => {
    //     console.log(doc);
    // }).catch(err => {
    //     assert.equal(err, null);
    // });

    // //countDocument
    // collection.countDocuments({
    //     likes: {
    //         $gte: 20
    //     }
    // }, (err, count) => {
    //     assert.equal(err, null);
    //     console.log(count);
    // });

    //countDocument promise
    collection.countDocuments({
        likes: {
            $gte: 20
        }
    },{}).then(doc => {
        console.log(doc)
    }).catch(err => {
        assert.equal(err, null)
    });


    setTimeout(() => {
        client.close()
    }, 3000)
})
