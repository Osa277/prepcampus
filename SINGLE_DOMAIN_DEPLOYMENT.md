# PrepCampus Single Domain Vercel Deployment Guide

## ✅ **Yes, Frontend and Backend CAN use the same Vercel project!**

This setup deploys both your Next.js frontend and Express.js backend to the same Vercel domain, making deployment simpler and avoiding CORS issues.

## 🏗️ **Architecture Overview**

```
https://prepcampus.vercel.app/          → Frontend (Next.js)
https://prepcampus.vercel.app/api/*     → Backend (Express.js as serverless functions)
```

## 📁 **Project Structure for Single Domain**

```
prepcampus/
├── frontend/                    # Next.js app (main site)
├── backend/                     # Express.js backend (converted to serverless)
├── api/                         # Vercel API routes (NEW)
│   ├── index.js                 # Main backend entry point
│   ├── health.js                # Health check endpoint
│   └── auth/
│       └── [...auth].js         # Authentication routes
├── vercel.json                  # Deployment configuration
└── package.json                 # Root package.json
```

## 🚀 **Deployment Steps**

### Step 1: Prepare the Project (Already Done!)
- ✅ Created `vercel.json` with dual build configuration
- ✅ Updated CORS settings for Vercel domain
- ✅ Modified backend to export app for serverless
- ✅ Created API route handlers in `/api` folder
- ✅ Updated frontend API URLs for same-domain requests

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. **Root Directory**: Leave as root (not frontend!)
4. Framework Preset: Next.js
5. Build Settings:
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/.next`
6. Add environment variables (see below)
7. Deploy!

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Framework: Next.js
# - Build Command: cd frontend && npm run build
# - Output Directory: frontend/.next
```

### Step 3: Environment Variables
Add these to your Vercel project settings:

```
# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Environment
NODE_ENV=production

# API Configuration (optional, auto-configured)
NEXT_PUBLIC_API_URL=/api
```

## 🔧 **How It Works**

### Frontend Requests
```javascript
// Automatically routes to same domain
fetch('/api/auth/login', { ... })  // → prepcampus.vercel.app/api/auth/login
fetch('/api/health', { ... })      // → prepcampus.vercel.app/api/health
```

### Backend Serverless Functions
- `api/index.js` → Main Express app
- `api/health.js` → Health check
- `api/auth/[...auth].js` → Authentication routes
- All other backend routes work through the main app

### Routing Logic (from vercel.json)
1. `/api/*` requests → Backend serverless functions
2. All other requests → Next.js frontend

## ✅ **Advantages of Single Domain Setup**

1. **No CORS Issues**: Same domain = no cross-origin problems
2. **Simpler Configuration**: One deployment, one domain
3. **Cost Effective**: Single Vercel project instead of two
4. **Easier Management**: All code in one repository
5. **Better Performance**: No additional network hops

## 🚨 **Important Notes**

### Database Connection
- MongoDB Atlas recommended for production
- Update `MONGODB_URI` in Vercel environment variables
- Connection will be established automatically

### File Uploads
- Vercel has 50MB limit for serverless functions
- For larger files, consider using cloud storage (AWS S3, Cloudinary)

### Serverless Limitations
- 30-second timeout (configured in vercel.json)
- Stateless execution (no persistent memory)
- Cold starts possible (first request may be slower)

## 🧪 **Testing the Deployment**

After deployment, test these endpoints:

```bash
# Health check
curl https://prepcampus.vercel.app/api/health

# Frontend
curl https://prepcampus.vercel.app/

# Authentication (should return proper error)
curl https://prepcampus.vercel.app/api/auth/login
```

## 🔄 **Development vs Production**

### Development (localhost)
- Frontend: `http://localhost:3002`
- Backend: `http://localhost:5000`
- API calls: Cross-origin to localhost:5000

### Production (Vercel)
- Frontend: `https://prepcampus.vercel.app`
- Backend: `https://prepcampus.vercel.app/api/*`
- API calls: Same-origin requests

## 🎉 **Ready to Deploy!**

Your PrepCampus app is now configured for single-domain deployment on Vercel. This setup provides the best of both worlds: the power of Next.js for the frontend and the flexibility of Express.js for the backend, all on one domain!
