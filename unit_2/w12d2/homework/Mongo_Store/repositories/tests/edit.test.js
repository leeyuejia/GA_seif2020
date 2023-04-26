const { expect } = require('chai')
const monsterRepository = require('../monsterRepository')
const db = require('../../db')

describe('monsterRepository.edit', () => {
    beforeAll(async () => {
        await db.connect()
    })
    afterAll(async () => {
        await db.disconnect();
    })
    it('should return edited result.result.n is 1', async () => {
        const result = await monsterRepository.edit('Kestodon', {
            'qty': 1
        })
        console.log(result.result)
        expect(result.result.n).to.equal(1);
    })

    it('should return error message in string', async () => {
        try {
            const result = await monsterRepository.edit('iceCream', {
                'qty': 1
            })
            expect(result.require.n).to.equal(1);
        } catch (err) {
            expect(err.message).to.be.an('string')
        }
    })
})