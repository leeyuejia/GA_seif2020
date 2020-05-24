// Dependencies
const mongoose = require('mongoose')

// Schema
const hotelSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String },
  rating: { type: Number, max: [5, '5 is the limit'] },
  vacancies: { type: Boolean },
  tags: [ { type: String } ],
  rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean } ]
}, { timestamps: true })

module.exports = mongoose.model('Hotel', hotelSchema)
