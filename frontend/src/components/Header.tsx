import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
        <span className="text-2xl">💡</span>
        <span className="font-bold text-blue-600 text-lg">Prep<span className="text-gray-900">Interview</span></span>
      </Link>
      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-blue-600">How it works</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Resources</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
      </nav>
      {/* Auth Buttons */}
      <div className="space-x-4">
        <Link href="/login">
          <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
            Log in
          </button>
        </Link>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Get started
        </button>
      </div>
    </header>
  );
}