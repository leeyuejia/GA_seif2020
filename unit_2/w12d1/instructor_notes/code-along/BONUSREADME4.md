Bonus add your own custom middleware to make your code more dry:

```js
const express = require('express')
const messages = express.Router()

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

messages.get('/new', isAuthenticated, (req, res) => {
  res.render('messages/new.ejs')
})

messages.get('/', isAuthenticated, (req, res) => {
  res.send('it works' + req.session.currentUser)
})
```
