import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const initialPreferences = {
  theme: "Light",
  language: "English",
  compact: false,
  autoRefresh: true,
};

export default function Preferences() {
  const [preferences, setPreferences] = useState(initialPreferences);

  const isChanged =
    JSON.stringify(preferences) !== JSON.stringify(initialPreferences);

  return (
    <div className="w-full min-h-screen bg-white font-sans relative p-2">
      {/* Page Header */}
      <header className="mb-6">
        <h2 className="text-xl font-bold">System Preferences</h2>
        <p className="text-sm text-gray-500">Customize your CRM experience.</p>
      </header>

      {/* Theme & Language Select */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-sm text-gray-500 mb-1">Theme</label>
          <div className="relative">
            <select
              className="block w-full min-w-[180px] px-3 py-2 pr-10 border border-gray-300 rounded-md bg-white appearance-none text-sm text-gray-700"
              value={preferences.theme}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, theme: e.target.value }))
              }
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm text-gray-500 mb-1">Language</label>
          <div className="relative">
            <select
              className="block w-full min-w-[180px] px-3 py-2 pr-10 border border-gray-300 rounded-md bg-white appearance-none text-sm text-gray-700"
              value={preferences.language}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, language: e.target.value }))
              }
            >
              <option>English</option>
              <option>Hindi</option>
              <option>French</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Toggles */}
      <section className="space-y-6">
        <PreferenceToggle
          title="Compact View"
          desc="Use compact view for tables and lists"
          checked={preferences.compact}
          onChange={() =>
            setPreferences((p) => ({ ...p, compact: !p.compact }))
          }
        />
        <PreferenceToggle
          title="Auto-refresh"
          desc="Automatically refresh data every 5 minutes"
          checked={preferences.autoRefresh}
          onChange={() =>
            setPreferences((p) => ({ ...p, autoRefresh: !p.autoRefresh }))
          }
        />
      </section>

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
          Save Preferences
        </button>
      </div>
    </div>
  );
}

// Toggle Row Component
function PreferenceToggle({ title, desc, checked, onChange }) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div>
        <h3 className="text-md font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        type="button"
        onClick={onChange}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300
          ${checked ? "bg-orange-500" : "bg-gray-300"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300
            ${checked ? "translate-x-5" : "translate-x-0"}`}
        />
      </button>
    </div>
  );
}
