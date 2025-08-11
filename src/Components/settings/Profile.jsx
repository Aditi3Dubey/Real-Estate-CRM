import React, { useState } from "react";

export default function Profile() {
  const initialProfile = {
    fullName: "Admin User",
    email: "admin@realcrm.com",
    phone: "(843) 461-5941",
    role: "Admin",
  };

  const [profile, setProfile] = useState(initialProfile);

  const isChanged = JSON.stringify(profile) !== JSON.stringify(initialProfile);

  return (
    <div className="w-full bg-white flex flex-col items-start p-2">
      <div className="w-full border rounded-lg p-4 bg-white shadow-sm relative">
        <h2 className="text-lg font-semibold">Profile</h2>
        <p className="text-sm text-gray-500 mb-4">
          Manage your personal information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div>
            <label
              className="block text-sm text-gray-500 mb-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              id="fullName"
              className="w-full border rounded px-3 py-2 text-sm"
              value={profile.fullName}
              onChange={(e) =>
                setProfile({ ...profile, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border rounded px-3 py-2 text-sm"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              className="w-full border rounded px-3 py-2 text-sm"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1" htmlFor="role">
            Role
          </label>
          <input
            id="role"
            className="w-full border rounded px-3 py-2 text-sm"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          />
        </div>
        <div className="fixed bottom-4 right-8">
          <button
            className={`${
              isChanged
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-[#ADADAD] cursor-not-allowed"
            } text-white text-sm font-medium px-6 py-2 rounded shadow`}
            disabled={!isChanged}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
