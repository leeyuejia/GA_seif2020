require('dotenv').config() 
const express = require('express');
const app = express();
const port = 3000;

const plants = ['plantA', 'plantB']
const another = ["hi", "jolly"]

// app.get('/:index', (req,res) => {
//     res.send(plants[req.params.index]);
// })
app.get('/:index', (req,res) => {
    console.log(req.params)
    res.send(another[req.params.index])
})                    

app.get('/hello/:firstname/:lastname', (req,res) => {
    res.send('hello' + req.params.firstname + ' '  + req.params.lastname)
})

app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });

app.listen(port, () => {
    console.log('listening to' + port);
})
