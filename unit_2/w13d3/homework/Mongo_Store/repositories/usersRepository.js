const db = require('../db');
const bcrypt = require('bcrypt');
const SALT_ROUND = process.env.SALT_ROUND || 10;

module.exports = {
    async create (user) {
        try {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(SALT_ROUND));
            const { insertedCount } = await db.users.insertOne(user);
            if (!insertedCount) throw new Error('insertion failure');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(user)}`);
        }
    },
    async find (username) {
        const user = await db.users.findOne({ username: username });
        if(!user) throw new Error(`The user ${username} is not in our DB`);
        return user;
    }
};