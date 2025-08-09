# PrepCampus Vercel Deployment Guide

## Prerequisites
- Vercel account
- GitHub repository with your code
- Backend deployed (recommend Vercel, Railway, or Render)

## Step 1: Deploy Backend First
1. Deploy your backend to a cloud platform
2. Note the backend URL (e.g., `https://prepcampus-backend.vercel.app`)

## Step 2: Prepare Frontend for Deployment

### Environment Variables
Add these environment variables in Vercel dashboard:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app/api
NEXT_PUBLIC_BASE_URL=https://your-app-name.vercel.app
NODE_ENV=production
```

### File Structure
```
prepcampus/
├── frontend/          # This will be deployed to Vercel
└── backend/           # Deploy separately
```

## Step 3: Deploy to Vercel

### Option A: Through Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Set root directory to `frontend`
5. Add environment variables
6. Deploy

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel

# Follow prompts and set environment variables
```

## Step 4: Configure Domain & Settings
1. Set custom domain (optional)
2. Configure environment variables
3. Test all functionality

## Important Notes
- ✅ Build errors have been fixed
- ✅ Environment variables configured
- ✅ API URLs are production-ready
- ⚠️ Backend needs to be deployed separately
- ⚠️ Update CORS settings in backend for your domain

## Troubleshooting
1. Check build logs in Vercel dashboard
2. Verify environment variables are set
3. Test API endpoints manually
4. Check browser console for errors

## Post-Deployment Checklist
- [ ] Frontend loads correctly
- [ ] API calls work
- [ ] Authentication functions
- [ ] All pages render properly
- [ ] Mobile responsiveness works
