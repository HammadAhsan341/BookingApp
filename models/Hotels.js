const mongoose = require('mongoose');

// const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos:{
        type: [String],
      },
    desc:{
        type: String,
        required: true
      },
      rating:{
        type: String,
        required: true
      },
      rooms:{
        type: [String]
      },
      cheapestPrice:{
        type: Number,
        required: true
      },
      title:{
        type: String,
        required: true
      },
      featured:{
        type: Boolean,
        default: false
      },

})

module.exports = mongoose.model("Hotel",HotelSchema)