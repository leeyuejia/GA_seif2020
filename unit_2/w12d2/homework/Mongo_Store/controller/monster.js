const monsterRepository = require('../repositories/monsterRepository')

module.exports = {
    async indexPage (req, res) {
        const monsters = await monsterRepository.findSmall();
        res.render('index.ejs',{monsters:monsters})
    },
    create (req, res) {
        res.render('new.ejs');
    },
    async showPage (req, res) {
        id = req.params.id
        const oneMonsters = await monsterRepository.getOne();
        res.send('my id is ' + id + ' and monster is ' + oneMonsters)
    }


}