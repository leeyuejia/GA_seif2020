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
    }
}

