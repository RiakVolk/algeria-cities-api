const express = require('express');
const cors = require('cors');
const citiesRouter = require('./routes/cities');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Routes
app.use('/api/cities', citiesRouter);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Algerian Cities API',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        endpoints: {
            allCities: '/api/cities',
            cityById: '/api/cities/:id',
            citiesByWilaya: '/api/cities/wilaya/:wilaya'
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`);
}); 