# Express Auth Sessions Build

We're going to build an app that allows us to
- create a user and password with express/mongodb/mongoose
- hash the password for security using bcrypt
- log in and check if username and user password match
- once logged in, stay logged in using express-sessions
- if logged in the user can see a special view and have access to another part of our site
- the user can log out

## A Visual Overview of What We'll be Building

![express auth png](express_auth.png)


## Getting Started

We've been building express apps using the MVC format. In the interest of time we'll run these commands in bash to build our folder structure and files quickly

```bash
mkdir ejs-auth;
cd ejs-auth;
touch server.js;
touch .env;
touch .gitignore;
echo "node_modules" >> .gitignore;
echo ".env" >> .gitignore;
npm init -y &&
npm i dotenv ejs express method-override mongoose;
mkdir controllers;
touch controllers/users.js;
touch controllers/sessions.js;
mkdir models;
touch models/users.js;
mkdir views/;
touch views/index.ejs;
mkdir views/partials;
touch views/partials/head.ejs;
mkdir views/users;
touch views/users/new.ejs;
mkdir views/sessions;
touch views/sessions/new.ejs;
mkdir views/app;
touch views/app/index.ejs;
mkdir views/app/messages;
touch views/app/messages/new.ejs;
```

All good?

![bash script](https://i.imgur.com/kGcLfep.png)

- MVC file structure
- node_modules installed
- `package.json` and `package-lock.json` generated

Now we'll start building out the functionality across our files

### Set Environmental Variables

Our computer is one environment for our app. Heroku (where we will host our app is a different environment). We can use a package called `dotenv` to help us manage the variables that are specific to our environements, like the port number, the uri for mongodb and any other sensitive information we may need.

We can learn more about this package by going to [the docs](https://www.npmjs.com/package/dotenv)

For now, let's add this to our `.env` file

```yml
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth_lesson
```

We'll access these variables in our `server.js`

Finally, we don't want these potentially sensitive variables to end up on github or on the web, so let's go ahead and take care of our `.gitignore`

**In .gitignore**

```
node_modules
.env
```

Remember, our class repository already handles our `.gitignore`, but you'll need to set this up properly for your project.

### Basic Server

#### SET DEPENDENCIES

**server.js**

```js
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
```

#### SET CONFIGURATION
```js
// Configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGO_URI
```

#### SET MIDDLEWARE
```js
// Middleware
// allows us to use put and delete methods
app.use(methodOverride('_method'))
// parses info from our input fields into an object
app.use(express.urlencoded({ extended: false }))
```

#### CONFIGURE DATABASE AND DATABASE CONNECTION
```js
// Database
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})
```

#### APP LISTEN
```js
// Listen
app.listen(PORT, () => console.log('auth happening on port', PORT))
```

#### SET ONE ROUTE
```js
// Routes
app.get('/', (req, res) => {
  res.send('index route')
})
```

Start mongod

Start nodemon

Go to localhost:3000

### Add Boilerplate HTML
Everyone has a different process in building things out. I like to make plan a lot (see diagram), so we'll add a few npm modules before we'll use them, we'll set up our basic form before we'll get to test it, so we can check that our routes work as expected. Then we'll go back and build in more functionality.

Let's play around with another popular CSS Framework from Google called Materialize

We have 6 EJS files

- `views/app/messages/new.ejs `- BONUS Lab add nothing now
- `views/app/messages/new.ejs` - BONUS Lab add nothing now
- `views/partials/head.ejs` - we'll handle our head tag and meta data (copy paste from below)
- `views/sessions/new.ejs` - making forms look nice takes a lot of work, let's use the boilerplate from the Materialize website and update it as needed
- `views/users/new.ejs` - similar to sessions `new.ejs`
- `views/index.ejs` - our landing page/splash page/ home page


**In views/partials/head.ejs**
```html

    <meta charset="utf-8">
    <title>Secret Party</title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

```
**In views/index.ejs**
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <% include ./partials/head.ejs %>
  </head>
  <body>
    <div class="container">
      <h1>Welcome</h1>
          <h2>Please </h2>
          <a class="waves-effect waves-light btn" href="#">Sign Up</a></h2>
          <h3>or</h3>
          <a class="waves-effect waves-light btn" href="#">Log In</a>
    </div>
  </body>
</html>
```



Our form for creating a user and logging in will be almost completely the same

**views/users/new.ejs**

```html
<!DOCTYPE html>
<html>
  <head>
    <% include ./partials/head.ejs %>
  </head>
    <body>
      <div class="container">
        <h1>Create User</h1>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Placeholder" id="username" type="text" class="validate" name="username" required>
                <label for="username">User Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" name="password" required>
                <label for="password">Password</label>
              </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
    </body>
</html>

```

**views/sessions/new.ejs**

```html
<!DOCTYPE html>
<html>
  <head>
    <% include ./partials/head.ejs %>
  </head>
    <body>
      <div class="container">
        <h1>Log In</h1>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Placeholder" id="username" type="text" class="validate" name="username" required>
                <label for="username">User Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" name="password" required>
                <label for="password">Password</label>
              </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
    </body>
</html>

```

**In server.js**

```js
app.get('/', (req, res) => {
  res.render('index.ejs')
})
```

![splash page](https://i.imgur.com/xNWoniK.png)

So we have one route, our index route - that shows us a welcome page with two buttons that go nowhere.

Let's keep building the functionality!
