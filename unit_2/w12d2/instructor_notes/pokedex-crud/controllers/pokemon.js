const pokemonRepository = require('../repositories/pokemonRepository');

module.exports = {
    async getAll (req, res) {
        const pokemon = await pokemonRepository.getAll();
        res.render('pokedex', { data: pokemon });
    },
    create (req, res) {
        res.render('new');
    },
    async getOne (req, res) {
        try {
            const pokemon = await pokemonRepository.getOne(req.body);
            res.render('show', { data: { stats: [], type: [] } });
        } catch (err) {
            res.send('err happened: ', err.message);
        }
    },
};