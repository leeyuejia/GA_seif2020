const controller = require("../controller/controller.js")

module.exports = (app) => {
app.get("/pokemon", controller.indexPage)

app.get("/pokemon/new", controller.newPage)

app.get("/pokemon/:id", controller.showPage)

app.get("/pokemon/:id/edit", controller.editPage)

app.post("/pokemon", controller.postPage)

app.put("/pokemon/:id", controller.putPage)

app.delete("/pokemon/all", controller.deleteAll)

app.delete("/pokemon/:id", controller.deletePage)
}