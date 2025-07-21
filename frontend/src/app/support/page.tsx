'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function Support() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const supportCategories = [
    { id: 'general', name: 'General', icon: '💬' },
    { id: 'technical', name: 'Technical Issues', icon: '🔧' },
    { id: 'billing', name: 'Billing & Payments', icon: '💳' },
    { id: 'account', name: 'Account & Profile', icon: '👤' },
    { id: 'features', name: 'Features & Usage', icon: '⚡' }
  ];

  const faqData = {
    general: [
      {
        question: "How do I get started with PrepCampus?",
        answer: "After creating your account, complete your profile and start with the Initial Screening to assess your current level. Then proceed with our structured interview preparation modules."
      },
      {
        question: "What makes PrepCampus different from other platforms?",
        answer: "PrepCampus offers personalized interview preparation with real-time feedback, industry expert mock interviews, and comprehensive skill tracking tailored to your career goals."
      },
      {
        question: "How long does it take to see improvement?",
        answer: "Most users see significant improvement within 2-4 weeks of consistent practice. Our adaptive learning system tracks your progress and adjusts difficulty accordingly."
      }
    ],
    technical: [
      {
        question: "I'm having trouble with video uploads during mock interviews",
        answer: "Ensure your browser allows camera access and you have a stable internet connection. Supported formats include MP4, MOV, and WebM. File size should be under 100MB."
      },
      {
        question: "The coding environment is not loading properly",
        answer: "Try refreshing the page and clearing your browser cache. Make sure JavaScript is enabled. If issues persist, try using Chrome or Firefox browsers."
      },
      {
        question: "My progress is not being saved",
        answer: "This usually happens due to poor internet connection. Ensure you have stable internet and avoid closing the browser tab during exercises."
      }
    ],
    billing: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers."
      },
      {
        question: "Can I get a refund if I'm not satisfied?",
        answer: "Yes! We offer a 30-day money-back guarantee. Contact our support team within 30 days of purchase for a full refund."
      },
      {
        question: "How do I update my billing information?",
        answer: "Go to Settings > Billing & Subscription to update your payment method, billing address, or subscription preferences."
      }
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer: "Click 'Forgot Password' on the login page and follow the email instructions. You can also change your password in Settings > Security."
      },
      {
        question: "Can I change my email address?",
        answer: "Yes, go to Settings > Profile and update your email. You'll need to verify the new email address before the change takes effect."
      },
      {
        question: "How do I delete my account?",
        answer: "Contact our support team to delete your account. Please note that this action is irreversible and will remove all your progress data."
      }
    ],
    features: [
      {
        question: "How do mock interviews work?",
        answer: "Book a session with industry experts who will conduct realistic interviews via video call. You'll receive detailed feedback and improvement suggestions within 24 hours."
      },
      {
        question: "What is the points system?",
        answer: "Earn points by completing exercises, maintaining login streaks, and achieving milestones. Use points to unlock premium features and rewards."
      },
      {
        question: "How are certificates verified?",
        answer: "Our certificates include unique verification codes and are blockchain-verified. Employers can verify authenticity through our verification portal."
      }
    ]
  };

  const contactOptions = [
    {
      type: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      icon: "💬",
      action: "Start Chat"
    },
    {
      type: "Email Support", 
      description: "Send us detailed questions via email",
      availability: "Response within 4 hours",
      icon: "📧",
      action: "Send Email"
    },
    {
      type: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 9AM-6PM EST",
      icon: "📞",
      action: "Call Now"
    },
    {
      type: "Video Call",
      description: "Schedule a personalized support session",
      availability: "By appointment",
      icon: "📹",
      action: "Schedule Call"
    }
  ];

  const filteredFAQs = faqData[selectedCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

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
            <h1 className="text-xl font-semibold text-gray-900">Support Center</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.firstName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {contactOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">{option.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{option.type}</h3>
              <p className="text-sm text-gray-600 mb-3">{option.description}</p>
              <p className="text-xs text-green-600 mb-4">{option.availability}</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                {option.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
              
              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">Didn't find what you're looking for?</p>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  📝 Submit a Support Request
                </button>
              </div>
            </div>
          </div>

          {/* Quick Info & Status */}
          <div className="lg:col-span-1 space-y-6">
            {/* System Status */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Platform</span>
                  <span className="flex items-center text-green-600 text-sm">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mock Interviews</span>
                  <span className="flex items-center text-green-600 text-sm">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Code Execution</span>
                  <span className="flex items-center text-green-600 text-sm">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Running
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Video Processing</span>
                  <span className="flex items-center text-yellow-600 text-sm">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    Delayed
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="mr-3">📧</span>
                  <span>support@prepcampus.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📞</span>
                  <span>1-800-PREP-123</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">💬</span>
                  <span>Live chat available 24/7</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">🕒</span>
                  <span>Response time: &lt; 4 hours</span>
                </div>
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Popular Articles</h3>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                  📚 Getting Started Guide
                </a>
                <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                  🎤 Mock Interview Best Practices
                </a>
                <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                  💻 Technical Interview Tips
                </a>
                <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                  🏆 Points and Rewards System
                </a>
                <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                  🎓 Certificate Verification
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Submit Support Request</h3>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of your issue"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="general">General Question</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing & Payment</option>
                    <option value="account">Account & Profile</option>
                    <option value="feature">Feature Request</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                    placeholder="Please describe your issue in detail..."
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Submit Request
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
