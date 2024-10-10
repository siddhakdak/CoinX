// routes/deviation.js
const express = require('express');
const { getDeviation } = require('../controllers/deviationController');
const router = express.Router();

router.get('/', getDeviation);

module.exports = router;
