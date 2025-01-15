const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// OpenWeather API endpoint
const OPENWEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// ExchangeRate API endpoint
const EXCHANGE_API_URL = 'https://open.er-api.com/v6/latest';

// Random Dog API endpoint
const DOG_CEO_API_URL = 'https://dog.ceo/api/breeds/image/random';

// Routes
app.get('/weather', async (req, res) => {
    const city = req.query.city || 'London';

    try {
        const response = await axios.get(OPENWEATHER_API_URL, {
            params: {
                q: city,
                appid: process.env.OPENWEATHER_API_KEY,
                units: 'metric',
            },
        });

        const weatherData = response.data;
        res.json({
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,  // Icon data for weather
            coordinates: weatherData.coord,
            feels_like: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            wind_speed: weatherData.wind.speed,
            country: weatherData.sys.country,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data.' });
    }
});


// Currency Exchange Rate API Route
app.get('/currency', async (req, res) => {
    const base = req.query.base || 'USD';

    try {
        const response = await axios.get(`${EXCHANGE_API_URL}/${base}`);
        const exchangeData = response.data;
        res.json({
            base: exchangeData.base_code,
            rates: exchangeData.rates,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching exchange rate data.' });
    }
});

// Random Dog Image API Route
app.get('/random', async (req, res) => {
    try {
        const response = await axios.get(DOG_CEO_API_URL);
        const imageUrl = response.data.message;
        res.json({ imageUrl });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching random dog image' });
    }
});

// Frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
