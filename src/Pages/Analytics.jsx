import React, { useState } from "react";
import Overview from "../Components/analytics/Overview";
import LeadAnalytics from "../Components/analytics/LeadAnalytics";
import SalesAnalytics from "../Components/analytics/SalesAnalytics";
import PropertyAnalytic from "../Components/analytics/PropertyAnalytic";

import { ArrowLeft } from "lucide-react";
import SearchBar from "../Components/Searchbar";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [filter, setFilter] = useState("Year");

  const tabs = [
    "Overview",
    "Lead Analytics",
    "Sales Analytics",
    "Property Analytics",
  ];

  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
          <h1 className="text-xl font-semibold">Analytics and Insights</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="flex border border-gray-300 rounded-md overflow-hidden text-sm bg-white text-gray-700 w-full sm:w-auto">
            {["Week", "Month", "Quater", "Year"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`flex-1 px-4 py-2 transition-colors ${
                  filter === status
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full sm:w-auto">
            Export
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 sm:gap-6 border-b text-sm sm:text-base font-medium text-black overflow-x-auto scrollbar-hide mt-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 whitespace-nowrap transition ${
              activeTab === tab
                ? "border-b-2 border-orange-500 text-orange-500"
                : "hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "Overview" && <Overview />}
        {activeTab === "Lead Analytics" && <LeadAnalytics />}
        {activeTab === "Sales Analytics" && <SalesAnalytics />}
        {activeTab === "Property Analytics" && <PropertyAnalytic />}
      </div>
    </div>
  );
};

export default Analytics;
