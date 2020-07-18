const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');

app.use(express.urlencoded({ extended: false }));

db.connect();

require('./router')(app);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));