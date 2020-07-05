// const marsMissions = require('models/marsMissions.js')
const {displayNames, showPage} = require('./controller.js');

module.exports = (app) => {
    app.get("/index", displayNames)
    app.get("/index/:id", showPage)
}
