const {monsterController} = require('./controller');
const monsterRepository = require('./repositories/monsterRepository')

module.exports = (app) => {
    app.get('/', (req,res) => res.redirect('./monster'));
    app.get('/monster', monsterController.indexPage); // homepage
    app.get('/monster/new', monsterController.newPage) // new item
    app.get("/monster/:id", monsterController.showPage) // show individual item
    app.get('/monster/:id/edit', monsterController.editPage) // edit an item
    app.post("/monster", monsterController.postPage) // add an item and direct to homepage
    app.put('/monster/:id', monsterController.putPage) // after edited an item
    app.delete('/monster/:id', monsterController.deletePage) //delete an item
}