require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

app.emit('ready');

///////////////////////////   db   //////////////////////////////

///////////////////////////   controllers   //////////////////////////////

///////////////////////////   routes   //////////////////////////////
app.get('/', (req,res) => res.redirect('./logs'))
app.get('/logs', captainController.indexPage); //render index.ejs, db.find()
app.get('/logs/:id', captainController.showPage) // render show.ejs db.findOne()
app.get('/logs/create', captainController.createPage) // render create.ejs db.insertOne()
app.post('/logs', captainController.postPage) // add logs into db and redirect to index page
app.get('/logs/:id/edit', captainController.editPage) // render edit.ejs 
app.put('/logs/:id', captainController.putPage) // update edited info to the database and redirect to show.ejs






app.listen(port, ()=> {
        console.log("I am listening on port", port)
})
