## Bcrypt

- `npm install bcrypt`

**controllers/users.js**

```js
const bcrypt = require('bcrypt')

//...farther down the page
users.post('/', (req, res)=>{
  //overwrite the user password with the hashed password, then pass that in to our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser)=>{
        res.redirect('/')
    })
})
```

**GOTCHA** now that we are hashing passwords, previous user password won't match. The easiest thing is to just delete the and re-enter it. Or create a new user for this code-along.


**GOTCHA AGAIN** Now that we've hashed the password, we can't just compare it like we did before. We'll have to use bcrypt's `compareSync` function. This function will return true or false and will be determining if the passwords match.

**controllers/sessions.js**

```js
const bcrypt = require('bcrypt')

//...farther down the page
sessions.post('/', (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
      if( bcrypt.compareSync(req.body.password, foundUser.password) ){
          req.session.currentUser = foundUser;
            res.redirect('/');
        } else {
            res.send('<a href="/">wrong password</a>');
        }
    })
})
```
