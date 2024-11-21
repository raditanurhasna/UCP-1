const mongoose = require('mongoose');

const poolSchema = new mongoose.Schema({
    name: String,
    location: String,
    ticketPrice: Number
});

module.exports = mongoose.model('Pool', poolSchema);