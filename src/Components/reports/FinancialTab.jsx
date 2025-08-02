import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as LineTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import {
  Printer,
  Mail,
  Download,
  TrendingDown,
  TrendingUp,
  WalletCards,
  ArrowLeft,
} from "lucide-react";
import SummaryCard from "../SummaryCard";
import Button from "../Button";
import TableFooter from "../TableFooter";
import RecentReports from "./RecentReports";
import ScheduledReports from "./ScheduledReports";

// Financial line chart data
const chartData = [
  { month: "Jan", revenue: 100000, expenses: 100000, profit: 100000 },
  { month: "Feb", revenue: 300000, expenses: 100000, profit: 200000 },
  { month: "Mar", revenue: 400000, expenses: 200000, profit: 200000 },
  { month: "Apr", revenue: 400000, expenses: 200000, profit: 200000 },
  { month: "May", revenue: 500000, expenses: 200000, profit: 300000 },
  { month: "Jun", revenue: 700000, expenses: 300000, profit: 400000 },
  { month: "Jul", revenue: 600000, expenses: 300000, profit: 300000 },
  { month: "Aug", revenue: 700000, expenses: 400000, profit: 300000 },
  { month: "Sep", revenue: 700000, expenses: 600000, profit: 300000 },
  { month: "Oct", revenue: 700000, expenses: 600000, profit: 300000 },
  { month: "Nov", revenue: 700000, expenses: 600000, profit: 300000 },
  { month: "Dec", revenue: 700000, expenses: 600000, profit: 300000 },
];

// Bar chart with types A-D
const propertyRevenueData = [
  { type: "A", label: "Residential", value: 90000, fill: "#fb923c" },
  { type: "B", label: "Land", value: 50000, fill: "#f87171" },
  { type: "C", label: "Commercial", value: 90000, fill: "#22d3ee" },
  { type: "D", label: "Industrial", value: 70000, fill: "#8b5cf6" },
];

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


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg p-4 rounded-lg text-sm">
        <p className="text-pink-500 font-semibold">
          Revenue: ₹{payload[0].value.toLocaleString()}
        </p>
        <p className="text-blue-500 font-semibold">
          Expenses: ₹{payload[1].value.toLocaleString()}
        </p>
        <p className="text-purple-500 font-semibold">
          Profit: ₹{payload[2].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const FinancialTab = () => {
  return (
    <div className="space-y-10 px-4 md:px-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SummaryCard
          title="Total Revenue"
          value="₹7,00,000"
          change="+15%"
          color="blue"
          icon={WalletCards}
          period="vs last Year"
          iconColor="white"
          textColor="green"
        />
        <SummaryCard
          title="Total Expenses"
          value="₹6,00,000"
          change="-5%"
          icon={TrendingUp}
          color="blue"
          iconColor="red"
          period="vs last Year"
          textColor="red"
        />
        <SummaryCard
          title="Conversion Rate"
          value="₹3,00,000"
          color="purple"
          change="+10%"
          icon={TrendingDown}
          iconColor="green"
          period="vs last Year"
          textColor="green"
        />
      </div>

      {/* Financial Performance Line Chart */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Financial Performance</h2>
          <button className="bg-pink-100 text-black text-sm font-medium rounded px-6 py-2">
            Filter
          </button>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 30, bottom: 0, left: 0 }}
            >
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
                domain={[0, 800000]}
                ticks={[
                  0, 100000, 200000, 300000, 400000, 500000, 600000, 700000,
                  800000,
                ]}
              />
              <LineTooltip content={<CustomTooltip />} />
              <Line
                dataKey="revenue"
                stroke="#ec4899"
                strokeWidth={3}
                dot={false}
              />
              <Line
                dataKey="expenses"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={false}
              />
              <Line
                dataKey="profit"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Revenue by Property Type Bar Chart */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-orange-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Revenue by Property Type
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={propertyRevenueData}
              margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
            >
              <XAxis
                dataKey="type"
                tick={{ fontSize: 14, fontWeight: 600 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <LineTooltip
                content={({ active, payload }) =>
                  active && payload && payload.length ? (
                    <div className="bg-white shadow-md p-3 rounded text-sm">
                      <strong>{payload[0].payload.label}</strong>
                      <p>₹{payload[0].value.toLocaleString()}</p>
                    </div>
                  ) : null
                }
              />
              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
                barSize={45}
                label={{
                  position: "top",
                  formatter: (value) => `₹${(value / 1000).toFixed(0)}k`,
                  fill: "#000",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {propertyRevenueData.map((entry, i) => (
                  <Cell
                    key={`cell-${i}`}
                    fill={entry.fill}
                    cursor="pointer"
                    className="transition-transform duration-300 ease-in-out"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            {propertyRevenueData.map((item) => (
              <div key={item.type} className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.fill }}
                ></span>
                <span className="font-medium">
                  {item.type} – {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Property Revenue Table */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b text-gray-500">
                <th className="py-2">Property Type</th>
                <th>Revenue</th>
                <th>% of total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Residential</td>
                <td>₹90,000</td>
                <td>66.1%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Commercial</td>
                <td>₹90,000</td>
                <td>56.1%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Land</td>
                <td>₹50,000</td>
                <td>46.1%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Industrial</td>
                <td>₹40,000</td>
                <td>33.1%</td>
              </tr>
              <tr className="font-semibold">
                <td className="py-2">Total</td>
                <td>₹10,000</td>
                <td>10.1%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <RecentReports reports={recentReports} />
      <ScheduledReports reports={scheduledReports} />

     
    </div>
  );
};

export default FinancialTab;
