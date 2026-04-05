'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/toppersflow', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('Welcome to ToppersFlow API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
