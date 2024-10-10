const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    marketCap: { type: Number, required: true },
    '24hChange': { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Coin', CoinSchema);
