const db = require('../db')

module.exports = {
    //for indexpage
    findSmall() {
        return db.monsters.find({type:'small'}).toArray()
    },
    // for show one monster
    async show (name) {
        const result = await db.monsters.findOne({
            name: {
                '$regex': `^${name}$`,
                '$options': 'i'
            }
        })
        if(!result) throw new Error('this monster does not exist');
        return result
    },
    // for editing and updating monster
    async edit(name, infoToUpdate) {
        try {
            const result = await db.monsters.updateOne({
                name: {
                    '$regex': `^${name}$`,
                    '$options': 'i'
                }
            }, { $set: {infoToUpdate} }
            );
            if (!result.result.n) {
                throw new Error(`this error`)
            }
            return result;
        } catch (err) {
            throw new Error(`Due to this ${err.message}, I cannot edit this ${JSON.stringify(infoToUpdate)}`)
        }
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

