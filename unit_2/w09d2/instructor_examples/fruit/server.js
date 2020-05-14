const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('views', './views');
app.set('view engine', 'ejs');

require('./router')(app);

app.listen(port, () => {
    console.log('Listening to PORT', port);
});