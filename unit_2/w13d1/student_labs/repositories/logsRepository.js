const db = require('../db');

module.exports = {
    create (data) {
        data.date = new Date(data.date);
        return db.logs.insertOne(data);
    },
    getAll () {
        return db.logs.find().toArray();
    }
};