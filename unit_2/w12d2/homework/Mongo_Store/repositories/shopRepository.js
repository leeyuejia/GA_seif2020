const db = require('../db');

module.exports = {
    getAll () {
        return db.shop.find()
            .toArray();
    },
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
    }
};