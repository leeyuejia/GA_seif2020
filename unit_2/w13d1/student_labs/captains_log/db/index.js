require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URL || 'mongodb://localhost:27017'
const client = new MongoClient(url, {useNewUrlParser:true, useUnifiedTopology:true});
const DB_NAME = 'lab'


module.exports = {
    async connect() {
        const connection = await client.connect();
        console.log('it is connected to ' + url)
        this.logs = connection.db(DB_NAME).collection('captainLogs')
    },
    disconnect() {
        return client.close();
    }
}
