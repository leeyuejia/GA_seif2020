const { expect } = require('chai');
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should return insertedCount when insert a new object into db collection', async () => {
        const result = await shopRepository.create({
            'name': 'Cup cakes',
            'description': 'A delicious cup cake made a handsome man',
            'img': 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg',
            'price': 200,
            'qty': 100
        });
        expect(result).to.be.true;
        const item = await shopRepository.show('Cup cakes');
        expect(item.name).to.equal('Cup cakes');
    });
});