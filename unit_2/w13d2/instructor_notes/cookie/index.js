const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (request, response) => {
    // send response with some data (a string)
    response.send(request.path);
});

app.get('/banana', (req, res) => {
    // get the currently set cookie
    var visits = req.cookies['visits'].value;

    // see if there is a cookie
    if( visits === undefined ){

        // set a default value if it doesn't exist
        visits = 1;
    }else{

        // if a cookie exists, make a value thats 1 bigger
        visits = parseInt( visits ) + 1;
    }

    // set the cookie
    res.cookie('visits', { value: visits }, { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.send('Good morning');
});

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));