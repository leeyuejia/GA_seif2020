const { index, init, show, create } = require('./controller');

module.exports = (app) => {
    // Index
    app.get('/budgets', index);

    // new - need to show a form
    app.get('/budgets/new', init);

    // show
    // remeber :index acts as a 'catchall for any url'
    app.get('/budgets/:index', show);

    // create - actually create a new item
    app.post('/budgets', create);
};