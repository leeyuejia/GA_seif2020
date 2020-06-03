module.exports = {
    getAll (req, res) {
        res.render('pokedex', { data: [] });
    },
    create (req, res) {
        res.render('new');
    },
    getOne (req, res) {
        res.render('show', { data: { stats: [], type: [] } });
    },
};