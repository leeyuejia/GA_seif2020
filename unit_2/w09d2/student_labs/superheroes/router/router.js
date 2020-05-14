const { indexPage, showPage } = require("../controller/controller.js")

module.exports = (app) => {
    app.get("/superheroes", indexPage)
    app.get("/superheroes/:id", showPage)
}