import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const leadSources = ["Website", "Referral", "Google Ads", "Facebook Ads"];
const interests = ["Residential", "Commercial", "Land"];
const assignees = ["Auto-assign", "Katie Sims", "Bradley Lawlor", "Stephanie Nicol"];

export default function AddLeadModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    source: leadSources[0],
    interest: interests[0],
    assignTo: assignees[0],
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    onAdd(formData);
    onClose();
  };

  const fieldWrapper = "relative w-full";
  const labelStyle =
    "absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500 z-10";
  const inputStyle =
    "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-600 bg-white transition";

  const renderListbox = (label, value, setValue, options) => (
    <div className="relative w-full">
      <label className={labelStyle}>{label}</label>
      <Listbox value={value} onChange={setValue}>
        <div className="relative">
          <Listbox.Button className={`${inputStyle} text-left`}>
            <span>{value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 text-xs">
              ▼
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto focus:outline-none text-sm">
              {options.map((option, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <span className={`flex justify-between ${selected ? "font-medium" : ""}`}>
                      {option}
                      {selected && <span className="text-gray-500">✔</span>}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2 sm:px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-1">Add New Lead</h2>
        <p className="text-sm text-gray-500 mb-4">
          Enter the details of the new lead to add to your CRM
        </p>

        <div className="space-y-4">
          {/* Full Name */}
          <div className={fieldWrapper}>
            <label className={labelStyle}>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className={fieldWrapper}>
              <label className={labelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
            <div className={fieldWrapper}>
              <label className={labelStyle}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          </div>

          {/* Lead Source & Property Interest */}
          <div className="flex flex-col sm:flex-row gap-4">
            {renderListbox("Lead Source", formData.source, (val) =>
              setFormData((prev) => ({ ...prev, source: val }))
            , leadSources)}

            {renderListbox("Property Interest", formData.interest, (val) =>
              setFormData((prev) => ({ ...prev, interest: val }))
            , interests)}
          </div>

          {/* Assign To */}
          {renderListbox("Assign To", formData.assignTo, (val) =>
            setFormData((prev) => ({ ...prev, assignTo: val }))
          , assignees)}

          {/* Notes */}
          <div className={fieldWrapper}>
            <label className={labelStyle}>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className={inputStyle}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-orange-500 rounded text-gray-500 "
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Add Lead
          </button>
        </div>
      </div>
    </div>
  );
}
