const monsterRepository = require('../repositories/monsterRepository')

module.exports = {
    async indexPage (req, res) {
        const monsters = await monsterRepository.findSmall();
        res.render('index.ejs',{monsters:monsters})
    },
    async showPage (req, res) {
        try {
            const name = req.params.name
            const showMonster = await monsterRepository.show(name);
            res.render('show.ejs', {showMonster})
        } catch (err) {
            return res.render('errors/404', {err})
        }
    },
    async editPage (req,res) {
        try {
            const name = req.params.name
            const info = await monsterRepository.getOneByCaseInsensitivity(name);
            res.render('edit.ejs', {name, info})
        } catch(err) {
            return res.render('errors/404', {err})
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
            return res.render('errors/404', {err})
        }
    },
    async newPage (req,res) {
        try {
            const data = await monsterRepository.getOne();
            res.render('new.ejs', {data})
        } catch(err) {
            return res.render('errors/404', {err}) // later change to 404 page
        }
    },
    async postPage(req,res) {
        if(typeof req.body.price !== 'number'){
            req.body.price = parseInt(req.body.price)
            }
        if(typeof req.body.qty !== 'number') {
            req.body.qty = parseInt(req.body.qty)
            };
            req.body.type = 'small'
        try{
            console.log(req.body)
            await monsterRepository.create(req.body)
            res.redirect('/monster')
        } catch(err) {
            return res.render('errors/404', {err})
        }
    },
    async buyPage (req,res) {
            console.log(req.params.name + ' req.params.name')
            if (typeof req.body.qty !== 'number') {
                req.body.qty = parseInt(req.body.qty)
                };
            name = req.params.name
            amount = req.body.qty
            console.log(name + ' and ' + amount + ' req.body.qty')
        try{
            await monsterRepository.updateStock(name, amount)
            res.redirect('/monster')
        } catch(err) {
            return res.render('errors/404', {err})
        }
    },
    async deleteOne (req,res) {
        let name = req.params.name
        console.log(req.params.name)
        try {
            await monsterRepository.deleteOne(name)
            res.redirect('/')
        } catch(err) {
            return res.render('errors/404',{err})
        }
    }
    
    // async create (req, res) {
    //     try {
    //         const item = await monsterRepository.create(req.body);
    //         return res.send(req.body);
    //     } catch(err) {
    //         return res.send(err.message)
    //     }
    // }
}