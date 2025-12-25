const express = require('express');
const ContentController = require('../controllers/content.controller');

const router = express.Router();

// Get all content
router.get('/content', ContentController.getContent);

// Get specific section
router.get('/content/section/:id', ContentController.getSection);

// Get specific image
router.get('/content/image/:id', ContentController.getImage);

// Health check
router.get('/health', ContentController.healthCheck);

module.exports = router;
