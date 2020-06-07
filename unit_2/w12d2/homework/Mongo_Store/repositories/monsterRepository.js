const db = require('../db')

module.exports = {
////// for indexpage (test passed)
    async findSmall() {
        try{
           return db.monsters.find({type:'small'}).toArray();
        } catch(err) {
            throw new Error('there is no such type')
        }  
    },
////// for show one monster (test passed)
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
////// for editing and updating monster (test passed)
    async edit(name, infoToUpdate) {
        try {
            const result = await db.monsters.updateOne({
                name: {
                    '$regex': `^${name}$`,
                    '$options': 'i'
                }
            }, { $set: infoToUpdate }
            );
            if (!result.result.n) {
                throw new Error(`this error`)
            }
            return result;
        } catch (err) {
            throw new Error(`Due to this ${err.message}, I cannot edit this ${JSON.stringify(infoToUpdate)}`)
        }
    },
    // async getOne(options) {
    //     const oneMonster = await db.monsters.findOne(options)
    //     return oneMonster
    // },

////// to get one monster to render in edit page and update that monster (test passed)
    async getOneByCaseInsensitivity (options) {
        const found = await db.monsters.findOne(
            {
                name:{
                    '$regex': `${options}$`,
                    '$options' : 'i'
                }
            }
        );
        if(!found) throw new Error(`this monster does not exist`)
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

