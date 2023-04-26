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
////// find any one monster to render the keys in newpage (test passed)
    async getOne() {
        const result = await db.monsters.findOne();
        if (!result) throw new Error('Cannot find any data in database')
        return result;
    },
////// Create a new monster and redirect to index page with new monster(test passed)
    async create(item) {
        try{
            const result = await db.monsters.insertOne(item);
            console.log(result.insertedCount)
            return result;
        } catch(err) {
            throw new Error(`You are not suppose to insert this item ${JSON.stringify(item)}`)
        }
    },
    async updateStock(name, amount) {
        try{
            const result = await db.monsters.updateOne({
                name: {
                    '$regex': `^${name}$`,
                    '$options': 'i'
                    }
                },{
                    $inc: {qty: - amount}
                })
            if (!result.result.n) {
                    throw new Error(`there is an error in your numbers`)
                }
                return result;
        }catch(err) {
            throw new Error('I cannot read your numbers')
        }
    },
////// Search by name and delete the data. 
    async deleteOne (name) {
        try{
            const result = await db.monsters.deleteOne({
                name
            })
            if (!result.result.n) {
                throw new Error ('Something went wrong in your delete')
            }
            return result
        } catch(err) {
            throw new Error('unable to delete')
        }
    }
}

