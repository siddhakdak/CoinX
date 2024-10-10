// controllers/deviationController.js
const Coin = require('../models/data');

exports.getDeviation = async (req, res) => {
    const { coin } = req.query;

    try {
        const data = await Coin.find({ name: coin }).sort({ timestamp: -1 }).limit(100);
        const prices = data.map(record => record.price);

        if (prices.length === 0) {
            return res.status(404).json({ error: 'No data available for this coin' });
        }

        const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
        const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
        const stdDeviation = Math.sqrt(variance);

        res.json({ deviation: stdDeviation.toFixed(2) });
    } catch (error) {
        console.error('Error fetching deviation:', error);
        res.status(500).json({ error: 'Server error' });
    }
};


console.log("database connected successfullt");
