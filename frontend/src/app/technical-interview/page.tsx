import React from "react";
import Link from "next/link";

export default function TechnicalInterview() {
  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-600 text-white flex flex-col p-6">
        <Link href="/" className="font-bold text-xl mb-8 flex items-center space-x-2 hover:opacity-80 transition">
          <span className="text-2xl">💡</span>
          <span>Logo</span>
        </Link>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Main Menu</div>
        <nav className="flex-1 space-y-1 mb-6">
          <Link href="/dashboard" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🏠</span> Dashboard
          </Link>
          <Link href="/initial-screening" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>📝</span> Initial Screening
          </Link>
          <Link href="/technical-interview" className="flex items-center gap-2 py-2 px-4 rounded bg-blue-700">
            <span>💻</span> Technical Interview
          </Link>
          <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>💬</span> Behavioral Interview
          </a>
          <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🔎</span> Deep Dive Interview
          </a>
          <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🎤</span> Mock Interview <span className="ml-2 text-xs bg-white text-blue-600 px-2 py-0.5 rounded">Premium</span>
          </a>
        </nav>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Rewards Summary</div>
        <div className="mb-6 space-y-1">
          <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>⭐</span> Points Earned
          </a>
          <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🎓</span> Certificates
          </a>
        </div>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Account Management</div>
        <div className="mb-6 space-y-1">
          <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🛟</span> Support
          </a>
          <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>⚙️</span> Settings
          </a>
          <a href="#" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🚪</span> Log out
          </a>
        </div>
        <div className="mt-auto flex items-center space-x-2 pt-6 border-t border-blue-400">
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">A</div>
          <div>
            <div className="font-semibold">Alex Johnson</div>
            <div className="text-xs">Web Developer</div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <section className="flex-1 bg-gray-50 p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-2xl font-bold">Technical Interview: Level 1</h1>
          <input
            type="text"
            placeholder="Search anything here..."
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row gap-8">
          {/* Question */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Question 1</span>
              <p className="mt-2 text-gray-800">
                Explain a challenging technical problem you solved and how you approached it.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded mb-4 text-sm text-gray-700">
              <span className="font-semibold">💡 Tip:</span> Structure your answer, mention technologies, and highlight your problem-solving process.
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Record</button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded">Playback</button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded">Re-record</button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded">Submit</button>
            </div>
            <div className="mt-4 text-sm text-gray-500">Question 1 of 2</div>
            <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Next</button>
          </div>
          {/* Video Placeholder */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full h-56 bg-blue-100 rounded-lg flex items-center justify-center relative">
              <span className="text-4xl text-blue-400">▶️</span>
              <span className="absolute top-2 right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded">REC</span>
            </div>
          </div>
        </div>
        <Link href="/admin-dashboard">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Admin Dashboard
          </button>
        </Link>
      </section>
    </main>
  );
}