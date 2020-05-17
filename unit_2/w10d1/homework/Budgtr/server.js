require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8080;
const data = require("./models/budget.js")

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/budgets', (req,res)=> {
    res.render("index.ejs", {data})

})
app.listen(port, ()=> {
    console.log(" I am listening to" + port)
})