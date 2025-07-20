'use client';

import React from "react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
        <span className="text-2xl">💡</span>
        <span className="font-bold text-blue-600 text-lg">Prep<span className="text-gray-900">Campus</span></span>
      </Link>
      
      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8">
        <button 
          onClick={() => scrollToSection('how-it-works')} 
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
        >
          How it works
        </button>
        <button 
          onClick={() => scrollToSection('features')} 
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
        >
          Features
        </button>
        <button 
          onClick={() => scrollToSection('resources')} 
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
        >
          Resources
        </button>
        <button 
          onClick={() => scrollToSection('pricing')} 
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
        >
          Pricing
        </button>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Auth Buttons */}
      <div className="hidden md:block">
        <AuthButtons />
      </div>
    </header>
  );
}