const express = require("express");
const users = express.Router();
const User = require("../models/users.js");

// new user route
users.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

// create user route
users.post("/", (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err);
    }
    console.log(createdUser);
    res.redirect("/");
  });
});

module.exports = users;
