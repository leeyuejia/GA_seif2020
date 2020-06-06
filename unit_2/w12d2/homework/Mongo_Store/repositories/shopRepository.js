const db = require('../db');

module.exports = {
    getAll () {
        return db.shop.find()
            .toArray();
    },
    async show (name) {
        const item = await db.shop.findOne({ name:{ '$regex' : `^${name}$`, '$options' : 'i' } });
        if(!item) throw new Error('Non-existance'); 
        return item;
    },
    async create (item) {
        try {
            const result = await db.shop.insertOne(item);
            return result;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    }
};