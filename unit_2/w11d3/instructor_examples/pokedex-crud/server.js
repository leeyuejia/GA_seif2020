// ==================== SETUP ====================
// packages
const express = require('express'),
    methodOverride = require('method-override'),
    app = express();

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

require('./routes')(app);

// ==================== LISTENER ====================
app.listen(3000, () => {
    console.log('Gotta catch em all on port 3000');
});

process.on('exit', function (code) {
    return console.log(`About to exit with code ${code}`);
});