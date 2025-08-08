import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Website Seo", value: 35, color: "#2ec4b6" },
  { name: "Social Media", value: 25, color: "#ffc107" },
  { name: "Paid Ads", value: 18, color: "#f06595" },
  { name: "Referrals", value: 12, color: "#e64980" },
  { name: "Email", value: 10, color: "#845ef7" },
];

const barData = [
  { name: "Website Seo", leads: 250, cost: 340 },
  { name: "Social Media", leads: 550, cost: 430 },
  { name: "Paid Ads", leads: 600, cost: 490 },
  { name: "Referrals", leads: 70, cost: 270 },
  { name: "Email", leads: 280, cost: 410 },
];

const ChartSection = () => {
  return (
    <div className="bg-[#fff4f3] p-4 sm:p-6 md:p-8 rounded-xl w-full">
      <h2 className="text-lg sm:text-xl font-semibold mb-6 text-center md:text-left">
        Marketing Channel Performance
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Pie Chart */}
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center justify-center">
          <div className="relative w-[250px] h-[250px]">
            <PieChart width={250} height={250}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={1}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-xs text-gray-600 font-medium">Lead Sources</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-6 space-y-2 text-sm">
            {pieData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></span>
                <span className="text-gray-800">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="w-full md:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barGap={10}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="leads"
                fill="#9AE6B4"
                name="Leads Generated"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="cost"
                fill="#fcbf49"
                name="Cost per Lead (₹)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
