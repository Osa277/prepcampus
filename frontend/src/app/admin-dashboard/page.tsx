import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-600 text-white flex flex-col p-6">
        <Link href="/" className="font-bold text-xl mb-8 flex items-center space-x-2 hover:opacity-80 transition">
          <span className="text-2xl">💡</span>
          <span>Prep<span className="text-white">Interview</span></span>
        </Link>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Main Menu</div>
        <nav className="flex-1 space-y-1 mb-6">
          <Link href="/dashboard" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🏠</span> Main Dashboard
          </Link>
          <Link href="/user-profile" className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🙍‍♂️</span> User Profile
          </Link>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>📄</span> Report
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🔔</span> Notifications
          </a>
        </nav>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Account Management</div>
        <div className="mb-6 space-y-1">
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🛟</span> Support
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>⚙️</span> Settings
          </a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            <span>🚪</span> Log out
          </a>
        </div>
        <div className="mt-auto flex items-center space-x-2 pt-6 border-t border-blue-400">
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">A</div>
          <div>
            <div className="font-semibold">Alex Johnson</div>
            <div className="text-xs">Admin</div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <section className="flex-1 bg-gray-50 p-10">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <input
            type="text"
            placeholder="Search anything here..."
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none"
          />
        </div>
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl mb-2">👥</span>
            <span className="text-xs text-gray-600">Active Users</span>
            <span className="text-2xl font-bold">1,234</span>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl mb-2">📝</span>
            <span className="text-xs text-gray-600">Total Interviews</span>
            <span className="text-2xl font-bold">1,234</span>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl mb-2">💬</span>
            <span className="text-xs text-gray-600">Feedback Provided</span>
            <span className="text-2xl font-bold">1,234</span>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl mb-2">🎓</span>
            <span className="text-xs text-gray-600">Certificates Issued</span>
            <span className="text-2xl font-bold">1,234</span>
          </div>
        </div>
        {/* Recent Activities */}
        <h2 className="font-semibold mb-2">Recent Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs text-gray-500 mb-2">New User Sign-Up</div>
            <div className="flex items-center gap-2 mb-2">
              <span>🔍</span>
              <span>John Doe (john@example.com)</span>
            </div>
            <div className="text-xs text-gray-400">Registered on: July 10, 2024</div>
            <div className="flex items-center gap-2 mb-2">
              <span>🔍</span>
              <span>John Doe (john@example.com)</span>
            </div>
            <div className="text-xs text-gray-400">Registered on: July 10, 2024</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs text-gray-500 mb-2">Completed Interview</div>
            <div className="flex items-center gap-2 mb-2">
              <span>✅</span>
              <span>John Doe</span>
            </div>
            <div className="text-xs text-gray-400">Level 1: Initial Screening</div>
            <div className="flex items-center gap-2 mb-2">
              <span>✅</span>
              <span>Jane Doe</span>
            </div>
            <div className="text-xs text-gray-400">Level 2: Technical Interview</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs text-gray-500 mb-2">Badge Awarded</div>
            <div className="flex items-center gap-2 mb-2">
              <span>🎖️</span>
              <span>John Doe</span>
            </div>
            <div className="text-xs text-gray-400">Level 1: Initial Screening</div>
            <div className="flex items-center gap-2 mb-2">
              <span>🎖️</span>
              <span>Jane Doe</span>
            </div>
            <div className="text-xs text-gray-400">Level 2: Technical Interview</div>
          </div>
        </div>
        {/* User List */}
        <h2 className="font-semibold mb-2">User List</h2>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-2">S/N</th>
                <th className="py-2 px-2">Name</th>
                <th className="py-2 px-2">Email</th>
                <th className="py-2 px-2">Reg. Date</th>
                <th className="py-2 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-2">1.</td>
                <td className="py-2 px-2">John Doe</td>
                <td className="py-2 px-2">john@example.com</td>
                <td className="py-2 px-2">2024-01-01</td>
                <td className="py-2 px-2">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-2">2.</td>
                <td className="py-2 px-2">John Doe</td>
                <td className="py-2 px-2">john@example.com</td>
                <td className="py-2 px-2">2024-01-01</td>
                <td className="py-2 px-2">Suspended</td>
              </tr>
              <tr>
                <td className="py-2 px-2">3.</td>
                <td className="py-2 px-2">John Doe</td>
                <td className="py-2 px-2">john@example.com</td>
                <td className="py-2 px-2">2024-01-01</td>
                <td className="py-2 px-2">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-2">4.</td>
                <td className="py-2 px-2">John Doe</td>
                <td className="py-2 px-2">john@example.com</td>
                <td className="py-2 px-2">2024-01-01</td>
                <td className="py-2 px-2">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-2">5.</td>
                <td className="py-2 px-2">John Doe</td>
                <td className="py-2 px-2">john@example.com</td>
                <td className="py-2 px-2">2024-01-01</td>
                <td className="py-2 px-2">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}