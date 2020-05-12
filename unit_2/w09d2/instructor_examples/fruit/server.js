const express = require('express');
const app = express();
const router = require('./router');
const port = process.env.PORT || 3000;
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(router);

app.listen(port, () => {
    console.log('Listening to PORT', port);
});