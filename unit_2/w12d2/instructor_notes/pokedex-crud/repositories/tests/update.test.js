const pokemonRepo = require('../pokemonRepository');
const { expect } = require('chai');
const db = require('../../db');

describe('poekmonRepo.update', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should update a pokemon by its id', async () => {
        const pokemonUpdated = await pokemonRepo.update('002', {
            name: 'Bananamon',
        });
        expect(pokemonUpdated).to.equal(1);
        const bananamon = await pokemonRepo.getOne({ name: 'Bananamon' });
        expect(bananamon.id).to.equal('002');
        expect(bananamon.name).to.equal('Bananamon');
        // expect(bananamon).to.deep.equal({
        //     id:
        //     name: 'Bananamon'
        // })
    });

});