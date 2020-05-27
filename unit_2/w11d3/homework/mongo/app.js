/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const vampires = require('./models/seed_vampires');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'homework';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const Vampires = client.db(dbName).collection('Vampires');

    /**********************************************************************
    Write Your Code Below
    **********************************************************************/

});

