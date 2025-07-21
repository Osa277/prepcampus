'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function Certificates() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('earned');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const earnedCertificates = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      issueDate: "2024-12-15",
      validUntil: "2025-12-15",
      score: 92,
      level: "Beginner",
      skills: ["Variables", "Functions", "DOM Manipulation", "Event Handling"],
      status: "verified",
      certificateId: "JS-FUND-2024-001",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "React Development",
      issueDate: "2024-12-10",
      validUntil: "2025-12-10",
      score: 88,
      level: "Intermediate",
      skills: ["Components", "State Management", "Hooks", "Props"],
      status: "verified",
      certificateId: "REACT-DEV-2024-002",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Algorithm & Data Structures",
      issueDate: "2024-12-05",
      validUntil: "2025-12-05",
      score: 95,
      level: "Advanced",
      skills: ["Sorting", "Searching", "Trees", "Dynamic Programming"],
      status: "verified",
      certificateId: "ALGO-DS-2024-003",
      downloadUrl: "#"
    }
  ];

  const availableCertificates = [
    {
      id: 4,
      title: "Node.js Backend Development",
      description: "Master server-side JavaScript development",
      estimatedTime: "4-6 weeks",
      level: "Intermediate",
      prerequisites: ["JavaScript Fundamentals"],
      topics: ["Express.js", "APIs", "Database Integration", "Authentication"],
      progress: 45
    },
    {
      id: 5,
      title: "System Design Fundamentals",
      description: "Learn to design scalable systems",
      estimatedTime: "6-8 weeks",
      level: "Advanced",
      prerequisites: ["Algorithm & Data Structures"],
      topics: ["Load Balancing", "Database Design", "Caching", "Microservices"],
      progress: 0
    },
    {
      id: 6,
      title: "Full Stack Web Development",
      description: "Complete web development mastery",
      estimatedTime: "8-12 weeks",
      level: "Advanced",
      prerequisites: ["JavaScript Fundamentals", "React Development", "Node.js Backend"],
      topics: ["Frontend", "Backend", "Databases", "Deployment"],
      progress: 0
    },
    {
      id: 7,
      title: "DevOps & Cloud Computing",
      description: "Modern deployment and infrastructure",
      estimatedTime: "6-8 weeks",
      level: "Advanced",
      prerequisites: ["Node.js Backend Development"],
      topics: ["Docker", "AWS/Azure", "CI/CD", "Monitoring"],
      progress: 0
    },
    {
      id: 8,
      title: "Mobile App Development",
      description: "React Native mobile development",
      estimatedTime: "6-10 weeks",
      level: "Intermediate",
      prerequisites: ["React Development"],
      topics: ["React Native", "Navigation", "State Management", "App Store"],
      progress: 20
    }
  ];

  const certificateStats = {
    totalEarned: earnedCertificates.length,
    totalAvailable: availableCertificates.length,
    averageScore: Math.round(earnedCertificates.reduce((sum, cert) => sum + cert.score, 0) / earnedCertificates.length),
    completionRate: Math.round((earnedCertificates.length / (earnedCertificates.length + availableCertificates.length)) * 100)
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
            <h1 className="text-xl font-semibold text-gray-900">Certificates</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.firstName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{certificateStats.totalEarned}</div>
            <div className="text-sm text-gray-600">Certificates Earned</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{certificateStats.averageScore}%</div>
            <div className="text-sm text-gray-600">Average Score</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{certificateStats.completionRate}%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{certificateStats.totalAvailable}</div>
            <div className="text-sm text-gray-600">Available Tracks</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setSelectedTab('earned')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'earned'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🏆 Earned Certificates ({earnedCertificates.length})
              </button>
              <button
                onClick={() => setSelectedTab('available')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'available'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                📚 Available Tracks ({availableCertificates.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'earned' ? (
              /* Earned Certificates */
              <div className="space-y-6">
                {earnedCertificates.length > 0 ? (
                  earnedCertificates.map((cert) => (
                    <div key={cert.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                            🎓
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                cert.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {cert.level}
                              </span>
                              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                ✓ Verified
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{cert.score}%</div>
                          <div className="text-sm text-gray-600">Score</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Certificate Details</h4>
                          <div className="space-y-1 text-sm">
                            <div><strong>Issue Date:</strong> {cert.issueDate}</div>
                            <div><strong>Valid Until:</strong> {cert.validUntil}</div>
                            <div><strong>Certificate ID:</strong> {cert.certificateId}</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Skills Verified</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-white text-gray-700 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-blue-200">
                        <div className="flex space-x-4">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                            📄 Download Certificate
                          </button>
                          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
                            🔗 Share on LinkedIn
                          </button>
                        </div>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                          ✓ Verify Certificate
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Certificates Yet</h3>
                    <p className="text-gray-600 mb-4">Complete your first certification track to earn your certificate!</p>
                    <button 
                      onClick={() => setSelectedTab('available')}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Browse Available Tracks
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Available Certificates */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {availableCertificates.map((cert) => (
                  <div key={cert.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                          📚
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cert.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {cert.level}
                          </span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        ⏱️ {cert.estimatedTime}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>

                    {cert.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm text-gray-600">{cert.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${cert.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.topics.map((topic, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {cert.prerequisites.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2 text-sm">Prerequisites:</h4>
                        <div className="space-y-1">
                          {cert.prerequisites.map((prereq, index) => {
                            const isCompleted = earnedCertificates.some(earned => earned.title === prereq);
                            return (
                              <div key={index} className="flex items-center text-sm">
                                <span className={`mr-2 ${isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                                  {isCompleted ? '✓' : '○'}
                                </span>
                                <span className={isCompleted ? 'text-green-700' : 'text-gray-600'}>
                                  {prereq}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <button 
                      className={`w-full px-4 py-3 rounded-lg font-medium transition ${
                        cert.progress > 0
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {cert.progress > 0 ? '📖 Continue Learning' : '🚀 Start Certificate Track'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Certificate Benefits */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Certificate Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold mb-2">Industry Recognition</h3>
              <p className="text-sm text-gray-600">Certificates recognized by top tech companies</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="font-semibold mb-2">Career Advancement</h3>
              <p className="text-sm text-gray-600">Boost your resume and interview confidence</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔗</div>
              <h3 className="font-semibold mb-2">Professional Network</h3>
              <p className="text-sm text-gray-600">Connect with other certified professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
