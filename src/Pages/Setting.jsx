import React, { useState } from "react";
 
import { ArrowLeft } from "lucide-react";
import SearchBar from "../Components/SearchBar";
import Profile from "../Components/settings/Profile";
import Notifications from "../Components/settings/Notifications";
import Preferences from "../Components/settings/Prefrences";
import Security from "../Components/settings/Security";
import TeamSettings from "../Components/settings/TeamSettings";
 
const Setting = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [filter, setFilter] = useState("Year");
 
  const tabs = [
    "Profile",
    "Notifications",
    "Preferences",
    "Security",
    "Team Settings",
  ];
 
  return (
    <div className="p-3 sm:p-6 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
          <h1 className="text-xl font-semibold">Settings</h1>
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
        {activeTab === "Profile" && <Profile></Profile>}
        {activeTab === "Notifications" && <Notifications></Notifications>}
        {activeTab === "Preferences" && <Preferences></Preferences>}
        {activeTab === "Security" && <Security></Security>}
        {activeTab === "Team Settings" && <TeamSettings></TeamSettings>}
      </div>
    </div>
  );
};
 
export default Setting;
 
 