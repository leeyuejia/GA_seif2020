const { expect } = require('chai');
const usersRepository = require('../usersRepository');
const db = require('../../db');

describe('usersRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should return true when insert a new object into db collection', async () => {
        const result = await usersRepository.create({
            'username': 'Cup cakes',
            'password': '123232',
            'createdAt': new Date(),
            'updatedAt': new Date()
        });
        expect(result).to.be.true;
    });

    it('should return throw an error when insert a new object without username into db collection', async () => {
        try {
            await usersRepository.create({
                'password': '123232',
                'createdAt': new Date(),
                'updatedAt': new Date()
            });
        } catch (err) {
            expect(err).to.be.ok;
        }
    });

    it('should return throw an error when insert createdAt with string type into db collection', async () => {
        try {
            await usersRepository.create({
                'username': 'Cup cakes',
                'password': '123232',
                'createdAt': '2020-06-19T20:00:00Z',
                'updatedAt': new Date()
            });
        } catch (err) {
            expect(err).to.be.ok;
        }
    });
});