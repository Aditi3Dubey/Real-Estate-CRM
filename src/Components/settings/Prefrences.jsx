import React, { useState } from "react";
 
export default function Preferences() {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");
  const [compact, setCompact] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
 
  return (
    <div className="w-full min-h-screen bg-white font-sans p-4 relative">
      {/* Page Header */}
      <header className="mb-6">
        <h2 className="text-xl font-bold">System Preferences</h2>
        <p className="text-sm text-gray-500">Customize your CRM experience.</p>
      </header>
 
      {/* Theme & Language Select */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Theme</label>
          <select
            className="w-full border rounded px-3 py-2 text-sm"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Language</label>
          <select
            className="w-full border rounded px-3 py-2 text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
          </select>
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
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm font-medium rounded shadow">
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
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{desc}</p>
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
 
 
 