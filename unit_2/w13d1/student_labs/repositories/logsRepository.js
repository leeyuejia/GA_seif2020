const db = require('../db');

module.exports = {
    create (data) {
        return db.logs.insertOne(data);
    },
    getAll () {
        return db.logs.find().toArray();
    }
};