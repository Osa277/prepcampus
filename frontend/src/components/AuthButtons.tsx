'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export default function AuthButtons() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-24 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="w-full sm:w-24 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <span className="text-gray-800 font-medium text-base sm:text-lg text-center">Welcome, {user.firstName}!</span>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
          <Link href="/dashboard" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer touch-manipulation">
              Dashboard
            </button>
          </Link>
          <button
            onClick={logout}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-600 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-gray-700 active:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer touch-manipulation"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
      <Link href="/login" className="inline-block w-full sm:w-auto">
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer touch-manipulation">
          Sign In
        </button>
      </Link>
      <Link href="/signup" className="inline-block w-full sm:w-auto">
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer touch-manipulation">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
