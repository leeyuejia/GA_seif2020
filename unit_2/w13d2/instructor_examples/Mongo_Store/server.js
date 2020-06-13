const express = require('express');
// const methodOverride = require('method-override');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

require('./routes')(app);

app.listen(port, () => console.log(`Server started at port ${port}`));