'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export default function AuthButtons() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex space-x-4">
        <div className="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Welcome, {user.firstname}!</span>
        <Link href="/dashboard">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Dashboard
          </button>
        </Link>
        <button
          onClick={logout}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex space-x-4">
      <Link href="/login">
        <button className="px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
          Sign In
        </button>
      </Link>
      <Link href="/signup">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
