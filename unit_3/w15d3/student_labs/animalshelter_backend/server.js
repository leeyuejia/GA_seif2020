const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const db = require('./db');
const methodOverride = require('method-override')

/// cors stands for cross origin resource sharing that makes the ajax call skip same origin policy to access resource from remote hosts
app.use(cors());

app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(methodOverride('_method'));



db.connect().then(() => app.emit('ready'));

/// all routes goes here
// app.get('*', (req,res) => {
//     res.status(404).json('sorry, there is no such page to be found')
// })
require('./routes')(app);

app.on('ready', () => {
    app.listen(PORT, () => {
        console.log('connecting to port', PORT)
    })
})