const {expect} = require('chai')
const monsterRepository = require('../monsterRepository')
const db = require('../../db')

describe('monsterRepository.deleteOne',() => {
    beforeAll(async () => {
        await db.connect()
    })
    afterAll (async () => {
        await db.disconnect();
    })
    it('should delete the searched name and return deleted count as 1', async () => {
        const result = await monsterRepository.deleteOne('Gajau');
        expect(result.result.n).to.equal(1);
    })
    it('should return an error if something is wrong with deleting', async()=> {
        try{
            await monsterRepository.deleteOne('iceCream');
        } catch(err) {
            expect(err.message).to.equal('unable to delete')
        }
    })
});