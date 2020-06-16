const db = require('../db');
const bcrypt = require('bcrypt')
const SALT_ROUND = process.env.SALT_ROUND || 10;

module.exports = {
    async create (user) {
        try {
            console.log(user + 'users')
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(SALT_ROUND)) // bcrypt the password 
            const result = await db.users.insertOne(user);
            console.log(result.insertedCount)
            if (!result.insertedCount) throw new Error('insertion failure');
            return result.insertedCount;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item`);
        }
    },
    async find(username) {
        const user = db.users.findOne({username: username});
        if(!user) throw new Error(`the user ${username} canot be found`);
        return user
    }
};