// Auth routes for Vercel serverless
const express = require('express');
const cors = require('cors');
const authRoutes = require('../backend/routes/authRoute');

const app = express();

// Middleware
app.use(cors({
  origin: ['https://prepcampus.vercel.app', 'http://localhost:3000', 'http://localhost:3002'],
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Use auth routes
app.use('/api/auth', authRoutes);

module.exports = app;
