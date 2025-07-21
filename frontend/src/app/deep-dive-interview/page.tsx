'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function DeepDiveInterview() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const deepDiveTopics = [
    {
      id: 1,
      title: "System Design Deep Dive",
      icon: "🏗️",
      difficulty: "Advanced",
      duration: "45-60 mins",
      description: "Deep dive into large-scale system architecture",
      questions: [
        "Design a URL shortening service like bit.ly",
        "How would you design a chat application like WhatsApp?", 
        "Design a notification system for a social media platform",
        "How would you implement a rate limiting system?",
        "Design a content delivery network (CDN)"
      ]
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      icon: "🧮",
      difficulty: "Intermediate",
      duration: "30-45 mins", 
      description: "In-depth algorithm design and optimization",
      questions: [
        "Implement a LRU cache with O(1) operations",
        "Design an efficient algorithm for finding k closest points",
        "Explain your approach to solve the travelling salesman problem",
        "How would you implement a trie for autocomplete?",
        "Design a data structure for range sum queries"
      ]
    },
    {
      id: 3,
      title: "Database Design",
      icon: "🗄️",
      difficulty: "Advanced",
      duration: "30-45 mins",
      description: "Database schema design and optimization",
      questions: [
        "Design a database schema for an e-commerce platform",
        "How would you handle database sharding for a growing application?",
        "Explain ACID properties and their trade-offs",
        "Design indexes for optimal query performance",
        "How would you implement database replication?"
      ]
    },
    {
      id: 4,
      title: "Code Architecture",
      icon: "🏛️",
      difficulty: "Advanced", 
      duration: "45-60 mins",
      description: "Software architecture patterns and best practices",
      questions: [
        "Explain microservices vs monolithic architecture",
        "How would you implement the Observer pattern?",
        "Design a plugin architecture for extensibility",
        "Explain SOLID principles with practical examples",
        "How would you implement dependency injection?"
      ]
    }
  ];

  const startDeepDive = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const nextQuestion = () => {
    if (currentQuestion < selectedTopic.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const updateAnswer = (questionIndex, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

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
            <h1 className="text-xl font-semibold text-gray-900">Deep Dive Interview</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.firstName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedTopic ? (
          /* Topic Selection */
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Deep Dive Topic</h2>
              <p className="text-lg text-gray-600">
                Select a topic for an intensive technical deep dive session
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deepDiveTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer border-2 border-gray-200 hover:border-blue-300"
                  onClick={() => startDeepDive(topic)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{topic.icon}</span>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          topic.difficulty === 'Advanced' 
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {topic.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {topic.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {topic.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        ⏱️ {topic.duration}
                      </span>
                      <span className="flex items-center">
                        📝 {topic.questions.length} questions
                      </span>
                    </div>
                    
                    <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      Start Deep Dive
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Deep Dive Session */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold flex items-center">
                    {selectedTopic.icon} {selectedTopic.title}
                  </h2>
                  <span className="text-sm text-gray-600">
                    Question {currentQuestion + 1} of {selectedTopic.questions.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / selectedTopic.questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Question */}
              <div className="mb-8">
                <div className="p-6 bg-blue-50 rounded-lg mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Deep Dive Question {currentQuestion + 1}:
                  </h3>
                  <p className="text-gray-800">
                    {selectedTopic.questions[currentQuestion]}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Detailed Response:
                    </label>
                    <textarea
                      value={answers[currentQuestion] || ''}
                      onChange={(e) => updateAnswer(currentQuestion, e.target.value)}
                      placeholder="Provide a comprehensive answer with examples, trade-offs, and alternative approaches..."
                      className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">💡 Deep Dive Tips:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Explain your thought process step by step</li>
                      <li>• Discuss trade-offs and alternative solutions</li>
                      <li>• Include real-world examples and edge cases</li>
                      <li>• Show scalability considerations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    currentQuestion === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  ← Previous Question
                </button>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                  >
                    🏠 Choose Different Topic
                  </button>
                  
                  {currentQuestion === selectedTopic.questions.length - 1 ? (
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
                      ✅ Complete Deep Dive
                    </button>
                  ) : (
                    <button
                      onClick={nextQuestion}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                      Next Question →
                    </button>
                  )}
                </div>
              </div>

              {/* Question Overview */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Session Overview:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {selectedTopic.questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuestion(index)}
                      className={`p-2 rounded text-sm font-medium ${
                        index === currentQuestion
                          ? 'bg-blue-600 text-white'
                          : answers[index]
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      Q{index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
