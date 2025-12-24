# MEAN Static Display – Backend API

Express.js backend for the **MEAN Static Content Display** application.

---

## 🌐 Live API

**Base URL:**
https://mean-content-display.vercel.app/

### Endpoints
- `GET /` — API health check
- `GET /api/content` — Static content data

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start locally
npm start
# Server runs on http://localhost:3000

---

## 📡 API Response Examples

### Health Check
```json
{
  "message": "MEAN Stack Static Content Display Backend",
  "status": "Running",
  "version": "1.0.0"
}

## Static Content

```json
{
  "title": "Static Content Display",
  "description": "MEAN stack application for Intent 3D",
  "textSections": [...],
  "images": [...]
}

---

## 🛠️ Technologies

- **Express.js** — Backend framework
- **CORS** — Cross-origin requests
- **Vercel** — Serverless hosting

---

## 🚀 Deployment

Deployed on **Vercel** via GitHub repository import:

1. Import GitHub repository into Vercel
2. Set root directory to `/backend`
3. Deploy automatically on every push

---

## 📁 Project Structure

```text
backend/
├── index.js          # Main server file
├── package.json      # Dependencies
├── vercel.json       # Vercel configuration
└── README.md

---

## 🔗 Frontend Integration

Angular frontend connects to this backend API to display static content.
**No database required.**

---

## 👨‍💻 Developer

**Mohamed Abdelkader**
**Project:** MEAN Stack Static Display for Intent 3D
