const db = require('../db')

// console.log(typeof Date.now())
// console.log( typeof new Date())

module.exports = {
    async create(data) {
        try {
            console.log('inserting...')
            const result = await db.logs.insertOne(data);
            console.log(result.insertedCount)
            return result;
        } catch (err) {
            return (err.message)
        }
    },
    async findOneByTitle(title) {
        console.log('finding for' + title)
            const result = await db.logs.findOne({
                'title': title
                })
            if (!result) {
                throw new Error ('logs with such title does not exist')
                }
            return result;
        },
    async editlog(title, infoToUpdate) {
        console.log ('title is' + title)
        console.log('infotoupdate is' + infoToUpdate)
        try {
            console.log('updating')
            const result = await db.logs.updateOne({
                title: title
            }, {
                $set: infoToUpdate
            }
        )
            if (!result.result.n) {
                throw new Error ('can find but cannot update')
            }
            return result;
        } catch(err) {
            throw new Error(' I cannot update this')
        }
    }
}
