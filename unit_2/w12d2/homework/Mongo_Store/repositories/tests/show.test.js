const {expect} = require('chai')
const monsterRepository = require('../monsterRepository')
const db = require('../../db')

describe('monsterRepository.show',() => {
    beforeAll(async () => {
        await db.connect()
    })
    afterAll (async () => {
        await db.disconnect();
    })
    it('should return that monster\s data which the monster name is "Kestodon"', async () => {
        const result = await monsterRepository.show('Kestodon');
        expect(result).to.be.an('object');
        expect(result.name).to.equal('Kestodon');
    })
    it ('shoud return that monster\s data which the name is "Kestodon" irregardless of the case', async()=> {
        const result = await monsterRepository.show('kestodon');
        expect(result.name).to.equal('Kestodon'); 
    })
    it('should return an error if monster does not exist', async()=> {
        try{
            await monsterRepository.show('iceCream');
        } catch(err) {
            expect(err.message).to.equal('this monster does not exist')
        }
    })
});