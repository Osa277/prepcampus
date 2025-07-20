'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();

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

  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-600 text-white flex flex-col p-6">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <Link href="/">
            <img src="/Frame 1.png" alt="Logo" className="h-8 w-auto mr-2 cursor-pointer" />
          </Link>
        </div>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Main Menu</div>
        <nav className="flex-1 space-y-1 mb-6">
          <a className="flex items-center gap-2 py-2 px-4 rounded bg-white text-blue-600 font-semibold">
            <span>🏠</span> Dashboard
          </a>
          <Link href="initial-screening" className="flex items-center gap-2 py-2 px-4 rounde hover:bg-white-500">
            <span>📝</span> Initial Screening
          </Link>
          <Link href="technical-interview" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-white-700">
            <span>💻</span> Technical Interview
          </Link>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-white-500">
            <span>💬</span> Behavioral Interview
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🔎</span> Deep Dive Interview
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🎤</span> Mock Interview
            <span className="ml-2 text-xs bg-white text-blue-600 px-2 py-0.5 rounded">Premium</span>
          </a>
        </nav>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Rewards Summary</div>
        <div className="mb-6 space-y-1">
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>⭐</span> Points Earned
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🎓</span> Certificates
          </a>
        </div>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Account Management</div>
        <div className="mb-6 space-y-1">
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🛟</span> Support
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>⚙️</span> Settings
          </a>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500"
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
      <section className="flex-1 bg-gray-50 p-0">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-10 py-6 border-b border-gray-200 bg-white">
          <input
            type="text"
            placeholder="Search anything here..."
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none bg-blue-50"
            style={{ minWidth: 260 }}
          />
          <span className="text-blue-600 text-2xl ml-4">🔔</span>
        </div>
        {/* Main Content Grid */}
        <div className="px-10 py-10">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to PrepInterview, {user?.firstName || 'User'}!
          </h1>
          <p className="mb-8 text-gray-700">
            We're thrilled to have you on board! Let's get you started on the path to acing your next interview.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Illustration */}
            <div className="flex flex-col items-center">
              <img
                src="/interview-illustration.png"
                alt="Interview Illustration"
                className="w-[320px] h-[286px] object-contain mb-8"
              />
              <div className="bg-blue-100 rounded-lg p-6 w-full">
                <h3 className="font-semibold mb-2">Book A Mockup Interview</h3>
                <p className="text-gray-700 mb-2 text-sm">
                  Get invaluable feedback from industry experts. Experience a real interview setting and boost your confidence.
                </p>
                <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-13">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-semibold mb-2">Your Interview Success Journey Starts Here!</h2>
                <p className="mb-4 text-gray-600">
                  Hi {user?.firstName || 'User'}, Welcome to the PrepInterview family! Your journey to mastering technical interviews begins here.<br />
                  We're committed to helping you succeed every step of the way.
                </p>
                <div className="flex items-center mb-2">
                  <span className="text-blue-600 mr-2">🪜</span>
                  <span className="font-medium text-blue-600">Step 1</span>
                  <span className="ml-2 text-gray-700">Complete your profile</span>
                </div>
                <button className="w-full px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Complete profile
                </button>
              </div>
              <div className="bg-blue-100 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Need Help? We're Here for You!</h3>
                <p className="text-gray-700 mb-2 text-sm">
                  Facing any issues or have questions? Our support team is ready to assist you.
                </p>
                <div className="text-sm">
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <span>Email: support@prepinterview.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>Phone: 1-800-123-4567</span>
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