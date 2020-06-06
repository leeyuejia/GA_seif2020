const db = require('../db');

module.exports = {
    getAll () {
        return db.shop.find()
            .toArray();
    }
};