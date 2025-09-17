const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  room_number: { type: String, required: true },
  room_type: { type: String, required: true },   
  price: { type: Number, required: true },
  capacity: { type: Number, required: true },
  status: { type: String, default: "available" }
});


module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);
