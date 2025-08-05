import React, { useState } from "react";
 
export default function TeamSettings() {
  const [company, setCompany] = useState("Acme Real Estate");
  const [teamSize, setTeamSize] = useState("Small");
  const [workingHours, setWorkingHours] = useState("9 AM - 6 PM");
  const [allowSignup, setAllowSignup] = useState(false);
 
  return (
    <div className="w-full min-h-screen bg-white font-sans relative">
      {/* Header */}
      <div className="pt-6 px-4">
        <h2 className="text-xl font-bold">Team Settings</h2>
        <p className="text-sm text-gray-500 mb-6">
          Manage your team preferences and setup.
        </p>
      </div>
 
      {/* Inputs */}
      <div className="flex flex-col sm:flex-row gap-4 px-4">
        <div className="flex-1">
          <label className="block text-xs text-gray-600 mb-1">
            Company Name
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-orange-500"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-600 mb-1">Team Size</label>
          <select
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-orange-500"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-600 mb-1">
            Working Hours
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-orange-500"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
          />
        </div>
      </div>
 
      {/* Toggle */}
      <div className="px-4 flex items-center mt-6">
        <div className="flex-1">
          <div className="font-semibold">Allow Team Member Sign-up</div>
          <p className="text-xs text-gray-500">
            Allow new team members to register with a company email
          </p>
        </div>
        <ToggleSwitch checked={allowSignup} setChecked={setAllowSignup} />
      </div>
 
      {/* Action Button */}
      <div className="fixed bottom-4 right-12 flex gap-2">
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded shadow">
          Save Team Settings
        </button>
      </div>
    </div>
  );
}
 
// Toggle Switch Component
 
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
 
 