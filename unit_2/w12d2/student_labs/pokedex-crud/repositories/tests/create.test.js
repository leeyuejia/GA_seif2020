const pokemonRepository = require('../pokemonRepository'); // to connect to mongo with data alread in it. 
const db = require('../../db');
const {expect} = require('chai');

describe('pokemonRepository.create', () => {
    beforeAll (async () => {
        await db.connect();
    })
    afterAll (async() => {
        await db.disconnect();
    })

    it ('should be able to create a pokemon and return it', async() => {
        const newPokemon = await pokemonRepository.create({
            name:'bananamon',
        });
        expect(newPokemon.name).to.equal('bananamon')
    })
})
