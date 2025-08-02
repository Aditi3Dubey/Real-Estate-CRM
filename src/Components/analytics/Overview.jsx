import React from "react";
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
} from "recharts";
import {
  CircleCheck,
  ClipboardList,
  Clock4,
  TriangleAlert,
} from "lucide-react";
import StatCard from "../dashboard/StatCard";
import LeadSources from "../dashboard/LeadSources";

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

const leadSources = [
  { name: "Website", value: 35 },
  { name: "Referrals", value: 25 },
  { name: "Google Ads", value: 18 },
  { name: "Facebook", value: 12 },
  { name: "Property Portals", value: 10 },
];

const propertySales = [
  { name: "Residential", value: 60 },
  { name: "Commercial", value: 20 },
  { name: "Land", value: 15 },
  { name: "Industries", value: 5 },
];

const COLORS1 = ["#00C49F", "#FFBB28", "#FF69B4", "#FF4C4C", "#8884d8"];
const COLORS2 = ["#8884d8", "#FF9F43", "#82ca9d", "#00C49F"];

const Overview = () => {
  return (
    <div className="space-y-6 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-6">
        <StatCard
          title="Total Tasks"
          icon={ClipboardList}
          value="1924"
          change="+12.5%"
          color="green"
          bgcolor="bg-green-50"
          compare="from last week"
        />
        <StatCard
          title="Pending"
          value="432"
          icon={Clock4}
          change="+8.2%"
          color="blue"
          bgcolor="bg-green-50"
          compare="from last week"
        />
        <StatCard
          title="OverDue"
          value="94"
          change="-3.1%"
          icon={TriangleAlert}
          color="purple"
          bgcolor="bg-purple-100"
          compare="from last month"
        />
        <StatCard
          title="Completed"
          value="36"
          icon={CircleCheck}
          change="+18.9%"
          color="rose"
          bgcolor="bg-rose-50"
          compare="from last week"
        />
      </div>
      {/* Monthly Performance */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
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

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
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

      {/* Donut Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Lead Sources */}
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-bold text-black">Lead Sources</h3>
          <LeadSources type="pie" />
        </div>

        {/* Sales by Property Type */}
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-bold text-black">
            Sales by Property Type
          </h3>
          <div className="bg-white p-4 rounded-lg shadow duration-300 h-[350px]">
            <ResponsiveContainer width="100%" height="85%">
              <PieChart>
                <Pie
                  data={propertySales}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  isAnimationActive={true}
                >
                  {propertySales.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS2[index % COLORS2.length]}
                      style={{ transition: "all 0.3s ease" }}
                      onMouseOver={(e) => (e.target.style.opacity = 0.8)}
                      onMouseOut={(e) => (e.target.style.opacity = 1)}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="middle"
                  align="right"
                  layout="vertical"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
