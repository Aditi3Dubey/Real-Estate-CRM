import React, { useState } from "react";

const initialSettings = {
  email: true,
  lead: true,
  task: false,
  property: true,
};

export default function Notifications() {
  const [settings, setSettings] = useState(initialSettings);

  return (
    <div className="w-full min-h-screen bg-white font-sans relative">
      {/* Header */}
      <header className="mb-6">
        <h2 className="text-xl font-semibold">Notification Preferences</h2>
        <p className="text-sm text-gray-500">
          Manage how you receive notifications.
        </p>
      </header>

      {/* Settings */}
      <section className="space-y-5">
        <NotificationRow
          title="Email Notifications"
          desc="Receive email notifications for important updates"
          checked={settings.email}
          onChange={() => setSettings((s) => ({ ...s, email: !s.email }))}
        />
        <NotificationRow
          title="New Lead Alerts"
          desc="Get notified when a new lead is assigned to you"
          checked={settings.lead}
          onChange={() => setSettings((s) => ({ ...s, lead: !s.lead }))}
        />
        <NotificationRow
          title="Task Reminders"
          desc="Receive reminders for upcoming tasks"
          checked={settings.task}
          onChange={() => setSettings((s) => ({ ...s, task: !s.task }))}
        />
        <NotificationRow
          title="Property Updates"
          desc="Get notified about property status changes"
          checked={settings.property}
          onChange={() => setSettings((s) => ({ ...s, property: !s.property }))}
        />
      </section>

      {/* Save Button */}
      <div className="fixed bottom-4 right-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded shadow">
          Save
        </button>
      </div>
    </div>
  );
}

// Toggle Component
function NotificationRow({ title, desc, checked, onChange }) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div>
        <h3 className="text-md font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300
          ${checked ? "bg-orange-500" : "bg-gray-300"}`}
        onClick={onChange}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300
            ${checked ? "translate-x-5" : "translate-x-0"}`}
        />
      </button>
    </div>
  );
}
