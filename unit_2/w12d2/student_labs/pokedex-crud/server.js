const express = require('express'),
    methodOverride = require('method-override'),
    app = express(),
    db = require('./db');

const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

require('./routes')(app);

db.connect().then(() => app.emit('ready'));

app.on('ready', () => {
    app.listen(PORT, () => console.log('Gotta catch em all on port 3000'));
});

module.exports = app;

