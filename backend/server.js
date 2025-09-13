const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Lumen Quest Hackathon 2026 Backend!' });
});

// Connect to DB first
connectDB();


app.use('/signup/user', userRoutes);
app.use('/signup/admin', adminRoutes);

// Then start server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
