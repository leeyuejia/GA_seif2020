const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;
const db = require('./db');

app.use(session({
    secret: 'MySecret',
    resave: false,
    saveUninitialized: false
}));
  
// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

db.connect();

require('./routes')(app);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));