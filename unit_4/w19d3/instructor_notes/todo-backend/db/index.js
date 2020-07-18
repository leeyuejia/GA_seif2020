const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const DB_NAME = 'lab';
const COLLECTION_NAME = 'tasks';
const LOCAL_URL = 'mongodb://localhost:27017';

let client, server;

const isNodeEnv = env => process.env.NODE_ENV === env;
const getServerUrl = async () => {
    if (isNodeEnv('test')) {
        server = new MongoMemoryServer();
        return await server.getUri();
    }
    return LOCAL_URL;
};

module.exports = {
    async connect () {
        client = new MongoClient(await getServerUrl(), { useUnifiedTopology: true });
        const connection = await client.connect();
        console.log('Connected to Mongo');
        const db = connection.db(DB_NAME);
        this[COLLECTION_NAME] = db.collection(COLLECTION_NAME);
    },
    disconnect () {
        return isNodeEnv('test')
            ? server.stop()
            : client.close();
    },
};
