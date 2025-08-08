import React, { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "Admin User",
    email: "admin@realcrm.com",
    phone: "(843) 461-5941",
    role: "Admin",
  });

  return (
    <div className="w-full min-h-screen bg-white font-sans  pt-1">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Profile</h2>
        <p className="text-base text-gray-500 mb-6">
          Manage your personal information.
        </p>
      </div>

      {/* Form */}
      <div className="w-full border rounded-lg p-6 bg-white shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={profile.fullName}
              onChange={(e) =>
                setProfile({ ...profile, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="role">
            Role
          </label>
          <input
            id="role"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-4 right-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-base font-medium px-6 py-2.5 rounded shadow">
          Save Changes
        </button>
      </div>
    </div>
  );
}
