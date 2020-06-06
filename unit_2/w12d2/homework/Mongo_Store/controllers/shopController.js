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
        } catch (err) {
            return res.send(err.message);
        }
    },
    async create (req, res) {
        try {
            const item = {
                'name': req.body.name,
                'description': req.body.description,
                'img': req.body.img,
                'price': parseInt(req.body.price),
                'qty': parseInt(req.body.qty)
            };
            await shopRepository.create(item);
            return res.send(item);
        } catch (err) {
            return res.send(err.message);
        }
    },
    async getOneByName (req, res) {
        try {
            const item = await shopRepository.getOneByName(req.params.name);
            res.render('shop/show', { item });
        } catch (err) {
            res.render('errors/404', { err });
        }
    },
    async update (req, res) {
        try {
            const item = {
                'name': req.body.name,
                'description': req.body.description,
                'img': req.body.img,
                'price': parseInt(req.body.price),
                'qty': parseInt(req.body.qty)
            };
            await shopRepository.updateByName(req.params.name, item);
            return res.send(item);
        } catch (err) {
            res.render('errors/404', { err });
        }
    }
};