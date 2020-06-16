const { expect } = require('chai');
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.update', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return result when update the existing shop item', async () => {
        const result = await shopRepository.updateByName('Bones', {
            'name': 'Cup cakes',
            'description': 'A delicious cup cake made by a handsome man',
            'img': 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg',
            'price': 100,
            'qty': 100
        });
        expect(result).to.be.true;
    });

    it('should return error when update the non-existing shop item', async () => {
        try {
            const result = await shopRepository.updateByName('Monster', {
                'name': 'Cup cakes',
                'description': 'A delicious cup cake made by a handsome man',
                'img': 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg',
                'price': 100,
                'qty': 100
            });
            expect(result).to.be.false;
        } catch (err) {
            expect(err.message).to.be.an('string');
        }
    });
});