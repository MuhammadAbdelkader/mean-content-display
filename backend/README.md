# MEAN Stack Static Content Display - Backend

> Express.js backend API for serving static content to Angular frontend

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://mean-content-display.vercel.app/)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.18+-blue)](https://expressjs.com/)

## 🚀 Live Demo

**Backend API**: [https://mean-content-display.vercel.app/](https://mean-content-display.vercel.app/)

## 📋 Project Overview

This is the backend API for the Intent 3D Static Content Display application. Built with Express.js and Node.js, it serves static content through RESTful endpoints to an Angular 20 frontend.

### Key Features

- ✅ RESTful API endpoints for static content
- ✅ CORS enabled for frontend communication
- ✅ Professional MVC-like architecture
- ✅ Security headers implemented
- ✅ Error handling and validation
- ✅ Health check endpoint
- ✅ Deployed on Vercel

## 🛠️ Tech Stack

- **Runtime**: Node.js v18+
- **Framework**: Express.js v4.18+
- **CORS**: cors v2.8+
- **Deployment**: Vercel

## 📁 Project Structure
```
backend/
├── src/
│   ├── config/
│   │   └── cors.config.js          # CORS configuration
│   ├── routes/
│   │   └── content.routes.js       # API routes
│   ├── controllers/
│   │   └── content.controller.js   # Business logic
│   ├── data/
│   │   └── static-content.js       # Static content data
│   └── app.js                      # Express app configuration
├── public/                         # Static files directory
├── index.js                        # Server entry point
├── vercel.json                     # Vercel configuration
├── package.json                    # Dependencies
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
└── README.md                       # Documentation
```

## 🔌 API Endpoints

### Base URL
```
Local: http://localhost:3000
Production: https://mean-content-display.vercel.app
```

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information and available endpoints |
| GET | `/api/health` | Health check endpoint |
| GET | `/api/content` | Get all static content (sections + images) |
| GET | `/api/content/section/:id` | Get specific section by ID |
| GET | `/api/content/image/:id` | Get specific image by ID |

### Response Format

All API responses follow this structure:
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2025-12-25T10:30:00.000Z"
}
```

### Example Requests

**Get All Content**
```bash
curl https://mean-content-display.vercel.app/api/content
```

**Get Specific Section**
```bash
curl https://mean-content-display.vercel.app/api/content/section/1
```

**Health Check**
```bash
curl https://mean-content-display.vercel.app/api/health
```

## 💻 Local Development

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MuhammadAbdelkader/mean-content-display.git
cd mean-content-display/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=3000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:4200,https://your-frontend-url.web.app
```

### Running the Server

**Development Mode**
```bash
npm run dev
```

**Production Mode**
```bash
npm start
```

The server will start on `http://localhost:3000`

### Testing the API

**Using curl:**
```bash
# Test root endpoint
curl http://localhost:3000/

# Test content endpoint
curl http://localhost:3000/api/content

# Test health check
curl http://localhost:3000/api/health
```

**Using browser:**
- Navigate to `http://localhost:3000/`
- Navigate to `http://localhost:3000/api/content`

## 🚢 Deployment

### Deploying to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Environment Variables on Vercel

Add these environment variables in your Vercel project settings:

- `NODE_ENV`: `production`
- `ALLOWED_ORIGINS`: Your frontend URLs (comma-separated)

## 📦 Dependencies
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5"
}
```

## 🔒 Security Features

- CORS enabled with configurable origins
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Input validation on route parameters
- Error handling without exposing sensitive information in production

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server in production mode |
| `npm run dev` | Start the server with nodemon for development |
| `npm test` | Run tests (if configured) |

## 🤝 Related Projects

- **Frontend**: [MEAN Content Display Frontend](https://github.com/MuhammadAbdelkader/mean-content-display-frontend)
- **Previous Projects**:
  - [MEAN Item Viewer](https://github.com/MuhammadAbdelkader/mean-item-viewer)
  - [MEAN Todo App](https://github.com/MuhammadAbdelkader/mean-todo-app)

## 👨‍💻 Author

**Mohamed Abdelkader**

- GitHub: [@MuhammadAbdelkader](https://github.com/MuhammadAbdelkader)
- Project: Intent 3D Static Content Display

## 📄 License

This project is part of a freelance contract for Intent 3D.

## 📅 Project Information

- **Client**: Intent 3D
- **Delivery Date**: November 28, 2025
- **Budget**: $5 USD
- **Status**: ✅ Backend Complete & Deployed

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/MuhammadAbdelkader/mean-content-display/issues) page
2. Verify your environment variables
3. Ensure all dependencies are installed
4. Check the Vercel deployment logs

## 🎯 Project Requirements Met

- ✅ Express.js backend serving static content
- ✅ RESTful API endpoints
- ✅ CORS configuration for frontend
- ✅ Professional code structure
- ✅ Error handling and validation
- ✅ Deployed on Vercel
- ✅ Documentation complete
- ✅ No database interaction (as specified)
- ✅ No user input handling (as specified)

---

**Built with ❤️ using the MEAN Stack for Intent 3D**
