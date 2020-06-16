const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const session = require('express-session');
app.use(session({
    secret: 'feedmeseymour', //a random string do not copy this value or your stuff will get hacked
    resave: false,
    saveUninitialized: false
}));

app.get('/', (request, response) => {
    // send response with some data (a string)
    request.session.anyProperty = 'any value';
    response.send(request.path);
});

app.get('/banana', (req, res) => {
    // get the currently set cookie
    let visits = req.session.visits;
    console.log('Before Increment visits', req.session.visits);

    // if a cookie exists, make a value thats 1 bigger
    req.session.visits = visits === undefined ? 1 : parseInt( visits ) + 1;
    console.log('After Increment visits', req.session.visits);
    // set the cookie
    res.send('Good morning');
});

app.get('/updateBanana', (req, res)=>{
    req.session.visits = -1;
    res.send('Good Night');
});

app.get('/eatBanana', (req, res)=>{ //any route will work
    req.session.destroy((err)=>{
        if(err){
            console.error(err);
        } else {
            console.log('req.session is destroyed');
        }
    });
    res.send('Hello world');
});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));