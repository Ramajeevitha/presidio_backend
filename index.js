const express = require('express');
const sampleData = require('./data/sample.json'); 
const connectDB = require('./config/db_config.js'); 
const User = require('./models/user.js');
const userRoutes = require('./routes/users');
require('dotenv').config()

const app = express();   


connectDB();
app.use(express.json()); 

app.use('/api/users', userRoutes);

app.get('/sample', (req, res) => {
    res.json(sampleData); 
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
