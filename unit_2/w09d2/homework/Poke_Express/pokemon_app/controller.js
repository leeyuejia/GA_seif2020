const pokemon = require('./models/pokemon.js')

const indexPage = (req,res) => {
    res.render("index.ejs",{
        data:pokemon
    })
}

const showPage = (req,res)=> {
    res.render("show.ejs", {
        data:pokemon,
        itemID : req.params.id
    })
}

module.exports = {
    indexPage,
    showPage
}