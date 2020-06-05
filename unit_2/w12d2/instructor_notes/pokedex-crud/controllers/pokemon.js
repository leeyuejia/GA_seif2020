const pokemonRepository = require('../repositories/pokemonRepository');

module.exports = {
    async getAll (req, res) {
        const pokemon = await pokemonRepository.getAll();
        res.render('pokedex', { data: pokemon });
    },
    create (req, res) {
        res.render('new');
    },
    getOne (req, res) {
        res.render('show', { data: { stats: [], type: [] } });
    },
};