const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to serve static content
app.get('/api/content', (req, res) => {
  const content = {
    title: "Static Content Display",
    description: "This is a simple MEAN stack application displaying static content",
    textSections: [
      {
        id: 1,
        title: "Welcome to Intent 3D",
        content: "This application showcases how the MEAN stack can efficiently display static content without database interactions."
      },
      {
        id: 2,
        title: "Project Features",
        content: "Clean Angular frontend with Express.js backend serving static files. Simple, efficient, and professional."
      },
      {
        id: 3,
        title: "Technical Stack",
        content: "Built with MongoDB, Express.js, Angular, and Node.js. No API calls or user input required."
      }
    ],
    images: [
      {
        id: 1,
        title: "MEAN Stack Architecture",
        alt: "MEAN Stack Diagram",
        url: "https://via.placeholder.com/600x400/4A6572/FFFFFF?text=MEAN+Stack"
      },
      {
        id: 2,
        title: "Modern Web Development",
        alt: "Web Development",
        url: "https://via.placeholder.com/600x400/34495E/FFFFFF?text=Angular+Frontend"
      },
      {
        id: 3,
        title: "Clean UI Design",
        alt: "UI Design",
        url: "https://via.placeholder.com/600x400/1ABC9C/FFFFFF?text=Express+Backend"
      }
    ]
  };

  res.json(content);
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: "MEAN Stack Static Content Display Backend",
    status: "Running",
    version: "1.0.0"
  });
});

// For Vercel deployment
module.exports = app;

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
