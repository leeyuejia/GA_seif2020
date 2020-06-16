const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js') // our model

users.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

// users/new form submit
// create a new user based on input in form

users.post('/' , (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10)) 
  User.create(req.body, (err, createdUser) => {
    if(err) {
      console.log(err);
    }
    console.log(createdUser);
    // once user is created redirect back to 'welcome page'
    res.redirect('/')
  })
})

module.exports = users
