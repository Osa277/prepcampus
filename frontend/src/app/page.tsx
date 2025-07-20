'use client';

import React from "react";
import Header from "../components/Header";
import ApiStatus from "../components/ApiStatus";
import AuthButtons from "../components/AuthButtons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      {/* API Status Section */}
      <section className="px-8 md:px-24 pt-6">
        <ApiStatus />
      </section>
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
          <AuthButtons />
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
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features to Ace Your Interviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to prepare, practice, and succeed in your interviews
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Video Interviews */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Video Interviews</h3>
              <p className="text-gray-600 mb-4">Practice with realistic video interviews powered by AI. Get comfortable with camera presence and body language.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time facial expression analysis</li>
                <li>• Voice tone and pace feedback</li>
                <li>• Professional presentation tips</li>
              </ul>
            </div>

            {/* Smart Question Bank */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Question Bank</h3>
              <p className="text-gray-600 mb-4">Access 1000+ curated interview questions from top tech companies, updated regularly.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• FAANG company questions</li>
                <li>• Behavioral & technical mix</li>
                <li>• Difficulty-based progression</li>
              </ul>
            </div>

            {/* Real-time Feedback */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-purple-100">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Feedback</h3>
              <p className="text-gray-600 mb-4">Get instant AI-powered feedback on your answers, communication style, and technical accuracy.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Detailed answer scoring</li>
                <li>• Communication analysis</li>
                <li>• Improvement suggestions</li>
              </ul>
            </div>

            {/* Progress Tracking */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-600 mb-4">Monitor your improvement with detailed analytics and personalized learning paths.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Performance analytics</li>
                <li>• Skill gap identification</li>
                <li>• Custom study plans</li>
              </ul>
            </div>

            {/* Mock Interviews */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mock Interviews</h3>
              <p className="text-gray-600 mb-4">Schedule one-on-one mock interviews with industry professionals from your target companies.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Industry expert interviewers</li>
                <li>• Company-specific preparation</li>
                <li>• Detailed feedback reports</li>
              </ul>
            </div>

            {/* Gamified Learning */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-100">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gamified Progress</h3>
              <p className="text-gray-600 mb-4">Stay motivated with achievement badges, streaks, and competitive leaderboards.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Achievement system</li>
                <li>• Daily challenge streaks</li>
                <li>• Global leaderboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How PrepCampus Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master your interview skills in 4 simple steps with our AI-powered platform
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {/* Step 1 */}
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-5/12 lg:pr-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">1</div>
                      <h3 className="text-2xl font-bold text-gray-900">Assessment & Profile Setup</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Take our comprehensive skills assessment to identify your strengths and areas for improvement. 
                      Set up your profile with target companies, roles, and experience level.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Technical skills evaluation</li>
                      <li>• Communication baseline</li>
                      <li>• Custom learning path creation</li>
                      <li>• Goal setting and timeline</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-5/12 lg:pl-8 mt-8 lg:mt-0">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl">
                    <div className="text-6xl text-center text-blue-600 mb-4">📊</div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-2">Smart Assessment</h4>
                      <p className="text-gray-600 text-sm">AI analyzes your current skill level across technical and soft skills</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="lg:flex lg:items-center lg:justify-between lg:flex-row-reverse">
                <div className="lg:w-5/12 lg:pl-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">2</div>
                      <h3 className="text-2xl font-bold text-gray-900">AI-Powered Practice</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Practice with our AI interviewer that adapts to your responses. Get real-time feedback on 
                      technical accuracy, communication style, and presentation skills.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Adaptive question difficulty</li>
                      <li>• Real-time facial analysis</li>
                      <li>• Voice and pace optimization</li>
                      <li>• Instant feedback reports</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-5/12 lg:pr-8 mt-8 lg:mt-0">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-xl">
                    <div className="text-6xl text-center text-green-600 mb-4">🤖</div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-2">AI Interviewer</h4>
                      <p className="text-gray-600 text-sm">Practice unlimited interviews with our intelligent AI system</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-5/12 lg:pr-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">3</div>
                      <h3 className="text-2xl font-bold text-gray-900">Expert Mock Interviews</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Schedule mock interviews with industry professionals from your target companies. 
                      Get authentic interview experience and detailed feedback.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• FAANG engineers & managers</li>
                      <li>• Company-specific scenarios</li>
                      <li>• Detailed evaluation reports</li>
                      <li>• Follow-up coaching sessions</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-5/12 lg:pl-8 mt-8 lg:mt-0">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-xl">
                    <div className="text-6xl text-center text-purple-600 mb-4">👥</div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-2">Expert Network</h4>
                      <p className="text-gray-600 text-sm">Connect with professionals from top tech companies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="lg:flex lg:items-center lg:justify-between lg:flex-row-reverse">
                <div className="lg:w-5/12 lg:pl-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">4</div>
                      <h3 className="text-2xl font-bold text-gray-900">Land Your Dream Job</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Apply your learned skills in real interviews with confidence. Track your interview 
                      performance and continue improving with our ongoing support.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Interview confidence boost</li>
                      <li>• Performance tracking</li>
                      <li>• Ongoing skill maintenance</li>
                      <li>• Career advancement support</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-5/12 lg:pr-8 mt-8 lg:mt-0">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-xl">
                    <div className="text-6xl text-center text-orange-600 mb-4">🎯</div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-2">Success Achievement</h4>
                      <p className="text-gray-600 text-sm">Land offers at your dream companies with confidence</p>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Learning Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to support your interview preparation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Interview Guides */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Guides</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides covering technical, behavioral, and system design interviews.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• FAANG Interview Strategies</li>
                <li>• Behavioral Question Frameworks</li>
                <li>• System Design Masterclass</li>
                <li>• Salary Negotiation Tips</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Access Guides
              </button>
            </div>

            {/* Video Tutorials */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Step-by-step video tutorials from industry experts and successful candidates.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Mock Interview Recordings</li>
                <li>• Problem-solving Walkthroughs</li>
                <li>• Communication Best Practices</li>
                <li>• Expert Interview Tips</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Watch Videos
              </button>
            </div>

            {/* Practice Problems */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practice Problems</h3>
              <p className="text-gray-600 mb-4">Curated collection of coding problems and system design challenges.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• LeetCode-style Problems</li>
                <li>• Company-specific Questions</li>
                <li>• System Design Cases</li>
                <li>• Detailed Solutions</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                Start Practicing
              </button>
            </div>

            {/* Templates & Checklists */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Templates & Checklists</h3>
              <p className="text-gray-600 mb-4">Ready-to-use templates and checklists for interview preparation.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Resume Templates</li>
                <li>• Interview Preparation Checklist</li>
                <li>• STAR Method Template</li>
                <li>• Follow-up Email Templates</li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                Download Templates
              </button>
            </div>

            {/* Company Insights */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Company Insights</h3>
              <p className="text-gray-600 mb-4">Deep insights into interview processes at top tech companies.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Company Culture Analysis</li>
                <li>• Interview Process Breakdowns</li>
                <li>• Salary & Benefits Data</li>
                <li>• Employee Reviews</li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">
                Explore Companies
              </button>
            </div>

            {/* Community Forum */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4l-4 4V8a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Forum</h3>
              <p className="text-gray-600 mb-4">Connect with peers, share experiences, and get support from the community.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Discussion Forums</li>
                <li>• Study Groups</li>
                <li>• Q&A Sessions</li>
                <li>• Success Stories</li>
              </ul>
              <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to fit your interview preparation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <p className="text-gray-600 mb-4">Perfect for getting started</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100 AI Practice Sessions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic Feedback Reports
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to Question Bank
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Progress Tracking
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email Support
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="bg-blue-600 rounded-xl shadow-xl border-2 border-blue-500 p-8 text-white relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-blue-100 mb-4">Best for serious preparation</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-blue-200">/month</span>
                </div>
                <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </button>
              </div>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited AI Practice Sessions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced AI Feedback
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2 Expert Mock Interviews
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Premium Resources Access
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Company-specific Prep
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For intensive preparation</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">$199</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Professional
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited Expert Interviews
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1-on-1 Career Coaching
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Resume Review Service
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Money-back Guarantee
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Can I cancel my subscription anytime?</h4>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing cycle.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer a free trial?</h4>
                <p className="text-gray-600">Yes! We offer a 7-day free trial for all new users. No credit card required.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">How does the AI feedback work?</h4>
                <p className="text-gray-600">Our AI analyzes your responses, body language, and communication style to provide detailed feedback on areas for improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8 mt-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-lg font-bold text-blue-600 mb-4 md:mb-0">PrepCampus</div>
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PrepCampus. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}