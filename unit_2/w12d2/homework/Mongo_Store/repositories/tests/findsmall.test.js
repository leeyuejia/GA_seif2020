const { expect } = require('chai')
const monsterRepository = require('../monsterRepository')
const db = require('../../db')

describe('monsterRepository.findsmall()', () => {
    beforeAll(async () => {
        await db.connect()
    })
    afterAll(async () => {
        await db.disconnect();
    })
    it('should return an array of objects filtered by {type:"small"}', async () => {
        const result = await monsterRepository.findSmall({'type':'small'})
        expect(result).to.be.an('array')
    });
    it('should throw an error if the search is not found', async() => {
        try {
            await monsterRepository.findSmall({type:'icecream'})
        } catch(err) {
            expect(err.message).to.equal('there is no such type')
        }
    })
})