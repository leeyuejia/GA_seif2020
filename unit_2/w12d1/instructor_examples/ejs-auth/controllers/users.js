const express = require("express");
const bcrypt = require("bcrypt");
const users = express.Router();
const User = require("../models/users.js");

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next();
  } else {
    res.redirect("/sessions/new");
  }
};

// new user route
users.get("/new", isAuthenticated, (req, res) => {
  res.render("users/new.ejs");
});

// create user route
users.post("/", (req, res) => {
  //overwrite the user password with the hashed password, then pass that in to our database
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );

  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err);
    }
    console.log(createdUser);
    res.redirect("/");
  });
});

module.exports = users;
