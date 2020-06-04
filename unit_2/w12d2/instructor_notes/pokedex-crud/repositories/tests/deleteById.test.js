const pokemonRepository = require('../pokemonRepository');
const db = require('../../db');
const { expect } = require('chai');

describe('pokemonRepository.deleteById', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should delete by id', async () => {
        const pokemonUpdated = await pokemonRepository.delete('010');
        expect(pokemonUpdated).to.equal(1);
    });

    it('should throw an error if the delete was not successful', (done) => {
        pokemonRepository.delete('999')
            .catch(err => {
                expect(err.message).to.equal('Pokemon with id 999 does not exist!');
                done();
            });
    });
});