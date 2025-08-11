import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Security() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFA, setTwoFA] = useState(false);

  // Show/hide password states
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Initial state snapshot for detecting changes
  const initialState = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFA: false,
  };

  // Check if any changes were made
  const isChanged =
    currentPassword !== initialState.currentPassword ||
    newPassword !== initialState.newPassword ||
    confirmPassword !== initialState.confirmPassword ||
    twoFA !== initialState.twoFA;

  return (
    <div className="w-full min-h-screen bg-white font-sans p-2 relative">
      {/* Header */}
      <header className="mb-6">
        <h2 className="text-xl font-bold">Security Settings</h2>
        <p className="text-sm text-gray-500">
          Manage your password and security preferences.
        </p>
      </header>

      {/* Password Fields */}
      <div className="space-y-4 mb-6">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrent ? "text" : "password"}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowCurrent((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showCurrent ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* New Password */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowNew((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showNew ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Two-factor Authentication */}
      <div className="flex items-center justify-between pb-4 mb-6">
        <div>
          <h3 className="text-base font-medium">Two-factor Authentication</h3>
          <p className="text-sm text-gray-500">
            Add an extra layer of security to your account
          </p>
        </div>
        <ToggleSwitch checked={twoFA} setChecked={setTwoFA} />
      </div>

      {/* Save Button */}
      <div className="fixed bottom-4 right-8">
        <button
          className={`${
            isChanged
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-[#ADADAD] cursor-not-allowed"
          } text-white px-6 py-2 text-sm font-medium rounded shadow`}
          disabled={!isChanged}
        >
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
