// controllers/statsController.js
const Coin = require('../models/data');

exports.getStats = async (req, res) => {
    const { coin } = req.query;

    try {
        const latestData = await Coin.findOne({ name: coin }).sort({ timestamp: -1 });

        if (!latestData) {
            return res.status(404).json({ error: 'Coin not found' });
        }

        res.json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            '24hChange': latestData['24hChange']
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
