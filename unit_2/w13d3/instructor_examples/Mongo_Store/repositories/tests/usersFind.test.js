const usersRepository = require('../usersRepository');
const { expect } = require('chai');
const db = require('../../db');

describe('usersRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });
    afterAll(db.disconnect);

    it('should return the right user object when we query existing username in DB', (done) => {
        usersRepository.find('123')
            .then(result => {
                expect(result.username).to.equal('123');
                done();
            });
    });

    it('should throw an error when we query username which doesnt exist in DB', (done) => {
        usersRepository.find('1234')
            .catch(err => {
                expect(err).to.be.ok;
                expect(err.message).to.equal('1234 doesn\'t exist');
                done();
            });
    });
});