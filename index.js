const express = require('express');
const sampleData = require('./data/sample.json'); 
const connectDB = require('./config/db_config.js'); 
const model = require('./models/user.js'); 
require('dotenv').config()

connectDB();

const app = express();

app.get('/sample', (req, res) => {
    res.json(sampleData); 
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));



