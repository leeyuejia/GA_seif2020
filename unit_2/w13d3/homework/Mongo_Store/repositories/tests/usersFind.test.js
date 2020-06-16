const { expect } = require('chai');
const usersRepository = require('../usersRepository');
const db = require('../../db');

describe('usersRepository.find', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should return user object if the user is in db collection', async () => {
        const result = await usersRepository.find('Cup cakes');
        expect(result.username).to.equal('Cup cakes');
    });

    it('should return throw an error if the user is not in db collection', async () => {
        try {
            await usersRepository.find('James Bond');
        } catch (err) {
            expect(err).to.be.ok;
        }
    });
});