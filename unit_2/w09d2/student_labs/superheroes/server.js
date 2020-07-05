require('dotenv').config()
const express= require("express")
const app= express();
const port = process.env.PORT || 3333

app.set('views', './views');
app.set('view engine','ejs');

require("./router/router")(app);

app.listen(port, () => {
    console.log("I am listening to " + port)
})