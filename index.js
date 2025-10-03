const express = require('express');
const cors = require('cors');
const sampleData = require('./data/sample.json'); 
const connectDB = require('./db_config.js'); 
const User = require('./models/User.js');
const Room = require('./models/room.js');
const userRoutes = require('./routes/users');
const roomRoutes = require('./routes/rooms');

require('dotenv').config();

const app = express();


app.use(cors({ origin: "http://localhost:3002" }));

app.use(express.json()); 

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);

app.get('/sample', (req, res) => {
  res.json(sampleData); 
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
