// components/Reports/TeamTab.jsx
import { TrendingUp, WalletCards } from "lucide-react";
import React from "react";
import SummaryCard from "../SummaryCard";
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

const TeamTab = () => {
  return (
    <div>
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible  mb-6">
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Active Agents"
            value="18"
            icon={WalletCards}
            color="blue"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Ave. Revenue per Agent"
            value="₹500,000"
            icon={TrendingUp}
            color="blue"
            iconColor="green"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Closed Deals per Agent"
            value="4.7"
            icon={TrendingUp}
            color="purple"
            iconColor="green"
          />
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 font-semibold whitespace-nowrap">
                Days on Market
              </th>
              <th className="p-3 font-semibold whitespace-nowrap">
                Number of Properties
              </th>
              <th className="p-3 font-semibold whitespace-nowrap">Value</th>
              <th className="p-3 font-semibold whitespace-nowrap">
                % of Total
              </th>
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

export default TeamTab;
