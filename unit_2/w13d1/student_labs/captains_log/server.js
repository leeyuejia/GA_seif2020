require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const methodOverride = require('method-override')
const logsController = require('./controllers/logsController')
const db = require('./db')

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

db.connect().then(() => app.emit('ready'));

///////////////////////////   db   //////////////////////////////

///////////////////////////   controllers   //////////////////////////////

///////////////////////////   routes   //////////////////////////////
app.get('/', (req,res) => res.redirect('./logs'))
app.get('/logs', logsController.indexPage); //render index.ejs, db.find()
app.get('/logs/new', logsController.newPage) // render new.ejs db.insertOne()
app.get('/logs/:title', logsController.showPage) // render show.ejs db.findOne()
app.get('/logs/:title/edit', logsController.editPage) // render edit.ejs 
app.post('/logs', logsController.createPost) // add logs into db and redirect to showpage
app.put('/logs', logsController.putPage) // update edited info to the database and redirect to show.ejs





app.on('ready', () => {
        app.listen(port, ()=> {
                console.log("I am listening on port", port)
        })
})
