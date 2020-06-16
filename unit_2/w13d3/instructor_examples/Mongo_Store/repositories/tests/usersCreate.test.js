const usersRepository = require('../usersRepository');
const { expect } = require('chai');
const db = require('../../db');

describe('usersRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });
    afterAll(db.disconnect);

    it('should throw an error if I send in number for password field', (done) => {
        usersRepository.create({ 
            username: '123', 
            password: 1232, 
            createdAt: '20200621T20:00:00Z', 
            updatedAt: '20200621T20:00:00Z' 
        })
            .catch(err => {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Document failed validation');
                done();
            });
    });

    it('should be successful if I create a user record with all 4 required string fields', (done) => {
        usersRepository.create({ 
            username: '123', 
            password: '1232', 
            createdAt: '20200621T20:00:00Z', 
            updatedAt: '20200621T20:00:00Z' 
        })
            .then(result => {
                expect(result.insertedCount).to.equal(1);
                done();
            });
    });
});