module.exports = {
    getAll (req, res) {
        res.render('pokedex', { data: [] });
    },
};