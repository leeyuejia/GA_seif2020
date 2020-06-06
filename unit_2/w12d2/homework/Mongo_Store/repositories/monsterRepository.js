const db = require('../db')

module.exports = {
    findSmall() {
        return db.monsters.find({type:'small'}).toArray()
    },
    async getOne(options) {
        const oneMonster = await db.monsters.findOne(options)
        return oneMonster
    },
    async getOneByCaseInsensitivity (options) {
        const found = await db.monsters.findOne(
            {
                name:{
                    '$regex': `${options}$`,
                    '$options' : 'i'
                }
            }
        );
        if(!found) throw new Error(`pet with the name ${found} does not exists`)
        return found
    },
    async create(item) {
        try{
            const result = await db.monsters.insertOne(item);
            console.log(result.insertedCount)
            return result;
        } catch(err) {
            throw new Error(`You are not suppose to insert this item ${JSON.stringify(item)}`)
        }
    }
}

