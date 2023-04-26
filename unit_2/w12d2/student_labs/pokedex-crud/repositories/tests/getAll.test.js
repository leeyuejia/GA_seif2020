const pokemonRepository = require('../pokemonRepository');
// const chaiHttp = require('chai-http');
// const server = require('../../server');
const db = require('../../db'); // connection to mongo
const {expect} = require('chai');

describe('pokemonRespository.getAll', () => {
    beforeAll(async () => {
        await db.connect(); // connect to db
    });

    afterAll( async() => {
        await db.disconnect(); // after test disconnect db
    });

    it('should just return an array', async () => { // "it" will be the test
        const pokemon = await pokemonRepository.getAll();
        expect(pokemon).to.be.an('array').with.lengthOf(151)
    });
})