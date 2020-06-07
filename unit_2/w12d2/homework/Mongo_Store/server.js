require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db')
const port = process.env.PORT || 8080
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
require('./routes')(app)

db.connect().then(()=> app.emit('ready'));

app.on('ready', ()=> {
    app.listen(port, ()=> {
        console.log("I am listening on port", port)
    })
})