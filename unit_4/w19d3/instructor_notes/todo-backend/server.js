const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');

app.use(express.urlencoded({ extended: false }));

require('./router')(app);

if (process.env.NODE_ENV !== 'test') {
    db.connect();
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
}

module.exports = app;