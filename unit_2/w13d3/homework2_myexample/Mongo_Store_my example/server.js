const express = require('express');
const session = require('express-session')
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db');

// middleware
app.use(session({
    secret: process.env.SECRET || 'mySecret', // endcoded the password hash value that will set a cookies. token??? its too secret
    resave: false,
    saveUninitialized: false 
}))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

db.connect();

require('./routes')(app);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));