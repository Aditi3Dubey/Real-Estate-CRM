// src/Components/SegmentedTabs.jsx
import React from "react";

export default function SegmentedTabs({ options, active, onChange }) {
  return (
    <div className="flex border border-gray-300 rounded-md overflow-hidden text-sm bg-white text-gray-700 w-full sm:w-auto">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`flex-1 px-4 py-2 transition-colors ${
            active === opt.value
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
