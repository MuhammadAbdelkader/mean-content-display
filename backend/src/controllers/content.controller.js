const staticContent = require('../data/static-content');

class ContentController {
  // Get all static content
  static getContent(req, res) {
    try {
      res.status(200).json({
        success: true,
        data: staticContent,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving content',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Get specific section
  static getSection(req, res) {
    try {
      const { id } = req.params;
      const section = staticContent.sections.find(s => s.id === parseInt(id));

      if (!section) {
        return res.status(404).json({
          success: false,
          message: 'Section not found'
        });
      }

      res.status(200).json({
        success: true,
        data: section,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving section',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Get specific image
  static getImage(req, res) {
    try {
      const { id } = req.params;
      const image = staticContent.images.find(img => img.id === parseInt(id));

      if (!image) {
        return res.status(404).json({
          success: false,
          message: 'Image not found'
        });
      }

      res.status(200).json({
        success: true,
        data: image,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving image',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Health check
  static healthCheck(req, res) {
    res.status(200).json({
      success: true,
      message: 'MEAN Stack Static Content Display Backend',
      status: 'Running',
      version: staticContent.metadata.version,
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = ContentController;
