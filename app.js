// index.js
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const axios = require('axios');
const connectDB = require('./config/db');
const statsRoutes = require('./routes/stats');
const deviationRoutes = require('./routes/deviation');
const Coin = require('./models/data');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());  // Allow cross-origin requests (necessary for MERN)
app.use(express.json());  // Parse incoming JSON requests

// Connect to MongoDB
connectDB();

// Cron job for fetching data
cron.schedule('0 */2 * * *', async () => {
    try {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                ids: 'bitcoin,ethereum,matic-network'
            }
        });

        data.forEach(async coin => {
            await Coin.create({
                name: coin.id,
                price: coin.current_price,
                marketCap: coin.market_cap,
                '24hChange': coin.price_change_percentage_24h,
                timestamp: new Date()
            });
        });

        console.log('Data saved successfully');
    } catch (error) {
        console.error('Error fetching data', error);
    }
});

// Routes
app.use('/stats', statsRoutes);
app.use('/deviation', deviationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
