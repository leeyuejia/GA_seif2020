// *******************************************//
// Everything provided to students in markdown start
// *******************************************//

// Dependencies
const mongoose = require('mongoose')
const db = mongoose.connection

// Hungry for More Dependencies
const express = require('express')
const app = express()

// Config
const mongoURI = 'mongodb://localhost:27017/hotel'

// Models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('Mongo running at', mongoURI)
)

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.collection.drop()

// Hotel.count({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

// *******************************************//
// Everything provided to students end
// *******************************************//

// - Create a hotel using the above schema
// Hotel.create()....I'm so tired of creating hotels...

//  - let's find all our hotels and `console.log` them
Hotel.find({}, 'name location rating vacancies tags rooms', (err, data) => {
  if (err) console.log(err)
  console.log(data)
})

//  - find all the hotels but only return the hotel name and `console.log` them
//   Hotel.find ({} , 'name', (err, data) => {
//      if (err) console.log ( err.message )
//      console.log ( data )
//   })

//  - find just your hotel using a search parameter that would only match your hotel
//   Hotel.find ({name: 'Hotel Karolin'} , 'name', (err , data) => {
//      if (err) console.log ( err.message )
//      console.log ( data )
//   })

//  - find all the hotels that have vacancies. Stretch: exclude ratings.
Hotel.find({ vacancies: true }, '-rating', (err, data) => {
  if (err) console.log(err.message)
  console.log(data)
})

// - turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database
Hotel.findOneAndRemove(
  { name: 'Hotelicopter' }, true, (err, data) => {
    if (err) console.log(err)
    console.log(data)
  }
)

// - Hildbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room servivce. Let's just remove that one as well
Hotel.findOneAndRemove(
  { name: "Hildbert's Hotel" }, true, (err, data) => {
    if (err) console.log(err.message)
    console.log(data)
  }
)

Hotel.findOneAndRemove(
  { location: 'Colorado Rockies' }, true, (err, data) => {
    if (err) console.log(err.message)
    console.log(data)
  }
)

// - The Great Northern's rating is only a 3! Update that to be a 5
const gnq = { name: 'The Great Northern' }
const gnu = { $inc: { rating: 2 } }
const gno = { new: true }

Hotel.findOneAndUpdate(gnq, gnu, gno, (err, data) => {
  if (err) console.log(err.message)
  console.log(data)
})

// - Motel Bambi is now fully booked, change the vacancies to false
const hbq = { name: 'Motel Bambi' }
const hbu = { $set: { vacancies: false } }
const hbo = { new: true }

Hotel.findOneAndUpdate(hbq, hbu, hbo, (err, data) => {
  if (err) console.log(err.message)
  console.log(data)
})

// - Things are on the decline for the Bates Motel, change the rating to 2
const bmq = { location: 'White Bay, Oregon' }
const bmu = { $set: { rating: 2 } }
const bmo = { new: true }

Hotel.findOneAndUpdate(bmq, bmu, bmo, (err, data) => {
  if (err) console.log(err.message)
  console.log(data)
})

// - Susan B. Anthony has relocated to NYC, update our records to match this

Hotel.findOneAndUpdate(bmq, bmu, bmo, (err, data) => {
  if (err) console.log(err.message)
  console.log(data)
})

// Hungry for More
app.get('/', (req, res) => {
  Hotel.find({}, 'name location rating vacancies tags rooms', (err, data) => {
    if (err) console.log(err)
    res.send(data)
    mongoose.connection.close()
  })
})

app.get('/:id', (req, res) => {
  Hotel.findById(req.params.id, (err, data) => {
    if (err) console.log(err)
    res.send(data)
    mongoose.connection.close()
  })
})

app.get('/count', (req, res) => {
  Hotel.count({}, (err, data) => {
    if (err) console.log(err)
    res.send(`There are ${data} hotels in this database`)
  })
})

app.listen(3000, () => {
  console.log('listening', 3000)
})
