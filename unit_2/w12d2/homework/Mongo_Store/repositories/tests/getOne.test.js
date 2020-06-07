const {expect} = require('chai')
const monsterRepository = require('../monsterRepository')
const db = require('../../db')

describe('monsterRepository.getOne',() => {
    beforeAll(async () => {
        await db.connect()
    })
    afterAll (async () => {
        await db.disconnect();
    })
    it('should return 1 object with all keys intact', async () => {
        try {
            const result = await monsterRepository.getOne();
            console.log(result)
            expect(result).to.be.an('object')
        } catch (err) {
            expect(err.message).to.equal('Cannot find any data in database')
        }
    })
});