const db = require('../db');

module.exports = {
    getAll () {
        return db.shop.find()
            .toArray();
    },
<<<<<<< HEAD
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
=======
    async getOneByName (name) {
        const foundItem = await db.shop.findOne(
            {
                name: {
                    '$regex' : `^${name}$`,
                    '$options' : 'i'
                }
            }
        );
        if (!foundItem) throw new Error(`Item with name '${name}' does not exist`);
        return foundItem;
>>>>>>> 0d079a0ba9a49c1a971c6e2677729a94c92a19dc
    }
};