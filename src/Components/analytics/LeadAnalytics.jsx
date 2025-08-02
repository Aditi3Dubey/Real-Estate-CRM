import React from "react";
import StatCard from "../dashboard/StatCard";
import {
  CircleCheck,
  ClipboardList,
  Clock4,
  TriangleAlert,
} from "lucide-react";

import LeadSources from "../dashboard/LeadSources";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
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

const LeadAnalytics = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 mt-6">
        <StatCard
          title="Total Leads"
          icon={ClipboardList}
          value="1924"
          change="+12.5%"
          color="green"
          bgcolor="bg-green-50"
          compare="from last week"
        />
        <StatCard
          title="Conversion Rate"
          value="18.4%"
          icon={Clock4}
          change="+8.2%"
          color="blue"
          bgcolor="bg-green-50"
          compare="from last week"
        />
        <StatCard
          title="Avg Response Time"
          value="3.2 hrs"
          change="-3.1%"
          icon={TriangleAlert}
          color="purple"
          bgcolor="bg-purple-100"
          compare="from last month"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Lead Sources */}
        <div className=" flex-1">
          <h3 className="text-md font-bold mb-1 text-black">Lead Sources</h3>
          <p className="text-sm text-gray-500 mb-3">
            Where your leads are coming from
          </p>
          <LeadSources type="pie" />
        </div>

        {/* Lead Conversion Funnel */}
        <div className="flex-1">
          <h3 className="text-md font-bold mb-1 text-black">
            Lead Conversion Funnel
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Lead journey through sales pipeline
          </p>
          <div className="bg-white p-4 rounded-xl shadow flex-1 h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={funnelData}
                barCategoryGap={20}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="stage"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#555", fontSize: 12 }}
                />
                <Bar
                  dataKey="value"
                  radius={[12, 12, 0, 0]}
                  fill="#93c5fd"
                  opacity={0.6}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadAnalytics;
