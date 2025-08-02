// components/Reports/InventoryTab.jsx
import React from "react";
import SummaryCard from "../SummaryCard";
import { TrendingUp, WalletCards } from "lucide-react";
import RecentReports from "./RecentReports";
import ScheduledReports from "./ScheduledReports";

const recentReports = [
  {
    id: "REP-001",
    name: "Q1 20245 financial performance",
    type: "Financial",
    date: "Jun 28, 2025",
    size: "3.2 MB",
  },
  {
    id: "REP-002",
    name: "Q1 20245 financial performance",
    type: "Financial",
    date: "Jun 15, 2025",
    size: "3.2 MB",
  },
  {
    id: "REP-003",
    name: "Q1 20245 financial performance",
    type: "Financial",
    date: "Jun 10, 2025",
    size: "3.2 MB",
  },
];

const scheduledReports = [
  {
    name: "Q1 20245 financial performance",
    frequency: "Monthly",
    nextRun: "Jun 28, 2025",
    recipients: "5 Recipients",
    status: "Active",
  },
  {
    name: "Q1 20245 financial performance",
    frequency: "Weekly",
    nextRun: "Jun 15, 2025",
    recipients: "6 Recipients",
    status: "Active",
  },
  {
    name: "Q1 20245 financial performance",
    frequency: "Monthly",
    nextRun: "Jun 10, 2025",
    recipients: "10 Recipients",
    status: "Active",
  },
];


const InventoryTab = () => {
  return (
    <div>

   <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-6 bg-white shadow-sm">
    <SummaryCard
            title="Active Listing"
            value="86"
            change="+18.5%"
            color="blue"
            icon={WalletCards}
            iconColor="white"
            textColor="green"
            period="vs last Month"
          /><SummaryCard
            title="Avg. Time on Market"
            value="34 Days"
            change="+12.2%"
            color="blue"
            icon={TrendingUp}
            iconColor="green"
            textColor="green"
            period="vs last Month"
          /><SummaryCard
            title="Inventory Value"
            value="₹50,0000"
            change="+12.2%"
            color="blue"
            icon={TrendingUp}
            iconColor="green"
            textColor="green"
            period="vs last Month"
          />
   </div>

   <h1 className="text-lg font-semibold my-4">Inventory Age Analysis</h1>
 <div className="bg-white shadow-sm rounded-lg overflow-x-auto">
  <table className="w-full min-w-[600px] text-sm text-left border-collapse">
    <thead className="bg-gray-100 text-gray-700">
      <tr>
        <th className="p-3 font-semibold whitespace-nowrap">Days on Market</th>
        <th className="p-3 font-semibold whitespace-nowrap">Number of Properties</th>
        <th className="p-3 font-semibold whitespace-nowrap">Value</th>
        <th className="p-3 font-semibold whitespace-nowrap">% of Total</th>
      </tr>
    </thead>

    <tbody className="text-gray-700">
      <tr className="border-t hover:bg-gray-50">
        <td className="p-3 whitespace-nowrap">0–30 Days</td>
        <td className="p-3 whitespace-nowrap">45</td>
        <td className="p-3 whitespace-nowrap">₹20,00,000</td>
        <td className="p-3 whitespace-nowrap">40%</td>
      </tr>
      <tr className="border-t hover:bg-gray-50">
        <td className="p-3 whitespace-nowrap">31–60 Days</td>
        <td className="p-3 whitespace-nowrap">25</td>
        <td className="p-3 whitespace-nowrap">₹15,00,000</td>
        <td className="p-3 whitespace-nowrap">30%</td>
      </tr>
      <tr className="border-t hover:bg-gray-50">
        <td className="p-3 whitespace-nowrap">61–90 Days</td>
        <td className="p-3 whitespace-nowrap">10</td>
        <td className="p-3 whitespace-nowrap">₹10,00,000</td>
        <td className="p-3 whitespace-nowrap">20%</td>
      </tr>
      <tr className="border-t hover:bg-gray-50">
        <td className="p-3 whitespace-nowrap">91+ Days</td>
        <td className="p-3 whitespace-nowrap">6</td>
        <td className="p-3 whitespace-nowrap">₹5,00,000</td>
        <td className="p-3 whitespace-nowrap">10%</td>
      </tr>
    </tbody>

    <tfoot className="border-t bg-gray-50 text-gray-900 font-semibold">
      <tr>
        <td className="p-3 whitespace-nowrap">Total</td>
        <td className="p-3 whitespace-nowrap">86</td>
        <td className="p-3 whitespace-nowrap">₹50,00,000</td>
        <td className="p-3 whitespace-nowrap">100%</td>
      </tr>
    </tfoot>
  </table>
</div>
<RecentReports reports={recentReports} />
<ScheduledReports reports={scheduledReports} />
</div>
  );
};

export default InventoryTab;
