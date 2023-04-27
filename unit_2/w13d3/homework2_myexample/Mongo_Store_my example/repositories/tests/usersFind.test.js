const { expect } = require('chai')
const userRepository = require('../usersRepository')
const db = require('../../db')

describe('userRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should retun user object', async () => {
        const result = await userRepository.find('Cup cakes');
        expect(result.username).to.equal('Cup cakes');
    })

    it('should throw err if user is not in database', async () => {
        try {
            const result = await userRepository.find('james bond');
        } catch(err) {
            expect(err.message).to.be.ok
        }
    })

})
