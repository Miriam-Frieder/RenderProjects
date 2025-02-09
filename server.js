require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000; 

const API_KEY = process.env.API_KEY||'rnd_YHXEXFuSJ6LB8o1yLyqfflGT9lOr';

app.get('/', async (req, res) => {
    console.log(API_KEY)
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching services:', error);
        if(error.status==401)
            res.status(401).send('Invalid API key');
        res.status(500).send('Error fetching services');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
