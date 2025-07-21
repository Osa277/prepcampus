'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function BehavioralInterview() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [timer, setTimer] = useState(120); // 2 minutes
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const behavioralQuestions = [
    {
      id: 1,
      category: "Leadership",
      question: "Tell me about a time when you had to lead a team through a difficult project.",
      tips: "Use the STAR method: Situation, Task, Action, Result"
    },
    {
      id: 2,
      category: "Problem Solving",
      question: "Describe a situation where you had to solve a complex problem with limited resources.",
      tips: "Focus on your analytical thinking and resourcefulness"
    },
    {
      id: 3,
      category: "Teamwork",
      question: "Give me an example of a time when you had to work with a difficult team member.",
      tips: "Emphasize communication skills and conflict resolution"
    },
    {
      id: 4,
      category: "Adaptability",
      question: "Tell me about a time when you had to quickly adapt to a significant change at work.",
      tips: "Show flexibility and positive attitude towards change"
    },
    {
      id: 5,
      category: "Achievement",
      question: "Describe your greatest professional accomplishment.",
      tips: "Quantify your impact and explain the significance"
    }
  ];

  const startPractice = (question) => {
    setSelectedQuestion(question);
    setTimer(120);
    setAnswer('');
  };

  const startRecording = () => {
    setIsRecording(true);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRecording(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            <h1 className="text-xl font-semibold text-gray-900">Behavioral Interview Practice</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.firstName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Question List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                💬 Behavioral Questions
              </h2>
              <div className="space-y-3">
                {behavioralQuestions.map((q) => (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedQuestion?.id === q.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => startPractice(q)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {q.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                      {q.question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Practice Area */}
          <div className="lg:col-span-2">
            {selectedQuestion ? (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Practice Session</h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Time Remaining:</span>
                    <span className={`text-lg font-mono ${timer <= 30 ? 'text-red-600' : 'text-blue-600'}`}>
                      {formatTime(timer)}
                    </span>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {selectedQuestion.category}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    {selectedQuestion.question}
                  </h3>
                  <p className="text-sm text-gray-600">
                    💡 Tip: {selectedQuestion.tips}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Answer (Practice your response)
                    </label>
                    <textarea
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Start typing your answer or use the voice recording feature..."
                      className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={startRecording}
                      disabled={isRecording}
                      className={`px-6 py-3 rounded-lg font-medium ${
                        isRecording
                          ? 'bg-red-600 text-white cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isRecording ? '🔴 Recording...' : '🎤 Start Voice Practice'}
                    </button>
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
                      ✅ Submit Answer
                    </button>
                    <button 
                      onClick={() => setSelectedQuestion(null)}
                      className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium"
                    >
                      📝 Choose Another Question
                    </button>
                  </div>
                </div>

                {/* STAR Method Guide */}
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">📋 STAR Method Framework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-600">Situation:</strong>
                      <p className="text-gray-600">Set the context</p>
                    </div>
                    <div>
                      <strong className="text-green-600">Task:</strong>
                      <p className="text-gray-600">Describe your responsibility</p>
                    </div>
                    <div>
                      <strong className="text-purple-600">Action:</strong>
                      <p className="text-gray-600">Explain what you did</p>
                    </div>
                    <div>
                      <strong className="text-orange-600">Result:</strong>
                      <p className="text-gray-600">Share the outcome</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="max-w-md mx-auto">
                  <h2 className="text-xl font-semibold mb-4">Ready to Practice Behavioral Questions?</h2>
                  <p className="text-gray-600 mb-6">
                    Select a question from the left panel to start practicing your behavioral interview responses.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium">🎯 Focused Practice</span>
                      <p className="text-gray-600 mt-1">Choose specific question categories</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <span className="font-medium">⏰ Timed Sessions</span>
                      <p className="text-gray-600 mt-1">Practice within time constraints</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
