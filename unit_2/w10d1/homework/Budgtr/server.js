require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8080;
const data = require("./models/budget.js")

app.set('view engine', 'ejs')
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./router/router.js')(app);


app.listen(port, ()=> {
    console.log(" I am listening to" + port)
})