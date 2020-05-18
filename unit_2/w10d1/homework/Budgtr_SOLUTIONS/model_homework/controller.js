// 'Database'
const Budget = require('./models/budget.js');

module.exports = {
    index: (req, res) => {
        let sum = 0;
        for (let budgetItem of Budget) {
            sum += Number(budgetItem.amount);
        }
        // first argument is a string that is the name of the ejs file we want to render(show)
        res.render('index.ejs',
            // second argument
            // must be an object
            // key is the name of the variable to use in EJS
            // value is the data we want to pass in
            // we set Budget above in 'Database'
            {
                ledger: Budget,
                bankAccount: sum
            });
    },
    init: (req, res) => {
        res.render('new.ejs');
    },
    show: (req, res) => {
        res.render('show.ejs', {
            ledgerItem: Budget[req.params.index]
        });
    },
    create: (req, res) => {
        // add our form data to our Budget Array
        Budget.push(req.body);
        res.redirect('/budgets');
    }
};