// ==================== SETUP ====================
// packages
const express = require('express'),
    methodOverride = require('method-override'),
    app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'lab';
    
// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    require('./routes')(app, client.db(dbName));

    // ==================== LISTENER ====================
    app.listen(3000, () => {
        console.log('Gotta catch em all on port 3000');
        // setTimeout(() => {
        //     process.exit(1);
        // }, 3000);
    });
});

process.on('exit', function (code) {
    client.close();
    console.log(`About to exit with code ${code}`);
});