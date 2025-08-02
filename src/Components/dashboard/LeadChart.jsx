import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const leadData = Array.from({ length: 12 }, (_, i) => ({
  month: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][i],
  leads: Math.floor(Math.random() * 40) + 60,
}));

const LeadChart = () => (
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow w-full overflow-hidden">
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <h3 className="text-lg font-semibold">Lead Activity</h3>
      <select className="text-sm px-2 py-1 border rounded bg-white">
        <option>Monthly</option>
        <option>Weekly</option>
      </select>
    </div>
    <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-full -ml-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={leadData}>
          <defs>
            <linearGradient id="colorLead" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="leads"
            stroke="#f97316"
            fillOpacity={1}
            fill="url(#colorLead)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default LeadChart;
