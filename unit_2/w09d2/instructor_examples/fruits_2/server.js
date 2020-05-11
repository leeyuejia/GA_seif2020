const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

//index
app.get('/fruits', (request, response)=>{
    response.render(
        'index.ejs',
        {
            fruits: fruits
        }
    );
});

//create
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

//new
app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

//show
app.get('/fruits/:indexOfFruitsArray', (request, response)=>{
    response.render('show.ejs',
        {
            fruit: fruits[request.params.indexOfFruitsArray]
        }
    );
});

app.post('/products', (req, res)=>{
    console.log('create route accessed');
    console.log('Req.body is: ' , req.body);
    res.send(req.body);
})

app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});
