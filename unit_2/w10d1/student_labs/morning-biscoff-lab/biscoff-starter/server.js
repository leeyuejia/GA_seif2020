const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./router')(app);

app.listen(port, () => {
    console.log(`Biscoff Bakery app listening on port: ${port}`);
});