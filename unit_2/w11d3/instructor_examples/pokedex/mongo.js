const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const pokemon = require('./models/pokemon');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'lab';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const pokedex = client.db(dbName).collection('pokedex');

    pokedex.insertMany(pokemon, function (err, result) {
        assert.equal(null, err);
        assert.equal(pokemon.length, result.insertedCount);
  
        client.close();
    });
});
