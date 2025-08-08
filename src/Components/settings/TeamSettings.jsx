import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TeamSettings() {
  const [company, setCompany] = useState("Archism Real Estate");
  const [teamSize, setTeamSize] = useState("Small");
  const [workingHours, setWorkingHours] = useState("9 AM - 6 PM");
  const [allowSignup, setAllowSignup] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white font-sans relative pt-1">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Team Settings</h2>
        <p className="text-base text-gray-500 mb-6">
          Manage your team preferences and setup.
        </p>
      </div>

      {/* Inputs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Company Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Team Size
          </label>
          <div className="relative">
            <select
              className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              size={20}
            />
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Working Hours
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
          />
        </div>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-between border-b pb-4 mt-8">
        <div className="flex-1">
          <div className="text-base font-semibold">
            Allow Team Member Sign-up
          </div>
          <p className="text-sm text-gray-500">
            Allow new team members to register with a company email
          </p>
        </div>
        <ToggleSwitch checked={allowSignup} setChecked={setAllowSignup} />
      </div>

      {/* Action Button */}
      <div className="fixed bottom-4 right-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-base font-medium px-6 py-2.5 rounded shadow">
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
