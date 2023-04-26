const {expect} = require('chai')
const monsterRepository = require('../monsterRepository')
const db = require('../../db')

describe('monsterRepository.updateStock',() => {
    beforeAll(async () => {
        await db.connect()
    })
    afterAll (async () => {
        await db.disconnect();
    })
    it('should - 1 qty of the amount stated in the data searched by name', async () => {
        const result = await monsterRepository.updateStock('Gajau', 1 );
        expect(result.result.n).to.equal(1);
    })
    it('should return an error if monster does not exist', async()=> {
        try{
            await monsterRepository.updateStock('iceCream');
        } catch(err) {
            expect(err.message).to.equal('I cannot read your numbers')
        }
    })
});