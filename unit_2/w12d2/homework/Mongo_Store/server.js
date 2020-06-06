const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');

app.set('view engine', 'ejs');

db.connect();

require('./routes')(app);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));