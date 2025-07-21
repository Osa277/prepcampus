'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
}

interface InterviewProgress {
  stage: string;
  completed: boolean;
  score?: number;
  completedAt?: string;
}

export default function Dashboard() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Complete your Initial Screening", type: "info", new: true },
    { id: 2, message: "Technical Interview available", type: "success", new: true },
    { id: 3, message: "Profile 80% complete", type: "warning", new: false }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock data for progress tracking
  const [interviewProgress] = useState<InterviewProgress[]>([
    { stage: "Initial Screening", completed: false, score: 0 },
    { stage: "Technical Interview", completed: false, score: 0 },
    { stage: "Behavioral Interview", completed: false, score: 0 },
    { stage: "Deep Dive Interview", completed: false, score: 0 },
    { stage: "Mock Interview", completed: false, score: 0 }
  ]);

  const [achievements] = useState<Achievement[]>([
    { 
      id: 1, 
      title: "First Steps", 
      description: "Created your account", 
      icon: "🎯", 
      earned: true,
      date: "2025-07-20"
    },
    { 
      id: 2, 
      title: "Profile Builder", 
      description: "Complete your profile", 
      icon: "👤", 
      earned: false 
    },
    { 
      id: 3, 
      title: "Interview Ready", 
      description: "Complete Initial Screening", 
      icon: "📝", 
      earned: false 
    },
    { 
      id: 4, 
      title: "Tech Master", 
      description: "Pass Technical Interview", 
      icon: "💻", 
      earned: false 
    },
    { 
      id: 5, 
      title: "Communication Pro", 
      description: "Excel in Behavioral Interview", 
      icon: "💬", 
      earned: false 
    }
  ]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, new: false } : notif
      )
    );
  };

  const clearAllNotifications = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, new: false })));
  };

  const getProgressPercentage = () => {
    const completed = interviewProgress.filter(stage => stage.completed).length;
    return Math.round((completed / interviewProgress.length) * 100);
  };

  const getNextStep = () => {
    return interviewProgress.find(stage => !stage.completed);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  const earnedAchievements = achievements.filter(a => a.earned);
  const unlockedNotifications = notifications.filter(n => n.new);

  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-600 text-white flex flex-col p-6">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl mb-8 flex items-center space-x-2 hover:opacity-80 transition">
          <span className="text-2xl">🎯</span>
          <span>PrepCampus</span>
        </Link>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Main Menu</div>
        <nav className="flex-1 space-y-1 mb-6">
          <Link href="/dashboard" className="flex items-center gap-2 py-2 px-4 rounded bg-blue-700 font-semibold">
            <span>🏠</span> Dashboard
          </Link>
          <Link href="/initial-screening" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>📝</span> Initial Screening
            {!interviewProgress[0].completed && <span className="ml-auto w-2 h-2 bg-red-400 rounded-full"></span>}
          </Link>
          <Link href="/technical-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>💻</span> Technical Interview
            {interviewProgress[0].completed && !interviewProgress[1].completed && <span className="ml-auto w-2 h-2 bg-yellow-400 rounded-full"></span>}
          </Link>
          <Link href="/behavioral-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>💬</span> Behavioral Interview
            {interviewProgress[1].completed && !interviewProgress[2].completed && <span className="ml-auto w-2 h-2 bg-yellow-400 rounded-full"></span>}
          </Link>
          <Link href="/deep-dive-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>🔎</span> Deep Dive Interview
            {interviewProgress[2].completed && !interviewProgress[3].completed && <span className="ml-auto w-2 h-2 bg-yellow-400 rounded-full"></span>}
          </Link>
          <Link href="/mock-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>🎤</span> Mock Interview
            <span className="ml-2 text-xs bg-white text-blue-600 px-2 py-0.5 rounded">Premium</span>
          </Link>
        </nav>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Rewards Summary</div>
        <div className="mb-6 space-y-1">
          <Link href="/points" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>⭐</span> Points Earned
            <span className="ml-auto text-xs bg-blue-500 px-2 py-1 rounded">{earnedAchievements.length * 100}</span>
          </Link>
          <Link href="/certificates" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>🎓</span> Certificates
            <span className="ml-auto text-xs bg-blue-500 px-2 py-1 rounded">{earnedAchievements.length}</span>
          </Link>
        </div>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Account Management</div>
        <div className="mb-6 space-y-1">
          <Link href="/support" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>🛟</span> Support
          </Link>
          <Link href="/user-profile" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition">
            <span>⚙️</span> Profile Settings
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500 transition text-left"
          >
            <span>🚪</span> Log out
          </button>
        </div>
        <div className="mt-auto flex items-center space-x-2 pt-6 border-t border-blue-400">
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-semibold">
            {user?.firstName?.[0]?.toUpperCase() || 'U'}
          </div>
          <div>
            <div className="font-semibold">{user ? `${user.firstName} ${user.lastName}` : 'User'}</div>
            <div className="text-xs">Student</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 bg-gray-50">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-sm">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search anything here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
              style={{ minWidth: 260 }}
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition border border-blue-600"
            >
              🔍
            </button>
          </form>
          
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-blue-600 text-2xl hover:text-blue-700 transition"
              >
                🔔
                {unlockedNotifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unlockedNotifications.length}
                  </span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-semibold">Notifications</h3>
                    <button 
                      onClick={clearAllNotifications}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map(notif => (
                      <div 
                        key={notif.id}
                        className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${notif.new ? 'bg-blue-50' : ''}`}
                        onClick={() => markNotificationAsRead(notif.id)}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm">{notif.message}</p>
                          {notif.new && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* User Menu */}
            <Link href="/user-profile" className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2 transition">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-semibold">
                {user?.firstName?.[0]?.toUpperCase() || 'U'}
              </div>
              <span className="text-sm font-medium">{user?.firstName || 'User'}</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user?.firstName || 'User'}! 👋
            </h1>
            <p className="text-gray-600">
              Ready to continue your interview preparation journey? Let's make today count!
            </p>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Overall Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Overall Progress</h3>
                <span className="text-2xl">📊</span>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Interview Stages</span>
                  <span className="font-semibold">{getProgressPercentage()}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {interviewProgress.filter(s => s.completed).length} of {interviewProgress.length} stages completed
              </p>
            </div>

            {/* Next Step */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Next Step</h3>
                <span className="text-2xl">🎯</span>
              </div>
              {getNextStep() ? (
                <div>
                  <p className="font-medium text-blue-600 mb-2">{getNextStep()?.stage}</p>
                  <p className="text-sm text-gray-600 mb-4">Continue your preparation journey</p>
                  <Link 
                    href={`/${getNextStep()?.stage.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                  >
                    Start Now
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="font-medium text-green-600 mb-2">All Completed! 🎉</p>
                  <p className="text-sm text-gray-600">Great job finishing all stages!</p>
                </div>
              )}
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Achievements</h3>
                <span className="text-2xl">🏆</span>
              </div>
              <div className="space-y-2">
                {earnedAchievements.slice(0, 3).map(achievement => (
                  <div key={achievement.id} className="flex items-center gap-3">
                    <span className="text-lg">{achievement.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{achievement.title}</p>
                      <p className="text-xs text-gray-500">{achievement.description}</p>
                    </div>
                  </div>
                ))}
                <Link href="/certificates" className="inline-block text-sm text-blue-600 hover:text-blue-700 mt-2">
                  View all achievements →
                </Link>
              </div>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interview Stages */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Interview Stages</h2>
              <div className="space-y-4">
                {interviewProgress.map((stage, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        stage.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {stage.completed ? '✅' : '⏳'}
                      </div>
                      <div>
                        <p className="font-medium">{stage.stage}</p>
                        <p className="text-sm text-gray-500">
                          {stage.completed ? `Completed ${stage.completedAt || 'recently'}` : 'Not started'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {stage.completed && stage.score && (
                        <span className="text-sm font-medium text-green-600">{stage.score}%</span>
                      )}
                      <Link 
                        href={`/${stage.stage.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`px-4 py-2 rounded-lg text-sm transition ${
                          stage.completed 
                            ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {stage.completed ? 'Review' : 'Start'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions & Resources */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/user-profile" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <span className="text-2xl mb-2">👤</span>
                    <span className="text-sm font-medium">Complete Profile</span>
                  </Link>
                  <Link href="/mock-interview" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <span className="text-2xl mb-2">🎤</span>
                    <span className="text-sm font-medium">Book Mock Interview</span>
                  </Link>
                  <Link href="/points" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <span className="text-2xl mb-2">⭐</span>
                    <span className="text-sm font-medium">View Points</span>
                  </Link>
                  <Link href="/support" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <span className="text-2xl mb-2">🛟</span>
                    <span className="text-sm font-medium">Get Support</span>
                  </Link>
                </div>
              </div>

              {/* Tips & Resources */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">💡 Interview Tips</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Practice the STAR method for behavioral questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Research the company and role thoroughly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Prepare thoughtful questions for the interviewer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Test your tech setup before virtual interviews</span>
                  </li>
                </ul>
                <Link href="/support" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                  More Resources
                </Link>
              </div>

              {/* Contact Support */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our support team is here to help you succeed. Reach out anytime!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <a href="mailto:support@prepcampus.com" className="text-blue-600 hover:text-blue-700">
                      support@prepcampus.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💬</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Start Live Chat
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span className="text-gray-600">1-800-PREP-123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}