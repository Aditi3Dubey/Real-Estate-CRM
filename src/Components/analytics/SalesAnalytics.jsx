import React from "react";
import {
  ClipboardList,
  Clock4,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
} from "recharts";
import SalesPie from "../SalesPie";
import SummaryCard from "../SummaryCard";

const monthlyData = [
  { month: "Jan", sales: 50, leads: 10 },
  { month: "Feb", sales: 60, leads: 15 },
  { month: "Mar", sales: 70, leads: 18 },
  { month: "Apr", sales: 60, leads: 12 },
  { month: "May", sales: 45, leads: 10 },
  { month: "Jun", sales: 55, leads: 14 },
  { month: "Jul", sales: 62, leads: 12 },
  { month: "Aug", sales: 75, leads: 25 },
  { month: "Sep", sales: 65, leads: 20 },
  { month: "Oct", sales: 58, leads: 22 },
  { month: "Nov", sales: 50, leads: 14 },
  { month: "Dec", sales: 66, leads: 18 },
];

const funnelData = [
  { stage: "<500K", value: 70 },
  { stage: "<500K-750K", value: 75 },
  { stage: "750K-1M", value: 92 },
  { stage: "1M-1.5M", value: 94 },
  { stage: "1.5M-2M", value: 88 },
  { stage: ">2M", value: 87 },
];

const SalesAnalytics = () => {
  return (
    <div className="space-y-6 mt-6">
      {/* Summary Cards */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible mb-6">
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Total Leads"
            value="1924"
            icon={TrendingUp}
            iconColor="green"
            change="12.5%"
            period="vs last month"
            color="green"
            textColor="green"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Property Visits"
            value="432"
            icon={TrendingUp}
            iconColor="green"
            change="8.2%"
            period="vs last month"
            color="blue"
            textColor="green"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Active Listings"
            value="94"
            icon={TrendingDown}
            iconColor="red"
            change="3.1%"
            period="vs last month"
            color="purple"
            textColor="red"
          />
        </div>
      </div>

      {/* Monthly Sales & Leads */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div>
            <h2 className="text-lg font-semibold">Monthly Performance</h2>
            <p className="text-sm text-gray-500">
              Sales, Leads and conversion trends over time
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sales
            </button>
            <button className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
              Leads
            </button>
          </div>
        </div>

        <div className="w-full h-[300px] sm:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#2F80ED" radius={[4, 4, 0, 0]} />
              <Bar dataKey="leads" fill="#AED4FC" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart (Sales by Property Type) */}
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-md font-bold text-black">
              Property Type Distribution
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Sales distribution by property type
            </p>
          </div>
          <div className="w-full">
            <SalesPie />
          </div>
        </div>

        {/* Time on Market by Price Range */}
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-md font-bold text-black">
              Time on market by price range
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Average time properties spend on the market by price range
            </p>
          </div>

          {/* Wrapped Chart Card */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow min-h-[350px] w-full">
            <div className="w-full h-[250px] sm:h-[310px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnelData} margin={{ top: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="stage"
                    tick={{ fontSize: 11 }}
                    interval={0}
                    angle={-15}
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip
                    wrapperStyle={{ zIndex: 10 }}
                    cursor={{ fill: "rgba(136, 132, 216, 0.1)" }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#8884d8"
                    shape={({ x, y, width, height, fill }) => (
                      <g>
                        <ellipse
                          cx={x + width / 2}
                          cy={y}
                          rx={width / 2}
                          ry={10}
                          fill={fill}
                        />
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height={height - 10}
                          fill={fill}
                        />
                        <ellipse
                          cx={x + width / 2}
                          cy={y + height - 10}
                          rx={width / 2}
                          ry={10}
                          fill={fill}
                        />
                      </g>
                    )}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
