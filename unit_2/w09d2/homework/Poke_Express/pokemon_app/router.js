const { indexPage, showPage } = require("./controller")

module.exports = (app) => {
    app.get("/pokemon", indexPage)
    app.get("/pokemon/:id", showPage)
}
