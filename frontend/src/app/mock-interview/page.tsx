'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function MockInterview() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const mockInterviewPackages = [
    {
      id: 1,
      name: "Technical Interview",
      price: "$49",
      duration: "60 minutes",
      type: "1-on-1 with Senior Engineer",
      features: [
        "Live coding session",
        "Data structures & algorithms",
        "System design discussion",
        "Code review and feedback",
        "Detailed performance report",
        "Follow-up action plan"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Full Stack Interview",
      price: "$89",
      duration: "90 minutes", 
      type: "1-on-1 with Tech Lead",
      features: [
        "Frontend & backend coding",
        "System architecture design",
        "Database design questions",
        "Best practices discussion",
        "Real-world scenario simulation",
        "Comprehensive feedback report",
        "30-day follow-up session"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Behavioral + Technical",
      price: "$79",
      duration: "75 minutes",
      type: "1-on-1 with Hiring Manager",
      features: [
        "Behavioral interview simulation",
        "Technical problem solving",
        "Communication skills assessment",
        "Leadership scenarios",
        "Company culture fit evaluation",
        "Interview performance analysis"
      ],
      popular: false
    },
    {
      id: 4,
      name: "FAANG Prep Premium",
      price: "$149",
      duration: "120 minutes",
      type: "1-on-1 with FAANG Engineer",
      features: [
        "Big Tech interview simulation",
        "Advanced system design",
        "Coding under pressure",
        "Bar raiser questions",
        "Salary negotiation tips",
        "Multiple rounds simulation",
        "Personalized study plan",
        "1 month mentorship"
      ],
      popular: false
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const availableDates = [
    "Today", "Tomorrow", "Dec 23", "Dec 24", "Dec 25", "Dec 26", "Dec 27"
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
                ← Back to Dashboard
              </Link>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Mock Interview Booking</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.firstName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showBooking ? (
          /* Package Selection */
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Mock Interview Package</h2>
              <p className="text-lg text-gray-600">
                Get personalized feedback from industry experts and boost your interview confidence
              </p>
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                ⭐ Premium Feature - Professional Interview Coaching
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mockInterviewPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-white rounded-lg shadow-lg border-2 transition-all ${
                    pkg.popular 
                      ? 'border-blue-500 scale-105' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-blue-600 mb-1">{pkg.price}</div>
                      <div className="text-sm text-gray-600">{pkg.duration}</div>
                      <div className="text-sm text-gray-500">{pkg.type}</div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setShowBooking(true);
                      }}
                      className={`w-full px-6 py-3 rounded-lg font-medium transition ${
                        pkg.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Book This Package
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <span className="text-3xl mb-2 block">🎯</span>
                <h3 className="font-semibold mb-2">Expert Interviewers</h3>
                <p className="text-sm text-gray-600">Learn from engineers at top tech companies</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <span className="text-3xl mb-2 block">📊</span>
                <h3 className="font-semibold mb-2">Detailed Feedback</h3>
                <p className="text-sm text-gray-600">Get comprehensive performance analysis</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <span className="text-3xl mb-2 block">🚀</span>
                <h3 className="font-semibold mb-2">Career Growth</h3>
                <p className="text-sm text-gray-600">Accelerate your interview success rate</p>
              </div>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Book Your Mock Interview</h2>
                <button
                  onClick={() => setShowBooking(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  ← Change Package
                </button>
              </div>

              {/* Selected Package Summary */}
              <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-900">{selectedPackage?.name}</h3>
                    <p className="text-blue-700">{selectedPackage?.duration} • {selectedPackage?.type}</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{selectedPackage?.price}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Date & Time Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Dates
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableDates.map((date, index) => (
                        <button
                          key={index}
                          className="p-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-sm"
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          className="p-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-sm"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={`${user?.firstName || ''} ${user?.lastName || ''}`}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email || ''}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Target Company/Role
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Google Software Engineer"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests/Focus Areas
                      </label>
                      <textarea
                        placeholder="Any specific topics you'd like to focus on..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-yellow-800 text-sm">
                    💳 Secure payment processing via Stripe. Your interview will be confirmed immediately after payment.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">Total: {selectedPackage?.price}</p>
                    <p className="text-sm text-gray-600">One-time payment • 100% money-back guarantee</p>
                  </div>
                  <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
                    💳 Complete Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
