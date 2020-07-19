const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

require('./router')(app);

if (process.env.NODE_ENV !== 'test') {
    db.connect();
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
}

module.exports = app;