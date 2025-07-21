'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function Points() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // Mock user points data
  const userStats = {
    totalPoints: 2450,
    currentLevel: "Intermediate",
    nextLevel: "Advanced",
    pointsToNextLevel: 550,
    rank: "#127",
    totalUsers: 15000
  };

  const pointsHistory = [
    {
      id: 1,
      activity: "Completed Technical Interview Practice",
      points: 100,
      date: "2024-12-20",
      category: "interview",
      icon: "💻"
    },
    {
      id: 2,
      activity: "Solved 5 Algorithm Problems",
      points: 75,
      date: "2024-12-19",
      category: "coding",
      icon: "🧮"
    },
    {
      id: 3,
      activity: "Finished Behavioral Interview Module",
      points: 50,
      date: "2024-12-18",
      category: "interview",
      icon: "💬"
    },
    {
      id: 4,
      activity: "Daily Login Streak (7 days)",
      points: 25,
      date: "2024-12-17",
      category: "engagement",
      icon: "🔥"
    },
    {
      id: 5,
      activity: "Profile 100% Complete",
      points: 40,
      date: "2024-12-16",
      category: "profile",
      icon: "👤"
    },
    {
      id: 6,
      activity: "Mock Interview Completed",
      points: 200,
      date: "2024-12-15",
      category: "interview",
      icon: "🎭"
    },
    {
      id: 7,
      activity: "System Design Practice",
      points: 80,
      date: "2024-12-14",
      category: "coding",
      icon: "🏗️"
    },
    {
      id: 8,
      activity: "Referred a Friend",
      points: 150,
      date: "2024-12-13",
      category: "referral",
      icon: "👥"
    }
  ];

  const rewards = [
    {
      id: 1,
      title: "Free Mock Interview",
      description: "1-on-1 session with industry expert",
      pointsRequired: 500,
      category: "premium",
      icon: "🎤",
      available: true
    },
    {
      id: 2,
      title: "Resume Review Service",
      description: "Professional resume review and feedback",
      pointsRequired: 300,
      category: "career",
      icon: "📄",
      available: true
    },
    {
      id: 3,
      title: "Priority Support Access",
      description: "24/7 priority customer support",
      pointsRequired: 200,
      category: "support",
      icon: "🚀",
      available: true
    },
    {
      id: 4,
      title: "Exclusive Tech Webinar",
      description: "Access to monthly tech industry webinars",
      pointsRequired: 400,
      category: "learning",
      icon: "📺",
      available: true
    },
    {
      id: 5,
      title: "Career Mentorship Session",
      description: "1-hour career guidance with senior engineer",
      pointsRequired: 800,
      category: "premium",
      icon: "🧭",
      available: false
    },
    {
      id: 6,
      title: "FAANG Interview Prep Course",
      description: "Comprehensive big tech interview preparation",
      pointsRequired: 1200,
      category: "premium",
      icon: "🎯",
      available: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Activities', count: pointsHistory.length },
    { id: 'interview', name: 'Interviews', count: pointsHistory.filter(p => p.category === 'interview').length },
    { id: 'coding', name: 'Coding', count: pointsHistory.filter(p => p.category === 'coding').length },
    { id: 'engagement', name: 'Engagement', count: pointsHistory.filter(p => p.category === 'engagement').length },
    { id: 'profile', name: 'Profile', count: pointsHistory.filter(p => p.category === 'profile').length }
  ];

  const filteredHistory = selectedCategory === 'all' 
    ? pointsHistory 
    : pointsHistory.filter(item => item.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
                ← Back to Dashboard
              </Link>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Points & Rewards</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.firstName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Points Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Main Points Card */}
          <div className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Your Points</h2>
              <span className="text-3xl">⭐</span>
            </div>
            <div className="text-4xl font-bold mb-2">{userStats.totalPoints.toLocaleString()}</div>
            <div className="text-blue-100 mb-4">Total Points Earned</div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Level: {userStats.currentLevel}</span>
                <span className="text-sm">{userStats.pointsToNextLevel} to {userStats.nextLevel}</span>
              </div>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-gray-900">{userStats.rank}</div>
              <div className="text-sm text-gray-600">Your Rank</div>
              <div className="text-xs text-gray-500 mt-1">Out of {userStats.totalUsers.toLocaleString()} users</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-2xl font-bold text-green-600">+125</div>
              <div className="text-sm text-gray-600">This Week</div>
              <div className="text-xs text-gray-500 mt-1">Points earned</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Points History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Points History</h2>
                <div className="text-sm text-gray-600">
                  Total: {filteredHistory.reduce((sum, item) => sum + item.points, 0)} points
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* History List */}
              <div className="space-y-4">
                {filteredHistory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{item.activity}</div>
                        <div className="text-sm text-gray-600">{item.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">+{item.points}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rewards Store */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Rewards Store</h2>
              
              <div className="space-y-4">
                {rewards.map((reward) => (
                  <div 
                    key={reward.id} 
                    className={`p-4 rounded-lg border-2 ${
                      reward.available 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl">{reward.icon}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        reward.available 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {reward.available ? 'Available' : 'Locked'}
                      </span>
                    </div>
                    
                    <h3 className="font-medium text-gray-900 mb-1">{reward.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">
                        {reward.pointsRequired} points
                      </span>
                      <button 
                        disabled={!reward.available}
                        className={`px-4 py-2 text-xs rounded font-medium ${
                          reward.available
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {reward.available ? 'Redeem' : 'Locked'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">💡 Earn More Points</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Complete interview practices (+50-100)</li>
                  <li>• Solve coding problems (+25-75)</li>
                  <li>• Daily login streak (+5-25)</li>
                  <li>• Refer friends (+150)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
