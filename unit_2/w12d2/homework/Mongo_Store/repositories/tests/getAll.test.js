const { expect } = require('chai');

const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.getAll', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });
    
    it('should return an array', async () => {
        const shopItems = await shopRepository.getAll();
        expect(shopItems).to.be.an('array');
    });

    it('should return an array of shop items, and the first item should have the name "Beans"', async () => {
        const shopItems = await shopRepository.getAll();
        const beans = shopItems[0];
        expect(beans.name).to.equal('Beans');
    });

    it('should return all 3 items',  async () => {
        const shopItems = await shopRepository.getAll();
        expect(shopItems.length).to.equal(3);
    });
});