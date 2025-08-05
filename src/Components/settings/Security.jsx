import React, { useState } from "react";
 
export default function Security() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFA, setTwoFA] = useState(false);
 
  return (
    <div className="w-full min-h-screen bg-white font-sans p-4 relative">
      {/* Header */}
      <header className="mb-6">
        <h2 className="text-xl font-bold">Security Settings</h2>
        <p className="text-sm text-gray-500">
          Manage your password and security preferences.
        </p>
      </header>
 
      {/* Password Fields */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            Current Password
          </label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
 
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-xs text-gray-500 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-gray-500 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
 
      {/* Two-factor Authentication */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <h3 className="text-sm font-medium">Two-factor Authentication</h3>
          <p className="text-xs text-gray-500">
            Add an extra layer of security to your account
          </p>
        </div>
        <ToggleSwitch checked={twoFA} setChecked={setTwoFA} />
      </div>
 
      {/* Save Button */}
      <div className="fixed bottom-4 right-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded shadow">
          Update Security Settings
        </button>
      </div>
    </div>
  );
}
 
// Toggle Component
function ToggleSwitch({ checked, setChecked }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      type="button"
      onClick={() => setChecked((c) => !c)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-300
        ${checked ? "bg-orange-500" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300
          ${checked ? "translate-x-5" : "translate-x-0"}`}
      />
    </button>
  );
}
 
 