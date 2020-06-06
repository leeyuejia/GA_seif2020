const shopRepository = require('../repositories/shopRepository');

module.exports = {
    async getAll (req, res) {
        const items = await shopRepository.getAll();
        res.render('shop/index', { items });
    },
    async show (req, res) {
        try {
            const item = await shopRepository.show(req.params.name);
            return res.send(item);
        } catch(err) {
            return res.send(err.message);
        }
    },
    async create (req, res) {
        req.body.price = parseInt(req.body.price);
        req.body.qty = parseInt(req.body.qty);

        try {
            await shopRepository.create(req.body);
            return res.send(req.body);
        } catch(err) {
            return res.send(err.message);
        }
    }
};