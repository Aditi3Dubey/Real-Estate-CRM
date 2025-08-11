import React from "react";
import SummaryCard from "../SummaryCard";
import { TrendingDown, TrendingUp } from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
  Tooltip,
} from "recharts";
import SalesPie from "../SalesPie";

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
const viewData = [
  { day: 1, online: 18, site: 32 },
  { day: 2, online: 19, site: 35 },
  { day: 30, online: 14, site: 36 },
];
const propertySales = [
  { name: "Residential", value: 60 },
  { name: "Commercial", value: 20 },
  { name: "Land", value: 15 },
  { name: "Industries", value: 5 },
];
const COLORS2 = ["#8884d8", "#FF9F43", "#82ca9d", "#00C49F"];
const data = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  online: [
    17, 19, 15, 14, 11, 11, 13, 16, 13, 13, 12, 10, 13, 20, 11, 15, 18, 12, 8,
    10, 15, 15, 15, 10, 18, 16, 14, 12, 15, 12,
  ][i],
  site: [
    31, 36, 31, 30, 33, 36, 39, 30, 35, 35, 35, 30, 28, 33, 31, 40, 37, 31, 42,
    33, 29, 31, 32, 35, 32, 31, 31, 35, 39, 37,
  ][i],
}));

const PropertyAnalytic = () => {
  return (
    <div>
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible mb-6">
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Total Leads"
            value="1924"
            icon={TrendingUp}
            iconColor="green"
            change="12.5%"
            period="vs last month"
            color="blue"
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
            color="green"
            bgcolor="bg-purple-100"
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
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Active Listings"
            value="94"
            icon={TrendingDown}
            iconColor="red"
            change="3.1%"
            period="vs last month"
            color="pink"
            textColor="red"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Property Type Distribution */}
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-md font-bold text-black">
              Property Type Distribution
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Listings by property type
            </p>
          </div>
          <SalesPie />
        </div>

        {/* Time on market by price range */}
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-md font-bold text-black">
              Time on market by price range
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Average days until properties are sold
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow min-h-[360px] w-full">
            <div className="w-full h-[300px]">
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

      <div className="flex-1">
        <h3 className="text-md font-bold mb-1 mt-8 text-black">
          Property Viewings and Site Visits
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Online views vs physical site visits
        </p>
        <div className="bg-white p-4 rounded-xl shadow flex-1 h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <XAxis dataKey="day" tickLine={false} />
              <YAxis tickLine={false} domain={[0, 60]} />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
              <Line
                type="monotone"
                dataKey="online"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
                name="Online Views"
              />
              <Line
                type="monotone"
                dataKey="site"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
                name="Site Visits"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PropertyAnalytic;
