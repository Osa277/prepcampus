import Link from "next/link";

export default function ProfileSetup() {
  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-600 text-white flex flex-col p-6">
        <div className="flex items-center mb-8">
          <Link href="/">
            <img src="/Frame 1.png" alt="Logo" className="h-8 w-auto mr-2 cursor-pointer" />
          </Link>
        </div>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Main Menu</div>
        <nav className="flex-1 space-y-1 mb-6">
          <a className="flex items-center gap-2 py-2 px-4 rounded bg-white text-blue-600 font-semibold">Dashboard</a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Initial Screening</a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Technical Interview</a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Behavioral Interview</a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Deep Dive Interview</a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">
            Mock Interview
            <span className="ml-2 text-xs bg-white text-blue-600 px-2 py-0.5 rounded">Premium</span>
          </a>
        </nav>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Rewards Summary</div>
        <div className="mb-6 space-y-1">
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Points Earned</a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Certificates</a>
        </div>
        <div className="text-xs uppercase tracking-wider mb-2 text-blue-200">Account Management</div>
        <div className="mb-6 space-y-1">
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Support</a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Settings</a>
          <a className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-500">Log out</a>
        </div>
        <div className="mt-auto flex items-center space-x-2 pt-6 border-t border-blue-400">
          <img src="/avatar.png" alt="Alex Johnson" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="font-semibold">Alex Johnson</div>
            <div className="text-xs">Web Developer</div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <section className="flex-1 bg-gray-50 relative overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-10 py-6 border-b border-gray-200 bg-white">
          <span></span>
          <input
            type="text"
            placeholder="Search anything here..."
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none bg-blue-50"
            style={{ minWidth: 260 }}
          />
          <span className="text-blue-600 text-2xl ml-4">🔔</span>
        </div>
        {/* Content */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-8">
          <h1 className="text-2xl font-bold mb-2 mt-8">Complete your profile</h1>
          <p className="mb-8 text-gray-700 text-center">
            Provide key details to personalize your interview preparation experience.
          </p>
          <div className="bg-white rounded-lg shadow p-8 w-full max-w-md mb-8">
            <h2 className="text-lg font-semibold text-center mb-2">Profile Setup</h2>
            <p className="text-xs text-gray-500 text-center mb-6">Fill the form below</p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none bg-gray-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none bg-gray-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Job Role</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none bg-gray-50">
                  <option>Programmer</option>
                  <option>Designer</option>
                  <option>Manager</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Experience Level</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none bg-gray-50">
                  <option>Entry</option>
                  <option>Mid</option>
                  <option>Senior</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
              >
                Save and Continue
              </button>
            </form>
          </div>
        </div>
        {/* Illustration Bottom Right */}
        <img
          src="/profile-illustration.png"
          alt="Profile Illustration"
          className="absolute right-10 bottom-10 w-48 md:w-56 lg:w-64 pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />
      </section>
    </main>
  );
}