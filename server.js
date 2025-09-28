const express = require('express');
const cors = require('cors');
const connectDB = require('./db_config');
const userRoutes = require('./routes/users');
const roomRoutes = require('./routes/rooms');

require('dotenv').config();

const app = express();


connectDB();

app.use(cors({ origin: "http://localhost:3002" })); 
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
