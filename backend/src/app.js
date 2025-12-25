const express = require('express');
const cors = require('cors');
const path = require('path');
const corsOptions = require('./config/cors.config');
const contentRoutes = require('./routes/content.routes');

const app = express();

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api', contentRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'MEAN Stack Static Content Display API',
    status: 'Active',
    version: '1.0.0',
    endpoints: {
      content: '/api/content',
      section: '/api/content/section/:id',
      image: '/api/content/image/:id',
      health: '/api/health'
    },
    documentation: 'https://github.com/MuhammadAbdelkader/mean-content-display'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    requestedUrl: req.originalUrl
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

module.exports = app;
