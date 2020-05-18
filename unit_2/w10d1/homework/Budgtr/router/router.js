const {indexPage, showPage, newPage, postPage} = require('../controller/controller');

module.exports= (app) => {
    app.get('/budgets', indexPage)
    app.get("/budgets/new", newPage )
    app.get('/budgets/:index', showPage)
    app.post('/budgets', postPage)
};