import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Preferences() {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");
  const [compact, setCompact] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  return (
    <div className="w-full min-h-screen bg-white font-sans pt-1 relative">
      {/* Page Header */}
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">System Preferences</h2>
        <p className="text-base text-gray-500">Customize your CRM experience.</p>
      </header>

      {/* Theme & Language Select */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Theme */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Theme
          </label>
          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              size={20}
            />
          </div>
        </div>

        {/* Language */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Language
          </label>
          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Hindi</option>
              <option>French</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              size={20}
            />
          </div>
        </div>
      </div>

      {/* Toggles */}
      <section className="space-y-6">
        <PreferenceToggle
          title="Compact View"
          desc="Use compact view for tables and lists"
          checked={compact}
          onChange={() => setCompact((c) => !c)}
        />
        <PreferenceToggle
          title="Auto-refresh"
          desc="Automatically refresh data every 5 minutes"
          checked={autoRefresh}
          onChange={() => setAutoRefresh((c) => !c)}
        />
      </section>

      {/* Save Button */}
      <div className="fixed bottom-4 right-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 text-base font-medium rounded shadow">
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
        <h3 className="text-base font-medium">{title}</h3>
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
