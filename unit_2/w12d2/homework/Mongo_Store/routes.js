const {monsterController} = require('./controller');


module.exports = (app) => {
    app.get('/', (req,res) => res.redirect('./monster'));
    app.get('/monster', monsterController.indexPage); // homepage
    app.get('/monster/new', monsterController.newPage) // new item
    app.get("/monster/:name", monsterController.showPage) // show individual item
    app.get('/monster/:name/edit', monsterController.editPage) // edit an item
    app.post("/monster", monsterController.postPage) // add an item and direct to homepage
    app.put('/monster/:name/buy', monsterController.buyPage) // buy and minus a monster
    app.put('/monster/:name', monsterController.putPage) // after edited an item
    app.delete('/monster/:name', monsterController.deleteOne) //delete an item
}