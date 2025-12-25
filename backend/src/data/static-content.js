const staticContent = {
  title: 'Intent 3D - Static Content Display',
  subtitle: 'A Professional MEAN Stack Implementation',
  description: 'This application demonstrates efficient static content delivery using the MEAN stack framework',

  sections: [
    {
      id: 1,
      title: 'Welcome to Intent 3D',
      content: 'This application showcases a clean implementation of the MEAN stack for displaying static content. Built with Angular 20 frontend and Express.js backend, it delivers content efficiently without database interactions.',
      icon: 'fa-home'
    },
    {
      id: 2,
      title: 'Professional Features',
      content: 'Clean Angular frontend with responsive design, Express.js backend serving static files efficiently, Bootstrap 5 for modern UI, and Font Awesome for enhanced visual elements.',
      icon: 'fa-star'
    },
    {
      id: 3,
      title: 'Technical Stack',
      content: 'Built with the MEAN stack: MongoDB-ready architecture, Express.js for server handling, Angular 20 for frontend rendering, and Node.js runtime. Deployed on Vercel (backend) and Firebase (frontend).',
      icon: 'fa-code'
    },
    {
      id: 4,
      title: 'Simple & Efficient',
      content: 'No database interaction, no API calls complexity, no user input required. Just clean, static content delivery as specified in the project requirements.',
      icon: 'fa-check-circle'
    }
  ],

  images: [
    {
      id: 1,
      title: 'MEAN Stack Architecture',
      alt: 'MEAN Stack Development',
      description: 'Modern web development stack',
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Professional Development',
      alt: 'Web Development Workflow',
      description: 'Clean code and best practices',
      url: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Modern UI Design',
      alt: 'User Interface Design',
      description: 'Responsive and accessible',
      url: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80'
    }
  ],

  metadata: {
    version: '1.0.0',
    author: 'Mohamed Abdelkader',
    client: 'Intent 3D',
    deliveryDate: '2025-11-28',
    technologies: ['MongoDB', 'Express.js', 'Angular 20', 'Node.js', 'Bootstrap 5', 'Font Awesome']
  }
};

module.exports = staticContent;
