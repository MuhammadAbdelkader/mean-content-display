# MEAN Stack Static Content Display - Frontend

> Angular 20 frontend application for displaying static content from Express.js backend

[![Deployed on Firebase](https://img.shields.io/badge/Deployed%20on-Firebase-orange)](https://mean-content-display.web.app)
[![Angular](https://img.shields.io/badge/Angular-20-red)](https://angular.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6-blue)](https://fontawesome.com/)

## 🚀 Live Demo

**Frontend Application**: [https://mean-content-display.web.app](https://mean-content-display.web.app)

**Backend API**: [https://mean-content-display.vercel.app](https://mean-content-display.vercel.app)

## 📋 Project Overview

This is the frontend application for the Intent 3D Static Content Display project. Built with Angular 20, it consumes RESTful APIs from an Express.js backend to display static text and images in a clean, professional interface.

### Key Features

- ✅ Modern Angular 20 implementation
- ✅ Responsive design with Bootstrap 5
- ✅ Beautiful UI with Font Awesome icons
- ✅ Component-based architecture
- ✅ HTTP service integration
- ✅ Error handling and loading states
- ✅ Optimized for performance
- ✅ Deployed on Firebase Hosting

## 🛠️ Tech Stack

- **Framework**: Angular 20
- **UI Library**: Bootstrap 5.3
- **Icons**: Font Awesome 6
- **HTTP Client**: Angular HttpClient
- **Deployment**: Firebase Hosting
- **Build Tool**: Angular CLI

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── content-section/        # Content sections display
│   │   │   ├── footer-component/       # Footer with metadata
│   │   │   ├── header-component/       # Hero header component
│   │   │   ├── image-gallery-component/ # Image gallery component
│   │   │   └── loading-spinner/        # Loading indicator
│   │   ├── models/
│   │   │   └── content.models.ts       # TypeScript interfaces
│   │   ├── services/
│   │   │   └── content.service.ts      # API service
│   │   ├── app.component.ts            # Main app component
│   │   ├── app.component.html          # Main template
│   │   ├── app.component.css           # Main styles
│   │   ├── app.config.ts               # App configuration
│   │   └── app.routes.ts               # Routing configuration
│   ├── environments/
│   │   ├── environment.ts              # Development config
│   │   └── environment.prod.ts         # Production config
│   ├── assets/                         # Static assets
│   ├── index.html                      # Main HTML file
│   └── main.ts                         # Application entry point
├── public/                             # Public static files
├── .firebaserc                         # Firebase project config
├── angular.json                        # Angular configuration
├── firebase.json                       # Firebase configuration
├── package.json                        # Dependencies
├── tsconfig.json                       # TypeScript config
├── tsconfig.app.json                   # App TypeScript config
├── tsconfig.spec.json                  # Test TypeScript config
└── README.md                           # This file
```

## 💻 Local Development

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Angular CLI 20

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MuhammadAbdelkader/mean-content-display.git
cd mean-content-display/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Install Angular CLI globally (if not installed):
```bash
npm install -g @angular/cli@20
```

### Running the Application

**Development Server**
```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

**Development Server with Custom Port**
```bash
ng serve --port 4300
```

**Open Browser Automatically**
```bash
ng serve --open
```

### Building the Application

**Development Build**
```bash
ng build
```

**Production Build**
```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

### Running Tests

**Unit Tests**
```bash
ng test
```

**End-to-End Tests**
```bash
ng e2e
```

## 🎨 Components Overview

### Header Component
- Displays application title and description
- Shows technology badges
- Gradient background with animations

### Content Section Component
- Displays static content sections
- Card-based layout
- Icon support with Font Awesome
- Hover effects and animations

### Image Gallery Component
- Responsive image grid
- Image overlay with details
- Smooth transitions
- Lazy loading support

### Footer Component
- Project metadata display
- Technology stack badges
- Quick links section
- Social media links

### Loading Spinner Component
- Displays during API calls
- Smooth animations
- User-friendly messaging

## 🔌 API Integration

### Content Service

The `ContentService` handles all API communications:

```typescript
// Get all content
getContent(): Observable<StaticContent>
```

### API Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/content` | Fetch all static content |

### API Response Format

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}
```

## 🎨 Styling

### Bootstrap 5
- Responsive grid system
- Utility classes
- Pre-built components

### Custom CSS
- Gradient backgrounds
- Smooth animations
- Custom color palette
- Responsive design

### Color Scheme
- Primary: `#667eea`
- Secondary: `#764ba2`
- Dark: `#2d3748`
- Light: `#f8f9fa`

## 🚢 Deployment

### Deploy to Firebase

1. **Build the application:**
```bash
ng build --configuration production
```

2. **Deploy to Firebase:**
```bash
firebase deploy --only hosting
```

3. **Using NPM script:**
```bash
npm run deploy
```

### Environment Configuration

**Development** (`environment.ts`):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

**Production** (`environment.prod.ts`):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://mean-content-display.vercel.app/api'
};
```

## 📦 Dependencies

### Main Dependencies
```json
{
  "@angular/core": "^20.0.0",
  "@angular/common": "^20.0.0",
  "@angular/platform-browser": "^20.0.0",
  "bootstrap": "^5.3.0",
  "@fortawesome/fontawesome-free": "^6.5.0"
}
```

### Dev Dependencies
```json
{
  "@angular-devkit/build-angular": "^20.0.0",
  "@angular/cli": "^20.0.0",
  "@angular/compiler-cli": "^20.0.0",
  "typescript": "~5.6.0"
}
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for development |
| `npm run build:prod` | Build for production |
| `npm run deploy` | Build and deploy to Firebase |
| `npm test` | Run unit tests |
| `npm run lint` | Lint the codebase |

## 🔒 Security Features

- CORS enabled for secure API communication
- XSS protection headers
- Content Security Policy
- Secure HTTPS deployment
- Input sanitization

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920x1080 and above)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667 and up)

## 🎯 Performance Optimization

- Lazy loading of images
- Production build optimization
- Tree shaking
- AOT compilation
- Minification and compression
- CDN for static assets

## 🤝 Related Projects

- **Backend**: [MEAN Content Display Backend](../backend)
- **Previous Projects**:
  - [MEAN Item Viewer](https://github.com/MuhammadAbdelkader/mean-item-viewer)
  - [MEAN Todo App](https://github.com/MuhammadAbdelkader/mean-todo-app)

## 👨‍💻 Author

**Mohamed Abdelkader**

- GitHub: [@MuhammadAbdelkader](https://github.com/MuhammadAbdelkader)
- Project: Intent 3D Static Content Display

## 📄 License

This project is part of a freelance contract for Intent 3D. See [LICENSE](../LICENSE) for details.

## 📅 Project Information

- **Client**: Intent 3D
- **Delivery Date**: November 28, 2025
- **Budget**: $5 USD
- **Status**: ✅ Frontend Complete & Deployed

## 🆘 Troubleshooting

### Common Issues

**1. API Connection Issues**
```bash
# Check if backend is running
curl https://mean-content-display.vercel.app/api/content
```

**2. Build Errors**
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
ng build --configuration production
```

**3. Firebase Deployment Issues**
```bash
# Re-login to Firebase
firebase login --reauth
firebase use your-project-id
```

## 🎯 Features Implemented

- ✅ Angular 20 frontend with latest features
- ✅ Bootstrap 5 for responsive design
- ✅ Font Awesome icons integration
- ✅ Service-based API communication
- ✅ Component-based architecture
- ✅ Error handling and loading states
- ✅ Animations and transitions
- ✅ SEO optimization
- ✅ Firebase hosting deployment
- ✅ Professional UI/UX design

## 🔄 Future Enhancements

- [ ] Add unit tests with Jasmine/Karma
- [ ] Implement E2E tests with Cypress
- [ ] Add PWA support
- [ ] Implement caching strategies
- [ ] Add animations with Angular Animations API
- [ ] Implement dark mode toggle

---

**Built with ❤️ using Angular 20 for Intent 3D**    
