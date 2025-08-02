// src/Components/SegmentedTabs.jsx
import React from "react";

export default function SegmentedTabs({ options, active, onChange }) {
  return (
    <div className="inline-flex items-center border rounded-md overflow-hidden text-sm">
      {options.map((opt, idx) => {
        const isActive = opt.value === active;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 transition-all duration-200 whitespace-nowrap
              ${isActive ? "bg-[#0F172A] text-white" : "bg-white text-gray-800"}
              ${idx !== options.length - 1 ? "border-r border-gray-200" : ""}
              focus:outline-none`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
