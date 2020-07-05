const {superheroes, villians} = require('../models/data.js')

const indexPage = (req,res)=> {
    res.render("index.ejs", {
        superheroes:superheroes
    })
}

const showPage = (req,res)=> {
    const id = parseInt(req.params.id)
    const villian = villians[id]
    const superhero = superheroes[id]
    res.render('show.ejs', {id,villian,superhero}
    )
}

module.exports= {
    indexPage,
    showPage
}