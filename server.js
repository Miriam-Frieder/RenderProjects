const express = require('express');
const axios = require('axios');

const app = express();

const API_KEY = 'rnd_YHXEXFuSJ6LB8o1yLyqfflGT9lOr';

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).send('Error fetching services');
    }
});

