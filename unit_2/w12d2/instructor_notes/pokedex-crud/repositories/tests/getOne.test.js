const pokemonRepository = require('../pokemonRepository');
const db = require('../../db');
const { expect } = require('chai');

describe('pokemonRepository.getOne', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return pokemon by options provided', async () => {
        const charmander = await pokemonRepository.getOne({ name: 'Charmander' });
        expect(charmander.name).to.equal('Charmander');
    });

    it('should throw an error if the result cannot be found', async () => {
        try {
            await pokemonRepository.getOne({ name: 'Big banana' });
        } catch (err) {
            expect(err.message).to.equal('That pokemon does not exist!');
        }

        // pokemonRepository.getOne({ name: 'Big banana' })
        //     .catch(err => {
        //         expect(err.message).to.equal('That pokemon does not exist!');
        //         done();
        //     });
    });
});