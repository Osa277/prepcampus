import React from "react";
import Link from "next/link";

export default function UserProfile() {
  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-600 text-white flex flex-col p-6">
        <Link href="/" className="font-bold text-xl mb-8 flex items-center space-x-2 hover:opacity-80 transition">
          <span className="text-2xl">💡</span>
          <span>
            Prep<span className="text-white">Interview</span>
          </span>
        </Link>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Main Menu</div>
        <nav className="flex-1 space-y-1 mb-6">
          <Link href="/dashboard" className="flex items-center gap-2 py-2 px-4 rounded bg-white text-blue-600 font-semibold">
            <span>🏠</span> Dashboard
          </Link>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>👤</span> User Management
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>📄</span> Report
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🔔</span> Notifications
          </a>
        </nav>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Account Management</div>
        <div className="mb-6 space-y-1">
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🛟</span> Support
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>⚙️</span> Settings
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🚪</span> Log out
          </a>
        </div>
        <div className="mt-auto flex items-center space-x-2 pt-6 border-t border-blue-400">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Admin"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">Alex Johnson</div>
            <div className="text-xs">Admin</div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <section className="flex-1 bg-gray-50 p-0">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-10 py-6 border-b border-gray-200 bg-white">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search anything here..."
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none"
            />
            <span className="text-blue-600 text-2xl">🔔</span>
            <span className="text-blue-600 text-2xl">👤</span>
          </div>
        </div>
        {/* User Details */}
        <div className="flex items-center justify-between px-10 mt-8 mb-4">
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/31.jpg"
              alt="User"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg">
                John Doe (john@example.com)
              </div>
              <div className="text-xs text-gray-700 mt-1">Registered on: July 10, 2024</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-1">
              Screening Pro
            </span>
            <span className="text-gray-500 text-xs">Level 1</span>
          </div>
        </div>
        {/* Progress Overview */}
        <div className="px-10">
          <h2 className="font-semibold mb-2">Progress Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-blue-100 border-2 border-blue-600 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl text-blue-600 mb-2">📝</span>
              <span className="font-semibold text-blue-700 mb-1">Initial Screening</span>
              <span className="text-xs text-gray-600 mb-1">0 of 2 levels completed</span>
              <span className="text-xs text-gray-600">0 badges earned</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl text-blue-600 mb-2">💻</span>
              <span className="font-semibold text-gray-700 mb-1">Technical Interview</span>
              <span className="text-xs text-gray-600 mb-1">0 of 7 levels completed</span>
              <span className="text-xs text-gray-600">0 badges earned</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl text-blue-600 mb-2">💬</span>
              <span className="font-semibold text-gray-700 mb-1">Behavioral Interview</span>
              <span className="text-xs text-gray-600 mb-1">0 of 7 levels completed</span>
              <span className="text-xs text-gray-600">0 badges earned</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl text-blue-600 mb-2">🔎</span>
              <span className="font-semibold text-gray-700 mb-1">Deep Dive Interview</span>
              <span className="text-xs text-gray-600 mb-1">0 of 7 levels completed</span>
              <span className="text-xs text-gray-600">0 badges earned</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl text-blue-600 mb-2">🎤</span>
              <span className="font-semibold text-gray-700 mb-1">Mock Interview</span>
              <span className="text-xs text-gray-600 mb-1">0 of 0 levels completed</span>
              <span className="text-xs text-gray-600">0 badges earned</span>
            </div>
          </div>
          {/* Interview History & Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Interview History</h3>
              <div className="bg-blue-100 rounded-lg p-3 mb-2 flex items-center gap-2">
                <span className="text-blue-600">📝</span>
                <span className="text-sm">Level 1: Initial Screening (Completed)</span>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center gap-2 border border-gray-200">
                <span className="text-blue-600">💻</span>
                <span className="text-sm">Technical Interview (In Progress)</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Feedback Received</h3>
              <div className="bg-blue-100 rounded-lg p-3 mb-2 flex items-center gap-2">
                <span className="text-blue-600">📝</span>
                <span className="text-sm">Level 1: Initial Screening (Completed)</span>
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center gap-2 border border-gray-200">
                <span className="text-blue-600">💻</span>
                <span className="text-sm">Technical Interview (In Progress)</span>
              </div>
            </div>
          </div>
          {/* Generate Report */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <button className="flex-1 border border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
              User Progress
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
              Interview Outcomes
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
              Feedback Analysis
            </button>
          </div>
        </div>
        <Link href="/admin-dashboard">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-4">
            Go to Admin Dashboard
          </button>
        </Link>
      </section>
    </main>
  );
}