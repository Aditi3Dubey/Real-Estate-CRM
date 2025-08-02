import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import FinancialTab from "./FinancialTab";
import PerformanceTab from "./PerformanceTab";
import MarketingTab from "./MarketingTab";
import InventoryTab from "./InventoryTab";
import TeamTab from "./TeamTab";
import SegmentedTabs from "../SegmentedTabs";
import Button from "../Button";

const Reports = () => {
  const [activeTab, setActiveTab] = useState("Financial");
  const [range, setRange] = useState("year");

  const tabs = ["Financial", "Performance", "Marketing", "Inventory", "Team"];

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto bg-gray-50 min-h-screen">
      <div  className="flex flex-col sm:flex-row justify-between gap-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <ArrowLeft className="h-5 w-5" />
          <h1 className="text-xl font-semibold">Reports & Analytics</h1>
        </div>
        {/* Range Selector + Export/Share Buttons */}
        <div className="flex flex-wrap gap-2 justify-between items-center mb-6">
          <SegmentedTabs
            options={[
              { label: "Week", value: "week" },
              { label: "Month", value: "month" },
              { label: "Quarter", value: "quarter" },
              { label: "Year", value: "year" },
            ]}
            active={range}
            onChange={setRange}
          />
          <div className="flex gap-2">
            <Button
              label="Export"
              bgColor="bg-white"
              textColor="black"
              borderColor="border-gray-300"
            />
            <Button
              label="Share"
              bgColor="bg-white"
              textColor="black"
              borderColor="border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Tab Headers */}
      <div className="flex gap-8 text-md font-medium mb-6 border-b overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Financial" && <FinancialTab range={range} />}
      {activeTab === "Performance" && <PerformanceTab range={range} />}
      {activeTab === "Marketing" && <MarketingTab range={range} />}
      {activeTab === "Inventory" && <InventoryTab range={range} />}
      {activeTab === "Team" && <TeamTab range={range} />}
    </div>
  );
};

export default Reports;
