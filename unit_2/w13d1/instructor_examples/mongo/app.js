/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'learn';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(async (err) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const collection = client.db(dbName).collection('orders');

    try {
        const result = await collection.insertOne({ 
            lineItems1: [{ 
                title: 'hamburger', price: 10, purchased: true
            }],
        });
        assert.equal(result.insertedCount, 1);
    } catch (err) {
        // assert.equal(null, err);
        console.log(err.message);
    } finally {
        client.close();
    }
});

