'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function Settings() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const settingsTabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'privacy', name: 'Privacy', icon: '🛡️' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'preferences', name: 'Preferences', icon: '⚙️' }
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
            <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.firstName}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Settings</h2>
              <nav className="space-y-2">
                {settingsTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.firstName || ''}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.lastName || ''}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email || ''}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        placeholder="Tell us about yourself..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Save Profile Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Add an extra layer of security to your account
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">2FA Status: Disabled</span>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Enable 2FA
                        </button>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">Active Sessions</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Manage devices that are currently logged into your account
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div>
                            <div className="font-medium text-sm">Windows PC - Chrome</div>
                            <div className="text-xs text-gray-600">Current session • Last active: Now</div>
                          </div>
                          <span className="text-green-600 text-sm">Active</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div>
                            <div className="font-medium text-sm">iPhone - Safari</div>
                            <div className="text-xs text-gray-600">Last active: 2 hours ago</div>
                          </div>
                          <button className="text-red-600 text-sm hover:text-red-800">
                            Revoke
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Email Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { id: 'interview-reminders', label: 'Interview Reminders', checked: true },
                          { id: 'progress-updates', label: 'Progress Updates', checked: true },
                          { id: 'new-features', label: 'New Features', checked: false },
                          { id: 'promotional', label: 'Promotional Emails', checked: false },
                          { id: 'weekly-digest', label: 'Weekly Digest', checked: true }
                        ].map((item) => (
                          <label key={item.id} className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked={item.checked}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-3 text-sm text-gray-700">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Push Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { id: 'browser-notifications', label: 'Browser Notifications', checked: true },
                          { id: 'mobile-notifications', label: 'Mobile App Notifications', checked: true },
                          { id: 'interview-alerts', label: 'Interview Starting Soon', checked: true },
                          { id: 'achievement-alerts', label: 'Achievement Unlocked', checked: true }
                        ].map((item) => (
                          <label key={item.id} className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked={item.checked}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-3 text-sm text-gray-700">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Save Notification Settings
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Data & Privacy</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Profile Visibility</div>
                            <div className="text-xs text-gray-600">Control who can see your profile</div>
                          </div>
                          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                            <option>Public</option>
                            <option>Private</option>
                            <option>Friends Only</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Progress Sharing</div>
                            <div className="text-xs text-gray-600">Allow sharing of your progress</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Data Analytics</div>
                            <div className="text-xs text-gray-600">Help improve our platform</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Data Export & Deletion</h3>
                      <div className="space-y-4">
                        <div>
                          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                            📁 Export My Data
                          </button>
                          <p className="text-xs text-gray-600 mt-1">Download all your account data</p>
                        </div>
                        <div>
                          <button 
                            onClick={() => setShowDeleteModal(true)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            🗑️ Delete Account
                          </button>
                          <p className="text-xs text-gray-600 mt-1">Permanently delete your account and data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'billing' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Billing & Subscription</h2>
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Current Plan</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Free Plan</div>
                          <div className="text-sm text-gray-600">Basic interview preparation features</div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          Upgrade Plan
                        </button>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Payment Method</h3>
                      <div className="text-sm text-gray-600 mb-4">No payment method on file</div>
                      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                        Add Payment Method
                      </button>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Billing History</h3>
                      <div className="text-sm text-gray-600">No billing history available</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">General Preferences</h2>
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Interface</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Theme</div>
                            <div className="text-xs text-gray-600">Choose your preferred theme</div>
                          </div>
                          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                            <option>Light</option>
                            <option>Dark</option>
                            <option>Auto</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Language</div>
                            <div className="text-xs text-gray-600">Select your language</div>
                          </div>
                          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Timezone</div>
                            <div className="text-xs text-gray-600">Your local timezone</div>
                          </div>
                          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                            <option>UTC-5 (Eastern)</option>
                            <option>UTC-6 (Central)</option>
                            <option>UTC-7 (Mountain)</option>
                            <option>UTC-8 (Pacific)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">Learning Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Difficulty Level</div>
                            <div className="text-xs text-gray-600">Preferred question difficulty</div>
                          </div>
                          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                            <option>Mixed</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Focus Area</div>
                            <div className="text-xs text-gray-600">Primary learning focus</div>
                          </div>
                          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                            <option>Full Stack Development</option>
                            <option>Frontend Development</option>
                            <option>Backend Development</option>
                            <option>Data Science</option>
                            <option>DevOps</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="text-center">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-lg font-semibold mb-2">Delete Account</h3>
                <p className="text-gray-600 mb-6">
                  This action cannot be undone. All your data, progress, and certificates will be permanently deleted.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setShowDeleteModal(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    Delete Account
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
