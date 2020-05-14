require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static("./pokemon_app"))

require('./router')(app);


app.listen(port, () => {
    console.log("I am listening to " + process.env.PORT)
})