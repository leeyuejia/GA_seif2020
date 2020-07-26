const { connect } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGO_URL || 'mongodb://localhost:27017'
const DB_NAME = 'animalshelter'
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology:true})
const COLLECTION = {
    animals: 'animals'
}

module.exports = {
    async connect() {
        const connection = await client.connect();
        console.log('connected to url: ' + url);
        const db = connection.db(DB_NAME);
        this.animals = db.collection(COLLECTION.animals);
    },
    disconnect () {
        console.log('connection closed')
        return client.close();
    }
}