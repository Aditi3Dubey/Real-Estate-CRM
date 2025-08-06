import React from "react";
import SummaryCard from "../SummaryCard";
import { TrendingUp } from "lucide-react";
import LeadSources from "../dashboard/LeadSources";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  YAxis,
} from "recharts";

const funnelData = [
  { stage: "Lost", value: 70 },
  { stage: "Closed", value: 80 },
  { stage: "Negotiation", value: 95 },
  { stage: "Proposal", value: 100 },
  { stage: "Qualified", value: 85 },
  { stage: "Contacted", value: 85 },
  { stage: "New", value: 85 },
];

const dailyActivityData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  Visits: Math.floor(Math.random() * 10) + 10,
  Inquiries: Math.floor(Math.random() * 15) + 25,
}));

const LeadAnalytics = () => {
  return (
    <div className="w-full px-2 sm:px-4">
      {/* Summary Cards */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible px-2 mb-6">
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Total Leads"
            icon={TrendingUp}
            iconColor="green"
            value="1352"
            change="+5.3%"
            textColor="green"
            color="green"
            bgcolor="bg-green-50"
            period="from last week"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Conversion Rate"
            value="18.4%"
            icon={TrendingUp}
            iconColor="green"
            textColor="green"
            change="2.3%"
            color="blue"
            bgcolor="bg-green-50"
            period="from last week"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Avg Response Time"
            value="3.2 hours"
            change="0.5 hrs"
            icon={TrendingUp}
            iconColor="green"
            textColor="green"
            color="purple"
            bgcolor="bg-purple-100"
            period="vs last period"
          />
        </div>
      </div>

      {/* Lead Sources & Funnel Chart */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Lead Sources */}
        <div className="flex-1 p-4 rounded-md border">
          <h3 className="text-md font-bold mb-1 text-black">Lead Sources</h3>
          <p className="text-sm text-gray-500 mb-3">
            Where your leads are coming from
          </p>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[500px] h-[340px] sm:h-[380px]">
              <LeadSources type="pie" />
            </div>
          </div>
        </div>

        {/* Funnel */}
        <div className="flex-1 min-w-0 p-4 rounded-md border overflow-hidden">
          <h3 className="text-md font-bold mb-1 text-black">
            Lead Conversion Funnel
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Lead journey through sales pipeline
          </p>
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

      {/* Website Activity */}
      <div className="mt-10 p-4 rounded-md border overflow-hidden">
        <h3 className="text-md font-bold mb-1 text-black">
          Daily Website Activity
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          Website visits and lead inquiries
        </p>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dailyActivityData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Visits"
                stroke="#00C853"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Inquiries"
                stroke="#00B0FF"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LeadAnalytics;
