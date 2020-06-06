const monsterRepository = require('../repositories/monsterRepository')

module.exports = {
    async indexPage (req, res) {
        const monsters = await monsterRepository.findSmall();
        res.render('index.ejs',{monsters:monsters})
    },
    async create (req, res) {
        try {
            const item = await monsterRepository.create(req.body);
            return res.send(req.body);
        } catch(err) {
            return res.send(err.message)
        }
    },
    async showPage (req, res) {
        try {
            const id = req.params.id
            const oneMonsters = await monsterRepository.getOne();
            res.send('my id is ' + id + ' and monster is ' + oneMonsters)
        } catch (err){
            
        }
    }


}