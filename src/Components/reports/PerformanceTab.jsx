import React from "react";
import SummaryCard from "../SummaryCard";
import { TrendingUp, WalletCards, TrendingDown } from "lucide-react";
import RecentReports from "./RecentReports";
import ScheduledReports from "./ScheduledReports";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const recentReports = [
  {
    id: "TRX-01",
    name: "Q1 2025 financial performance",
    type: "Financial",
    date: "Jun 28, 2025",
    size: "3.2 MB",
  },
  {
    id: "TRX-02",
    name: "Q1 2025 financial performance",
    type: "Financial",
    date: "Jun 15, 2025",
    size: "3.2 MB",
  },
  {
    id: "TRX-03",
    name: "Q1 2025 financial performance",
    type: "Financial",
    date: "Jun 10, 2025",
    size: "3.2 MB",
  },
];

const scheduledReports = [
  {
    name: "Q1 2025 financial performance",
    frequency: "Monthly",
    nextRun: "Jun 28, 2025",
    recipients: "5 Recipients",
    status: "Active",
  },
  {
    name: "Q1 2025 financial performance",
    frequency: "Weekly",
    nextRun: "Jun 15, 2025",
    recipients: "6 Recipients",
    status: "Active",
  },
  {
    name: "Q1 2025 financial performance",
    frequency: "Monthly",
    nextRun: "Jun 10, 2025",
    recipients: "10 Recipients",
    status: "Active",
  },
];

const funnelData = [
  { stage: "Leads", count: 1450 },
  { stage: "Qualified Leads", count: 850 },
  { stage: "Property Viewings", count: 1420 },
  { stage: "Negotiations", count: 1280 },
  { stage: "Closed Deals", count: 785 },
];

const funnelConversion = [
  { stage: "Leads", count: "1,450", rate: "66.1%" },
  { stage: "Qualified Leads", count: "850", rate: "56.1%" },
  { stage: "Property Viewings", count: "1,420", rate: "46.1%" },
  { stage: "Negotiations", count: "1,280", rate: "33.1%" },
  { stage: "Closed Deals", count: "785", rate: "33.1%" },
  { stage: "Total", count: "—", rate: "10.1%" },
];

const PerformanceTab = () => {
  return (
    <div className="space-y-8 bg-gray-50 min-h-screen">
      {/* Summary Cards - Horizontally Scrollable */}
      <div className="w-full">
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 w-max pr-6">
            <div className="flex-shrink-0 w-72">
              <SummaryCard
                title="Total Revenue"
                value="₹1,00,000"
                change="+15%"
                color="blue"
                icon={WalletCards}
                iconColor="white"
                textColor="green"
                period="vs last Period"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <SummaryCard
                title="Listings"
                value="235"
                change="-5%"
                icon={TrendingUp}
                color="blue"
                iconColor="green"
                textColor="red"
                period="vs last Period"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <SummaryCard
                title="Avg. Sale Price"
                value="₹50,000"
                color="purple"
                change="+10%"
                icon={TrendingUp}
                iconColor="green"
                textColor="green"
                period="vs last Period"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <SummaryCard
                title="Days on Market"
                value="45"
                color="pink"
                change="+10%"
                icon={TrendingDown}
                iconColor="red"
                textColor="red"
                period="vs last Period"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <SummaryCard
                title="Conversion Rate"
                value="10.1%"
                period="vs last Period"
                color="pink"
                change="+10%"
                icon={TrendingUp}
                iconColor="green"
                textColor="green"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <SummaryCard
                title="Customer Satisfaction"
                value="4.8/5"
                color="red"
                change="+10%"
                icon={TrendingUp}
                iconColor="green"
                textColor="green"
                period="vs last Period"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sales Funnel Performance */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-6">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">
            Sales Funnel Performance
          </h2>
          <p className="text-gray-600 mt-1">Track your conversion pipeline</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Bar Chart */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Funnel Visualization
            </h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={funnelData} 
                  barSize={50}
                  margin={{ top: 50, right: 20, left: 20, bottom: 100 }}
                >
                  <XAxis
                    dataKey="stage"
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    tick={{
                      fontSize: 12,
                      fill: "#374151",
                    }}
                    height={100}
                    axisLine={{ stroke: "#E5E7EB" }}
                    tickLine={{ stroke: "#E5E7EB" }}
                  />
                  <YAxis 
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    axisLine={{ stroke: "#E5E7EB" }}
                    tickLine={{ stroke: "#E5E7EB" }}
                  />
                  <RechartsTooltip
                    cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div 
                            className="bg-white shadow-xl border border-gray-200 rounded-lg p-3 max-w-xs z-50"
                          >
                            <p className="font-semibold text-gray-800 mb-1 text-sm">
                              {label}
                            </p>
                            <p className="text-blue-600 font-bold text-base">
                              {payload[0].value?.toLocaleString()} leads
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="count" 
                    radius={[8, 8, 0, 0]}
                  >
                    {funnelData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={`hsl(${220 + index * 15}, 70%, ${65 - index * 8}%)`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Conversion Table */}
          <div className="bg-white rounded-xl border border-gray-200 self-start">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Conversion Metrics
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="text-left py-3 font-semibold text-gray-600">
                        Stage
                      </th>
                      <th className="text-center py-3 font-semibold text-gray-600">
                        Count
                      </th>
                      <th className="text-center py-3 font-semibold text-gray-600">
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {funnelConversion.map((item, i) => (
                      <tr 
                        key={i} 
                        className={`
                          border-b border-gray-50 hover:bg-gray-50 transition-colors
                          ${item.stage === 'Total' ? 'bg-blue-50 font-semibold border-t-2 border-blue-200' : ''}
                        `}
                      >
                        <td className="py-4 text-gray-700">
                          {item.stage}
                        </td>
                        <td className="py-4 text-center font-semibold text-gray-800">
                          {item.count}
                        </td>
                        <td className="py-4 text-center">
                          <span className={`
                            inline-block py-1 rounded-full text-sm font-medium
                            ${item.stage === 'Total' 
                              ? 'bg-green-100 text-green-800 px-3' 
                              : 'bg-blue-100 text-blue-800 px-2'
                            }
                          `}>
                            {item.rate}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reports */}
      <div className="space-y-6 mx-6">
        <RecentReports reports={recentReports} />
        <ScheduledReports reports={scheduledReports} />
      </div>
    </div>
  );
};

export default PerformanceTab;