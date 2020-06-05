const monsterRepository = require('./repositories/monsterRepository')

module.exports = {
    async indexPage (req, res) {
        const monsters = await monsterRepository.findAll();
        res.render('index.ejs',{monsters:monsters})
    }
    
}