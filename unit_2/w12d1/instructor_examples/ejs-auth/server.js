// Dependencies
const express = require('express')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

// Configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

// Middleware
// allows us to use put and delete methods
app.use(methodOverride('_method'))
// parse info from our input fields into an object
app.use(express.urlencoded({ extended: false }))

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// Routes
const userController = require('./controllers/users.js')
app.use('/users', userController)

const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)

// Welcome route
app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
})

// Party App Route
app.get('/app', (req, res)=> {
  if(req.session.currentUser){
    res.render('app/index.ejs')
  } else {
    res.redirect('/sessions/new')
  }
})



// Listen
app.listen(PORT, () => console.log('auth happening on port', PORT))
