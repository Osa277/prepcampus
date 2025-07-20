# PrepCampus - AI-Powered Interview Preparation Platform

<div align="center">
  <h3>🚀 Master Your Tech Interviews with AI-Powered Practice</h3>
  <p>A comprehensive full-stack platform for technical interview preparation with AI feedback, expert mock interviews, and gamified learning.</p>
  
  <img src="https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/TypeScript-Powered-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
</div>

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Environment Setup](#-environment-setup)
- [Development](#-development)
- [Demo Credentials](#-demo-credentials)
- [Contributing](#-contributing)

## 🌟 Features

### 🎯 Core Functionality
- **AI Video Interviews**: Practice with AI-powered mock interviews with real-time feedback
- **Smart Question Bank**: Curated questions from top tech companies (FAANG, startups)
- **Real-time Feedback**: Instant analysis of your responses, body language, and communication
- **Progress Tracking**: Detailed analytics and improvement suggestions
- **Expert Mock Interviews**: 1-on-1 sessions with industry professionals
- **Gamified Learning**: Points, achievements, and leaderboards to motivate practice

### 🔐 Authentication & User Management
- JWT-based secure authentication
- User registration and login system
- Protected dashboard routes
- Password hashing with bcrypt
- Session management

### 🎨 User Interface
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Smooth Navigation**: Scroll-to-section functionality with sticky header
- **Professional UI**: Modern gradient designs and animations
- **Accessibility**: WCAG compliant components

### 📚 Learning Resources
- **Interview Guides**: FAANG strategies, behavioral frameworks, system design
- **Video Tutorials**: Mock interview recordings and expert tips
- **Practice Problems**: LeetCode-style coding challenges with solutions
- **Company Insights**: Interview processes and culture analysis
- **Templates & Checklists**: Resume templates and preparation guides
- **Community Forum**: Peer support and discussion forums

### 💰 Flexible Pricing
- **Basic Plan**: $29/month - 100 AI sessions, basic feedback, progress tracking
- **Professional Plan**: $79/month - Unlimited AI sessions, expert interviews, premium resources
- **Enterprise Plan**: $199/month - Full access, 1-on-1 coaching, dedicated support

## � Tech Stack

### Frontend
- **Framework**: Next.js 15.3.3 with App Router
- **UI Library**: React 19 with TypeScript
- **Styling**: TailwindCSS for responsive design
- **State Management**: React Context API for authentication
- **Icons**: Heroicons and custom SVG icons
- **Development**: Hot reload with Fast Refresh

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcrypt password hashing
- **File Upload**: Multer with organized storage
- **Middleware**: CORS, Morgan logging, custom error handling
- **API Design**: RESTful endpoints with standardized responses

### Development Tools
- **Language**: TypeScript for type safety
- **Package Manager**: npm with concurrent execution
- **Development**: Nodemon for backend, Next.js dev server
- **Environment**: dotenv for configuration management
- **Scripts**: Automated start scripts for Windows and Unix

## �🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)

### 🏃‍♂️ One-Click Setup (Windows)

1. **Double-click** `start.bat` in the root directory
2. The script will automatically:
   - Install all dependencies
   - Start both backend (port 5000) and frontend (port 3001)
   - Open the application in your browser

### 🏃‍♂️ One-Click Setup (Mac/Linux)

1. Make the script executable: `chmod +x start.sh`
2. Run: `./start.sh`

### 📝 Manual Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Code-Campus-International-Organization/prepcampus.git
   cd prepcampus
   ```

2. **Install Dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   cd ..
   ```

3. **Configure Environment Variables**
   
   **Backend** (`.env` file in `/backend` folder):
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/prepcampus
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=24h
   NODE_ENV=development
   
   # Optional: Redis for caching
   REDIS_URL=redis://localhost:6379
   
   # File Upload
   UPLOAD_PATH=./storage/uploads
   MAX_FILE_SIZE=10485760
   
   # Future API integrations
   OPENAI_API_KEY=your_openai_api_key
   AZURE_FACE_API_KEY=your_azure_face_api_key
   ```

   **Frontend** (`.env.local` file in `/frontend` folder):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_APP_URL=http://localhost:3001
   NODE_ENV=development
   ```

4. **Start Development Servers**
   ```bash
   # Option A: Start both servers concurrently
   npm run dev

   # Option B: Start manually
   # Terminal 1: Backend
   cd backend && npm run dev
   
   # Terminal 2: Frontend
   cd frontend && npm run dev
   ```

5. **Access the Application**
   - **Frontend**: http://localhost:3001
   - **Backend API**: http://localhost:5000
   - **Health Check**: http://localhost:5000/api/health

## 📁 Project Structure

```
prepcampus/
├── backend/                    # Express.js backend
│   ├── config/                # Database and service configurations
│   │   ├── DatabaseConfig.js  # MongoDB connection
│   │   ├── OpenAiConfig.js    # OpenAI integration (future)
│   │   └── RedisConfig.js     # Redis configuration (optional)
│   ├── controllers/           # Route controllers
│   │   ├── authController.js  # Authentication logic
│   │   ├── userController.js  # User management
│   │   ├── profileController.js # Profile management
│   │   └── techInterviewController.js # Interview logic
│   ├── middleware/            # Custom middleware
│   │   ├── authMiddleware.js  # JWT verification
│   │   ├── errorMiddleware.js # Global error handling
│   │   └── undefinedRoute.js  # 404 handler
│   ├── models/               # MongoDB schemas
│   │   ├── userModel.js      # User schema with validation
│   │   ├── interviewModel.js # Interview session data
│   │   └── certificateModel.js # Certification tracking
│   ├── routes/               # API route definitions
│   │   ├── authRoute.js      # Authentication endpoints
│   │   ├── userRoute.js      # User CRUD operations
│   │   ├── dashboardRoute.js # Dashboard data
│   │   └── adminRoute.js     # Admin operations
│   ├── services/             # Business logic layer
│   │   ├── userService.js    # User operations
│   │   ├── judge0Service.js  # Code execution service
│   │   ├── azureFaceService.js # Face analysis
│   │   └── videoProcessService.js # Video processing
│   ├── utils/                # Utility functions
│   │   ├── baseResponse.js   # Standardized API responses
│   │   ├── validateFields.js # Input validation
│   │   └── errorMessage.js   # Error constants
│   ├── storage/              # File uploads
│   │   └── uploads/          # User uploaded files
│   ├── app.js               # Express app configuration
│   └── package.json         # Backend dependencies
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # Next.js 15 App Router
│   │   │   ├── globals.css  # Global styles with TailwindCSS
│   │   │   ├── layout.tsx   # Root layout component
│   │   │   ├── page.tsx     # Landing page with all sections
│   │   │   ├── login/       # Authentication pages
│   │   │   │   └── page.tsx # Login form with demo credentials
│   │   │   ├── signup/      # User registration
│   │   │   │   └── page.tsx # Registration form
│   │   │   ├── dashboard/   # User dashboard
│   │   │   │   └── page.tsx # Protected dashboard page
│   │   │   └── user-profile/ # Profile management
│   │   │       └── page.tsx # Profile editing
│   │   ├── components/      # Reusable components
│   │   │   ├── Header.tsx   # Navigation with smooth scrolling
│   │   │   ├── AuthButtons.tsx # Login/signup buttons
│   │   │   └── ApiStatus.tsx # Backend connection status
│   │   ├── contexts/        # React Context providers
│   │   │   └── AuthContext.tsx # Authentication state management
│   │   └── lib/            # Utility functions
│   │       └── utils.ts    # Helper functions
│   ├── public/             # Static assets
│   │   ├── Frame 1.png     # UI design mockups
│   │   ├── interview-illustration.png
│   │   ├── profile-illustration.png
│   │   └── top.png         # Hero section image
│   ├── next.config.ts      # Next.js configuration
│   ├── tailwind.config.ts  # TailwindCSS setup
│   ├── tsconfig.json      # TypeScript configuration
│   └── package.json       # Frontend dependencies
├── start.bat              # Windows startup script
├── start.sh              # Unix startup script
├── package.json          # Root package.json for scripts
└── README.md            # This comprehensive guide
```

## 🔌 API Documentation

### Base URL
- **Development**: `http://localhost:5000`
- **Production**: `https://your-backend-url.com`

### Authentication Endpoints

#### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe"
    },
    "token": "jwt_token_here"
  }
}
```

#### POST /api/auth/login
Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe"
    },
    "token": "jwt_token_here"
  }
}
```

### User Endpoints

#### GET /api/user/profile
Get current user profile (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token_here
```

#### PUT /api/user/profile
Update user profile information.

### Health Check

#### GET /api/health
Check backend server status.

**Response:**
```json
{
  "status": "OK",
  "message": "Backend server is running successfully!",
  "timestamp": "2025-01-20T10:30:00.000Z",
  "port": 5000
}
```

## 🔧 Environment Setup

### MongoDB Setup

#### Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service: `mongod`
3. Database `prepcampus` will be created automatically
4. Update `MONGODB_URI` in backend `.env`

#### MongoDB Atlas (Cloud)
1. Create account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Create new cluster
3. Get connection string from "Connect" button
4. Add to `MONGODB_URI` in backend `.env`
5. Whitelist your IP address

### Optional: Redis Setup
1. Install Redis locally: [redis.io/download](https://redis.io/download)
2. Start Redis server: `redis-server`
3. Update `REDIS_URL` in backend `.env`
4. Used for session storage and caching

## 🔨 Development

### Available Scripts

#### Root Level
```bash
npm run dev          # Start both backend and frontend concurrently
npm run start        # Production start (both services)
npm run backend      # Start only backend
npm run frontend     # Start only frontend
npm install         # Install root dependencies
```

#### Backend Scripts
```bash
npm run dev          # Development with nodemon auto-restart
npm start           # Production start
npm run test        # Run tests (when implemented)
```

#### Frontend Scripts
```bash
npm run dev         # Development server with hot reload
npm run build       # Production build
npm start          # Production server
npm run lint       # ESLint checking
npm run type-check # TypeScript validation
```

### Development Workflow

1. **Feature Development**
   - Create feature branch from main
   - Implement backend API endpoints first
   - Add frontend integration
   - Test authentication flow
   - Update documentation

2. **Code Quality**
   - Follow TypeScript best practices
   - Use proper error handling with try-catch
   - Implement input validation on both ends
   - Add comprehensive logging

3. **Testing**
   - Test API endpoints manually or with Postman
   - Verify frontend functionality across browsers
   - Check authentication flows and protected routes
   - Validate responsive design on mobile devices

## 🎭 Demo Credentials

For testing the application, use these demo credentials:

**Demo User Account:**
- **Email**: `demo@prepcampus.com`
- **Password**: `demo123`

**Test Features:**
- Login with demo credentials
- Access protected dashboard
- Navigate through all sections
- Test smooth scrolling navigation
- Explore pricing and features

## 🤝 Contributing

We welcome contributions to PrepCampus! Please follow these guidelines:

### Development Setup
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Make changes with proper testing
4. Commit with descriptive messages (`git commit -m 'Add amazing feature'`)
5. Push to your fork (`git push origin feature/amazing-feature`)
6. Create Pull Request

### Code Standards
- Use TypeScript for type safety
- Follow ESLint configurations
- Write descriptive commit messages
- Add comments for complex logic
- Update documentation for new features

### Pull Request Process
1. Ensure all tests pass and code compiles
2. Update README if adding new features
3. Add screenshots for UI changes
4. Request review from maintainers
5. Address any feedback promptly

---

<div align="center">
  <p>Made with ❤️ by <strong>Code Campus International Organization</strong></p>
  <p>⭐ Star this repo if you find it helpful!</p>
  <p><a href="https://github.com/Code-Campus-International-Organization/prepcampus">GitHub Repository</a> | <a href="#-quick-start">Quick Start Guide</a> | <a href="#-api-documentation">API Docs</a></p>
</div>
   - **Frontend**: http://localhost:3001
   - **Backend API**: http://localhost:5000
   - **Health Check**: http://localhost:5000/api/health

## 🌐 Application URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **API Documentation**: http://localhost:5000/api (if implemented)

## 📁 Project Structure

```
prepcampus/
├── backend/                 # Express.js API server
│   ├── app.js              # Main server file
│   ├── config/             # Database & API configurations
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── services/           # Business logic services
├── frontend/               # Next.js React application
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # Reusable components
│   │   └── lib/            # Utility functions & API client
│   └── public/             # Static assets
├── start.bat              # Windows startup script
├── start.sh               # Unix startup script
└── package.json           # Root project configuration
```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run install:all` - Install dependencies for both projects
- `npm run setup` - Complete setup (install all dependencies)

### Backend
- `npm run dev` - Start backend with nodemon (auto-reload)
- `npm start` - Start backend in production mode

### Frontend
- `npm run dev` - Start frontend in development mode
- `npm run build` - Build frontend for production
- `npm start` - Start frontend in production mode

## 🔑 Environment Configuration

### Required API Keys

1. **OpenAI API Key** - For AI-powered features
2. **Judge0 API Key** - For code execution
3. **Deepgram API Key** - For speech processing
4. **Azure Face API** - For facial analysis
5. **MongoDB Connection String** - Database

### How to Get API Keys

1. **OpenAI**: Visit [OpenAI Platform](https://platform.openai.com/)
2. **Judge0**: Visit [Judge0 API](https://rapidapi.com/judge0-official/api/judge0-ce/)
3. **Deepgram**: Visit [Deepgram](https://deepgram.com/)
4. **Azure**: Visit [Azure Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/)

## 🚨 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill processes on ports 3000 and 5000
   npx kill-port 3000 5000
   ```

2. **MongoDB Connection Issues**
   - Ensure MongoDB is running locally
   - Check the connection string in `.env`
   - For MongoDB Atlas, ensure IP whitelist is configured

3. **Module Not Found Errors**
   ```bash
   # Reinstall dependencies
   rm -rf node_modules frontend/node_modules backend/node_modules
   npm run install:all
   ```

4. **CORS Issues**
   - Ensure backend CORS is configured for `http://localhost:3000`
   - Check that API URLs in frontend match backend

### Development Tips

- **Backend Logs**: Check terminal running backend for API errors
- **Frontend Errors**: Check browser console for React errors
- **Network Issues**: Use browser dev tools Network tab to debug API calls

## 🔒 Security Notes

- Change default JWT secret before production
- Never commit API keys to version control
- Use environment variables for all sensitive data
- Consider using MongoDB Atlas for production database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure all prerequisites are installed
3. Verify environment variables are set correctly
4. Check that MongoDB is running

---

**Happy Coding! 🚀**
