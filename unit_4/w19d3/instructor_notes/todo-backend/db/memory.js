const { MongoClient }= require ('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const DB_NAME = 'lab';
const COLLECTION_NAME = 'tasks';

let server;

module.exports = {
    async connect () {
        server = new MongoMemoryServer();
        const serverUrl = await server.getUri();
        const client = new MongoClient(serverUrl, { useUnifiedTopology: true });
        const connection = await client.connect();
        console.log('Connected to Mongo');
        const db = connection.db(DB_NAME);
        this[COLLECTION_NAME] = db.collection(COLLECTION_NAME);
    },
    disconnect () {
        return server.stop();
    },
};
