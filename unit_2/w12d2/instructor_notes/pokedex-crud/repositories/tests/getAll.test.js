const pokemonRepository = require('../pokemonRepository');
const db = require('../../db');
const { expect } = require('chai');

describe('pokemonRepository.getAll', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });
    
    it('should be able to retrieve an array', async () => {
        const pokemon = await pokemonRepository.getAll();
        expect(pokemon).to.be.an('array').with.lengthOf(151);
    });
});