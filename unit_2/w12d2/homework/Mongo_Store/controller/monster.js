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
            const name = req.params.name
            const showMonster = await monsterRepository.show(name);
            res.render('show.ejs', {showMonster})
        } catch (err) {
            return res.send(err.message)
        }
    },
    async editPage (req,res) {
        try {
            const name = req.params.name
            const info = await monsterRepository.getOneByCaseInsensitivity(name);
            res.render('edit.ejs', {name, info})
        } catch(err) {
            return res.send(err.message)
        }
    },
    async putPage (req, res) {
        try {
            const name = req.params.name
            const info = {
                'description': req.body.description,
                'img': req.body.img,
                'price': parseInt(req.body.price),
                'qty': parseInt(req.body.qty)
            }
            await monsterRepository.edit(name, info)
            res.redirect(`/monster/${name}`)
        } catch(err) {
            res.send(err.message)
        }
    }


}