const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

// app.use((request, response, next)=>{
//     console.log('a request has been received');
//     next();
// })

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.get('/fruits', (request, response)=>{
    response.render('index.ejs', {
        fruits: fruits
    });
});

// app.post('/products', (req, res)=>{
//     console.log('create route accessed!');
//     console.log('Req.body is: ', req.body);
//     res.send(req.body);
// });

app.post('/fruits', (request, response)=>{
    if(request.body.readyToEat === 'on'){
        request.body.readyToEat = true;
    } else {
        request.body.readyToEat = false;
    }
    fruits.push(request.body);
    response.redirect('/fruits');
})

app.get('/fruits/new', (request, response)=>{
    response.render('new.ejs');
});

app.get('/fruits/:indexOfFruitsArray', (request, response)=>{
    response.render('show.ejs',
        {
            fruit: fruits[request.params.indexOfFruitsArray]
        }
    );
});

app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});
