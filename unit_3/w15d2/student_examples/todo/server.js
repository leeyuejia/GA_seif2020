// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.static('public'))
const db = mongoose.connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 3000
const todosController = require('./controllers/todos.js')

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true ,useUnifiedTopology:true},
    () => console.log('MongoDB connection established:', mongoURI)
  )

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))




app.use('/todos', todosController);

app.listen(PORT, () => {
    console.log('listening to port ', PORT)
})

