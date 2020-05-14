const marsMissions = require('./models/marsMissions.js')

// let missionName = []
// marsMissions.forEach(el => missionName.push(el.name))

const displayNames = (req,res) => {
    res.render("index.ejs",{
        data: marsMissions
    })
}

const showPage = (req,res) => {
    res.render("show.ejs", {
        data: marsMissions,
        itemID : req.params.id
    })
}

module.exports = {
    displayNames,
    showPage
};