import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import TeamMembersTab from "./TeamMembersTab";
import DepartmentsTab from "./DepartmentsTab";
import SearchBar from "../SearchBar";

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState("Team Members");
  const tabs = ["Team Members", "Departments"];

  return (
    <div className="p-4 max-w-screen-xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        {/* Title */}
        <div className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <h1 className="text-xl font-semibold">Team Management</h1>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* SearchBar only in Team Members tab */}
          {activeTab === "Team Members" && (
            <SearchBar searchPlaceholder="Search Team Members" />
          )}

          {/* Filter Button — always visible */}
          <button className="border border-gray-300 px-3 py-2 text-sm rounded flex items-center gap-1 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
            Filter
          </button>

          {/* Buttons */}
          {(activeTab === "Team Members" || activeTab === "Departments") && (
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm">
              Add Member
            </button>
          )}

          {activeTab === "Departments" && (
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm">
              Add Department
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 text-md font-medium mb-6 border-b overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 border-b-2 transition whitespace-nowrap ${
              activeTab === tab
                ? "border-orange-500 text-orange-500 font-semibold"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Team Members" && <TeamMembersTab />}
      {activeTab === "Departments" && <DepartmentsTab />}
    </div>
  );
};

export default TeamManagement;
