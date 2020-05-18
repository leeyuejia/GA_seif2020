// Dependencies
const express = require('express');
const app = express();

// Configuration
const PORT = 3000;

// Middleware
// Body Parser - parses out form data from body of request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static - allows us to have access to a folder called public that will house our css and other static files
app.use(express.static('public'));

// The order is import here the require route must be after express middleware urlencoded and json in order to parse req.body 
require('./router')(app);

app.listen(PORT, () => {
    console.log('ready to budget on port', PORT);
});
