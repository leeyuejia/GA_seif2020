// DEPENDENCIES
const express = require('express');
const router = express.Router();
// const User = require('../models/users.js');

// ROUTES
// get index
router.get('/', (req, res) => {
  // finds all users
  User.find({}, (err, foundUsers) => {
    // renders the room page
    res.render('room/index.ejs', {
      // passes the found users to the room page
      users: foundUsers
    });
  });
});

// post a new message
// NOTE: as given, this only works if you have sessions working correctly
// if you can't get sessions working correctly, see if you can modify this code so that it works even without sessions!
router.post ('/new', (req, res) => {
  // finds user by id (based on current logged in user )
  User.findOneAndUpdate(
    {_id: req.session.currentUser._id},
    // uses $push method to push the req.body.message
    { $push: { messages: req.body.message } },
    // callback
    (err, foundUser) => {
      // redirects to the room page
      res.redirect('/room');
  });
});

// EXPORT
module.exports = router;
