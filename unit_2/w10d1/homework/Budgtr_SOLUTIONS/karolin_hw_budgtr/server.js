// Dependencies
const express = require('express')
const app = express()

// Configuration
const PORT = 3000

// Middleware
// Body Parser - parses out form data from body of request
app.use(express.urlencoded({ extended: false }))
// Static - allows us to have access to a folder called public that will house our css and other static files
app.use(express.static('public'))

// 'Database'
const Budget = require('./models/budget.js')
// Routes
// Index
app.get('/budgets', (req, res) => {
  let sum = 0
  for (let budgetItem of Budget) {
    sum += Number(budgetItem.amount)
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
    })
})

// new - need to show a form
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs')
})

// show
// remeber :index acts as a 'catchall for any url'
app.get('/budgets/:index', (req, res) => {
  res.render('show.ejs', {
    ledgerItem: Budget[req.params.index]
  })
})

// create - actually create a new item
app.post('/budgets', (req, res) => {
  // add our form data to our Budget Array
  Budget.push(req.body)
  res.redirect('/budgets')
})

app.listen(PORT, () => {
  console.log('ready to budget on port', PORT)
})
