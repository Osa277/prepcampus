import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row bg-white">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-20">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide mb-8">
            Smart Prep with AI.
          </span>
          <h1 className="mb-4">
            <span className="block text-4xl md:text-5xl font-bold text-blue-600 leading-tight mb-2">
              From Prep to Offer
            </span>
            <span className="block text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Ace Your Interviews<br />with AI-Powered Prep
            </span>
          </h1>
          <ul className="mb-10 mt-8 space-y-3">
            <li className="flex items-center text-lg text-gray-700">
              <span className="w-7 h-7 flex items-center justify-center bg-blue-50 rounded-full mr-3">
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="9" fill="#2563eb"/><path d="M6 9l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Interactive Video Interviews
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="w-7 h-7 flex items-center justify-center bg-blue-50 rounded-full mr-3">
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="9" fill="#2563eb"/><path d="M6 9l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              AI Feedback
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="w-7 h-7 flex items-center justify-center bg-blue-50 rounded-full mr-3">
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="9" fill="#2563eb"/><path d="M6 9l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Gamified Progress
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="w-7 h-7 flex items-center justify-center bg-blue-50 rounded-full mr-3">
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="9" fill="#2563eb"/><path d="M6 9l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Expert Mock Interviews
            </li>
          </ul>
          <Link href="/dashboard">
            <button className="w-60 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition">
              Try PrepInterview
            </button>
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center bg-transparent py-1 pr-8">
          <img
            src="/top.png"
            alt="Dashboard Preview"
            style={{ maxWidth: 520, width: "100%" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-600">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Questions</h3>
              <p className="text-gray-600 text-center">Practice with up-to-date interview questions from top companies.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-600">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600 text-center">Monitor your improvement and focus on your weak areas.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-600">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Feedback</h3>
              <p className="text-gray-600 text-center">Receive instant feedback to help you prepare better.</p>
            </div>
          </div>
        </div>

      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/login" className="flex flex-col items-center cursor-pointer group">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                <span className="text-xl text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">Sign Up</h3>
              <p className="text-gray-600 text-center">Create your free account to get started.</p>
            </Link>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Practice</h3>
              <p className="text-gray-600 text-center">Answer real interview questions and track your progress.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Succeed</h3>
              <p className="text-gray-600 text-center">Get feedback and ace your next interview!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center">
              <p className="text-gray-700 mb-4 text-center">
                “PrepInterview helped me land my dream job! The questions were spot on and the feedback was super helpful.”
              </p>
              <span className="font-semibold text-blue-600">— Alex J.</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center">
              <p className="text-gray-700 mb-4 text-center">
                “I loved tracking my progress and practicing real interview questions. Highly recommended!”
              </p>
              <span className="font-semibold text-blue-600">— Priya S.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8 mt-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-lg font-bold text-blue-600 mb-4 md:mb-0">PrepInterview</div>
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PrepInterview. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}