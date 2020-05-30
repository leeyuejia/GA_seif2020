const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'lab';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

module.exports = async (err) => {
    assert.equal(null, err);
    // Use connect method to connect to the Server
    const database = {};
    const cl = await client.connect();
    const db = cl.db(dbName);
    database.pokedex = db.collection('pokedex');

    // await db.collection('pokemon').insertMany(pokemon);
    return database;
};
