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
    name: "Q1 20245 financial performance",
    type: "Financial",
    date: "Jun 28, 2025",
    size: "3.2 MB",
  },
  {
    id: "TRX-02",
    name: "Q1 20245 financial performance",
    type: "Financial",
    date: "Jun 15, 2025",
    size: "3.2 MB",
  },
  {
    id: "TRX-03",
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
  { stage: "Property Viewings", count: "1420", rate: "46.1%" },
  { stage: "Negotiations", count: "1280", rate: "33.1%" },
  { stage: "Closed Deals", count: "785", rate: "33.1%" },
  { stage: "Total", count: "", rate: "10.1%" },
];

const PerformanceTab = () => {
  return (
    <div className="space-y-10">
      {/* Summary Cards */}
      <div style={{ maxWidth: "100vw" }}>
        <div
          className="flex gap-4 overflow-x-auto mb-6 scrollbar-hide scrollbar-custom"
          style={{
            paddingRight: "calc((100% / 3.5) / 2)",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                width: "calc(100% / 3.5)",
                minWidth: "250px",
                scrollSnapAlign: "start",
              }}
            >
              <SummaryCard
                title={
                  [
                    "Total Revenue",
                    "Listings",
                    "Avg. Sale Price",
                    "Days on Market",
                    "Conversion Rate",
                    "Client Happiness",
                  ][i]
                }
                value="₹50,000"
                change={i % 2 === 0 ? "+10%" : "-5%"}
                color={["blue", "green", "purple", "pink", "blue", "green"][i]}
                icon={TrendingUp}
                iconColor="green"
                textColor="green"
                period="vs last Period"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sales Funnel Performance */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="bg-pink-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Sales Funnel Performance
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={funnelData}
              barSize={50}
              margin={{ bottom: 20 }} // extra space for labels
            >
              <XAxis
                dataKey="stage"
                axisLine={true}
                tickLine={false}
                interval={0}
                tick={{ fontSize: 12 }}
                angle={-20}
                textAnchor="end"
              />
              <YAxis />
              <RechartsTooltip
                content={({ active, payload }) =>
                  active && payload && payload.length ? (
                    <div className="bg-white shadow p-2 rounded text-sm">
                      <p>{payload[0].payload.stage}</p>
                      <p className="font-semibold">{payload[0].value}</p>
                    </div>
                  ) : null
                }
              />
              <Bar dataKey="count" radius={[10, 10, 0, 0]} fill="#6366f1">
                {funnelData.map((_, idx) => (
                  <Cell key={idx} fill="#6366f1" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Stage</th>
                <th>Count</th>
                <th>Conversion Rate</th>
              </tr>
            </thead>
            <tbody>
              {funnelConversion.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2">{item.stage}</td>
                  <td className="font-semibold">{item.count}</td>
                  <td>{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reports */}
      <RecentReports reports={recentReports} />
      <ScheduledReports reports={scheduledReports} />
    </div>
  );
};

export default PerformanceTab;
