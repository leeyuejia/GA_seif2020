require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000

//ALL ROUTES
app.get("/greeting/:name", (req,res) => {
    res.send(`Hello, ${req.params.name}`);
})


//ALL LISTENING
app.listen(port, ()=> {
    console.log("I am listening")
})