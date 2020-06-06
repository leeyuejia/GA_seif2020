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
    it ('should return an id', async () => {
        const id = await monsterRepository.getOne({name: "Apceros"})
        expect (id.name).to.equal("Apceros")
    })
    it('should return the object, ignoring case sensitivity', async() => {
        const id = await monsterRepository.getOne({name: "Apceros"})
        expect (id.name).to.equal("Apceros")
    })

    it ('should show err if item is not found', async() => {
        try {
            const itemNotExist = await monsterRepository.getOneByCaseInsensitivity({name:'Apceros'})
            throw new Error ('its an bloody error')
        } catch (err) {
            expect(err.message).to.equal('that is an error')
        }
    })
})