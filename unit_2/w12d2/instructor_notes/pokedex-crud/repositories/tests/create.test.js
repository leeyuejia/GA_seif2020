const pokemonRepository = require('../pokemonRepository');
const db = require('../../db');
const { expect } = require('chai');

describe('pokemonRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should be able to create a pokemon and return it', async () => {
        const newPokemon = await pokemonRepository.create({
            name: 'New Pokemon',
        });
        expect(newPokemon.name).to.equal('New Pokemon');
    });
});