const express = require('express');
const router = express.Router();
const cities = require('../data/cities');

// Get all cities
router.get('/', (req, res) => {
    res.json(cities);
});

// Get city by ID
router.get('/:id', (req, res) => {
    const city = cities.find(c => c.id === parseInt(req.params.id));
    if (!city) return res.status(404).json({ message: 'City not found' });
    res.json(city);
});

// Get cities by wilaya
router.get('/wilaya/:wilaya', (req, res) => {
    const wilayaCities = cities.filter(c => 
        c.wilaya.toLowerCase() === req.params.wilaya.toLowerCase()
    );
    if (wilayaCities.length === 0) {
        return res.status(404).json({ message: 'No cities found in this wilaya' });
    }
    res.json(wilayaCities);
});

module.exports = router; 