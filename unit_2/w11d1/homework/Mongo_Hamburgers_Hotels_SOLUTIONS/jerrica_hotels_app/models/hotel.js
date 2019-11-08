// DEPENDENCIES =============================================
const mongoose = require('mongoose');

// SCHEMA ===================================================
const hotelSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String },
  rating: { type: Number, max: 5 },
  vacancies: { type: Boolean },
  tags: [ { type: String } ],
  rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ]
}, { timestamps: true });

// EXPORTS ===================================================
module.exports = mongoose.model('Hotel', hotelSchema);
