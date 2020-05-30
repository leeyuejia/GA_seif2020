# Intro to MongoDB Node. JS Driver

## Lesson Objectives

1. Explain what MongoDB Node.JS Driver is
1. Connect to Mongo via Node.JS Driver
1. Insert documents in MongoDB Node.JS Driver
1. find documents in MongoDB Node.JS Driver
1. update documents in MongoDB Node.JS Driver
1. remove documents in MongoDB Node.JS Driver
1. combine actions

## Explain what is MongoDB Node. JS Driver

To connect to MongoDB and do MongoDB CRUD operations from Node. JS, we use MongoDB Node. JS Driver. The official MongoDB Node.js driver provides both callback-based and Promise-based interaction with MongoDB, allowing applications to take full advantage of the new features in ES6.

## Basic Set Up

In `student_examples` 

* `mkdir intro_to_mongo` 
* `cd intro_to_mongo` 
* `touch app.js` 
* `npm init -y` and go through the prompts
* `npm i mongodb` 
* `code .` 

## Set Up MongoDB

Inside `app.js` 

* require mongodb

``` js
// Dependencies
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
```

* mongo url - tell MongoClient where to connect with Mongo and have it connect with the sub-database `tweets` (if it doesn't exist, it will be created)

``` js
// Global configuration
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'tweets';
```

* Create a new MongoClient

``` js
// Create a new MongoClient
const client = new MongoClient(url, {
    useUnifiedTopology: true
});
```

* Connect to MongoDB

``` js
// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');
});
```

* While the connection is open, we won't have control of our terminal. If we want to regain control, we have to close the connection.

Let's set leave the connection open for 5 seconds to demonstrate that the app will hang and then we'll get our close message.

Otherwise we have to press `control c` . When we run an express app, we typically want to leave the connection open, we don't need to get control of terminal back, we just let the app run.  

``` js
// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
setTimeout(() => {
    client.close()
}, 5000)
```

* The entire configuration for mongodb:
* Don't memorize it, just set a bookmark and refer back to this as you need it.
* note the setTimeout was just to demonstrate what `client.close()` does, you don't always need it

``` js
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tweets';

// Create a new MongoClient
const client = new MongoClient(url, {
    useUnifiedTopology: true
});

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});
```

## Create a Document with MongoDB Node. JS Driver

In `app.js` 

Let's make ourselves an object to insert into our database. When we connect with an express app, our data will be coming in as an object from the browser.

``` js
const myFirstTweet = {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
}
```

``` js
tweets.insertOne(myFirstTweet, (err, result) => {
    assert.equal(null, err);
    assert.equal(1, result.insertedCount);
    // get control of terminal back
    // else just use control c
    client.close();
});
```

Let's run this with
`node app.js` 

Every time we run `node app.js` it will run the code, and thus insert this object over and over again.  Let's not do that. Let's comment it out.

Let's insert many more tweets

``` js
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
        author: 'Karolin'
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
```

Let's insert all these tweets:

``` js
tweets.insertMany(manyTweets, (err, result) => {
    assert.equal(null, err);
    assert.equal(manyTweets.length, result.insertedCount);
    client.close();
});
```

* `node app.js` 

and let's comment it out so we don't insert duplicates

## Find Documents with Mongo Node.JS Driver

* Mongo Node.JS Driver has 4 methods for this

 - `find` - generic
 - `findOne` - limits the search to the first document found

Let's find all

``` js
tweets.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    client.close()
});
```

Let's limit the fields returned, the second argument allows us to pass a string with the fields we are interested in:

``` js
    tweets.find({}, {
        projection: {
            title: 1,
            author: 1,
            _id: 0
        }
    }).toArray((err, docs) => {
        assert.equal(err, null);
        console.log('Found the following records');
        console.log(docs);
        client.close();
    });
```

Let's look for a specific tweet:

``` js
   tweets.find({
       title: 'Water'
   }).toArray((err, docs) => {
       assert.equal(err, null);
       console.log(docs);
       client.close();
   });
```

We can also use advanced query options. Let's find the tweets that have 20 or more likes

``` js
    tweets.find({
        likes: {
            $gte: 20
        }
    }).toArray((err, docs) => {
        assert.equal(err, null);
        console.log(docs);
        client.close();
    });
```

We can also limit the result to the first document that matches the query using `findOne` .

``` js
    tweets.findOne({
        likes: {
            $gte: 20
        }
    }, (err, doc) => {
        assert.equal(err, null);
        console.log(doc);
        client.close();
    });
```

### Delete Documents with MongoDB Node.JS Driver

We have two copies of our first tweet and a few options to delete it

* `remove()` danger! Will remove all instances
* `deleteOne()` - this seems like a great choice
* `deleteMany()` - Delete multiple documents from a collection

``` js
    tweets.deleteOne({
        title: 'Deep Thoughts'
    }, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log('Removed the document with the title equals to \'Deep Thoughts\'');
        client.close();
    });
```

### Update Documents with Mongo Node.JS Driver

Finally, we have a few options for updating

* `update()` - the most generic one
* `updateOne()` - Update a single document in a collection
* `updateMany()` - Update multiple documents in a collection
* `findOneAndUpdate()` - Let's us find one and update it

``` js
tweets.updateOne({
    title: 'Vespa'
}, {
    $set: {
        sponsored: true
    }
}, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    client.close();
});
```

For `findOneAndUpdate()` , if we want to have our updated document returned to us in the callback, we have to set an option of `{returnOriginal: false}` as the third argument.

``` js
    tweets.findOneAndUpdate({
        title: 'Vespa'
    }, {
        $set: {
            sponsored: false
        }
    }, {
        returnOriginal: false
    }, (err, doc) => {
        assert.equal(err, null);
        console.log(doc);
        client.close();
    });
```

We'll see the console.logged tweet will have the value of sponsored updated to true. Without `{returnOriginal: false}` we would get the original unaltered tweet back.

### Intermediate

We can count how many tweets we have with likes greater than 20

``` js
    tweets.countDocuments({
        likes: {
            $gte: 20
        }
    }, (err, count) => {
        assert.equal(err, null);
        console.log(count);
        client.close();
    });
```

We can check out all the things we can do at the [Node.js MongoDB Driver API](http://mongodb.github.io/node-mongodb-native/3.6/api/)

### Chaining

Do a search, and project the title, body, likes fields, limit the number of returned queries to 2, sort them by title

``` js
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
```
