# PrepCampus - AI-Powered Interview Preparation Platform

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)

### 🏃‍♂️ One-Click Setup (Windows)

1. **Double-click** `start.bat` in the root directory
2. The script will automatically:
   - Install all dependencies
   - Start both backend and frontend
   - Open the application in your browser

### 🏃‍♂️ One-Click Setup (Mac/Linux)

1. Make the script executable: `chmod +x start.sh`
2. Run: `./start.sh`

### 📝 Manual Setup

1. **Install Dependencies**
   ```bash
   npm run install:all
   ```

2. **Configure Environment Variables**
   
   **Backend** (`.env` file in `/backend` folder):
   ```env
   PORT=5000
   MONGODB_URL=mongodb://localhost:27017/prepcampus
   JWT_SECRET=your_jwt_secret_key_here
   OPENAI_API_KEY=your_openai_api_key
   # ... other API keys
   ```

   **Frontend** (`.env.local` file in `/frontend` folder):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. **Start Development Servers**
   ```bash
   npm run dev
   ```

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
