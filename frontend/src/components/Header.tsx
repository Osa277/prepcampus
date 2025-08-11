'use client';

import React, { useState } from "react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
          <span className="text-2xl">💡</span>
          <span className="font-bold text-blue-600 text-lg">Prep<span className="text-gray-900">Campus</span></span>
        </Link>
        
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
          >
            How it works
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('resources')} 
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
          >
            Resources
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
          >
            Pricing
          </button>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:block">
          <AuthButtons />
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('resources')} 
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
            >
              Resources
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
            >
              Pricing
            </button>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-200">
              <AuthButtons />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}