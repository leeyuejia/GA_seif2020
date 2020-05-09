const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    console.log("I am here")
    res.send('Hello World!');
});

app.get('/somedata', (req, res) => {
    res.send('here is your');
})

app.listen(3000, () => {
    console.log("I am listening")
})