const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const pokemon = require('./pokemon');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'lab';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

module.exports = async () => {
    // Use connect method to connect to the Server
    const database = {};
    const cl = await client.connect();
    const db = await cl.db(dbName);
    database['employees'] = db.collection('employees');
    database['pokemon'] = db.collection('pokemon');

    // await db.collection('pokemon').insertMany(pokemon);
    return database;
};
