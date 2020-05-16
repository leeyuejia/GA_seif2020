const bakedGoods = require('./models/bakedgoods.js');

module.exports = {
    index: (req, res) => {
        res.render('index.ejs', { bakedGoods });
    },
    init: (req, res) => {
        res.render('new.ejs');
    },
    show: (req, res) => {
        res.render('show.ejs', { bakedGood: bakedGoods[req.params.id] });
    },
    create: (req, res) => {
        if (!req.body.price) {
            req.body.price = 0;
        }
        bakedGoods.push(req.body);
        res.redirect('/bakedgoods');
    }
};