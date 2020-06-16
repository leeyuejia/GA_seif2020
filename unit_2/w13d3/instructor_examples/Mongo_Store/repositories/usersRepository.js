const db = require('../db');

module.exports = {
    create (data) {
        return db.users.insertOne(data);
    },
    async find (username) {
        const result = await db.users.findOne({ username: username });
        if(!result) throw new Error(`${username} doesn't exist`);
        return result;
    }
};