const { expect } = require('chai');
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.show', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should return one object shop item, and the first item should have the name "Beans"', async () => {
        const item = await shopRepository.show('Beans');
        expect(item).to.be.an('object');
        expect(item.name).to.equal('Beans');
    });

    it('should return one shop item for query name "beans" ignoring case', async () => {
        const item = await shopRepository.show('beans');
        expect(item.name).to.equal('Beans');
    });

    it('should return an error if I am searching for Monster which doesn\'t exist',  async () => {
        try {
            await shopRepository.show('Monster');
        } catch(err) {
            expect(err.message).to.equal('Non-existance'); 
        }
    });
});