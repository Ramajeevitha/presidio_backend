const express = require('express');
const sampleData = require('./data/sample.json'); 
const connectDB = require('./config/db_config.js'); 
const User = require('./models/user.js');
const Room = require('./models/room.js');
const userRoutes = require('./routes/users');
const roomRoutes = require('./routes/rooms');


require('dotenv').config()

const app = express();   


connectDB();
app.use(express.json()); 

app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);




app.get('/sample', (req, res) => {
    res.json(sampleData); 
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
