const db = require('../db');

module.exports = {
    getAll() {
        return db.shop.find()
            .toArray();
    },
<<<<<<< HEAD
    async show(name) {
=======
    async show (name) {
>>>>>>> a43a82e6bfc169091245bdb10a60e2e43e8ce131
        const item = await db.shop.findOne({ name: { '$regex': `^${name}$`, '$options': 'i' } });
        if (!item) throw new Error('Non-existance');
        return item;
    },
    async create(item) {
        try {
            return await db.shop.insertOne(item);
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    async getOneByName(name) {
        const foundItem = await db.shop.findOne(
            {
                name: {
                    '$regex': `^${name}$`,
                    '$options': 'i'
                }
            }
        );
        if (!foundItem) throw new Error(`Item with name '${name}' does not exist`);
        return foundItem;
    },
<<<<<<< HEAD
    async updateByName(name, item) {
        try {
            const result = await db.shop.updateOne({ name },
                {
                    $set:
                        { item }
                }
            )
            console.log(result)
        } catch (err) {
            throw 
=======
    async updateByName (name, item) {
        try {
            const result = await db.shop.updateOne({
                name: {
                    '$regex': `^${name}$`,
                    '$options': 'i'
                }
            }, {
                $set: item
            });
            if(!result.result.n) {
                throw new Error(`This item with name ${name} doesn\'t exists`);
            }
            return result;
        } catch (err) {
            throw new Error(`Due to ${err.message}, I cannot update it with ${JSON.stringify(item)}`);
>>>>>>> a43a82e6bfc169091245bdb10a60e2e43e8ce131
        }
    }
};