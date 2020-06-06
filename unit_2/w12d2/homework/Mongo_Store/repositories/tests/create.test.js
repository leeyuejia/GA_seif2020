const {expect} = require('chai')
const monsterRepository = require('../monsterRepository')
const db = require('../../db')

describe('monsterRepository.create',() => {
    beforeAll(async () => {
        await db.connect()
    })
    afterAll (async () => {
        await db.disconnect();
    })
    it ('should return insertedCount when insert a new obj into db collection', async () => {
        const result = await monsterRepository.create({
            'name': 'cup cakes',
            'description' : 'cakes cakes cakes',
            'img': 'http://blablabal',
            'price': 100,
            'qty':3
        })
        expect(result.insertedCount).to.equal(1)
    })
})