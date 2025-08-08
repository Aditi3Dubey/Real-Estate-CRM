import { ChevronDown } from "lucide-react";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const leadSources = [
  { name: "Referrals", value: 25, color: "#7c3aed" },
  { name: "Facebook", value: 15, color: "#f97316" },
  { name: "Website", value: 42, color: "#22c55e" },
  { name: "Google ads", value: 18, color: "#06b6d4" },
  { name: "Proterty Portals", value: 10, color: "#0284c7 " },
];

const LeadSources = ({ type = "bar" }) => (
  <div className="bg-white p-4 sm:p-6  shadow min-h-[350px] w-full rounded-xl">
    {/* Pie Chart Only */}
    {type === "pie" && (
      <div className="p-4 rounded-lg flex-1">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Chart */}
          <div className="w-[250px] h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  isAnimationActive={true}
                >
                  {leadSources.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{ transition: "all 0.3s ease" }}
                      onMouseOver={(e) => (e.target.style.opacity = 0.8)}
                      onMouseOut={(e) => (e.target.style.opacity = 1)}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div>
            <ul className="flex flex-col justify-center gap-3">
              {leadSources.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )}

    {/* Summary + Progress Bar */}
    {type === "bar" && (
      <>
        <div>
          <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
            <h3 className="text-lg font-bold">Lead Sources</h3>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Aug 25 – Sept 25</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            {/* Lead Sources List */}
            <div className="text-sm space-y-4">
              {leadSources.map((src) => (
                <div key={src.name} className="flex gap-2">
                  <span className="font-medium" style={{ color: src.color }}>
                    {src.name}
                  </span>
                  <span>: {src.value}%</span>
                </div>
              ))}
            </div>

            {/* Image */}
            {/* Pie Chart Only */}
            {/* <div className="w-32 h-32 mx-auto md:mx-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leadSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={40}
                    dataKey="value"
                    isAnimationActive={false}
                  >
                    {leadSources.map((entry, index) => (
                      <Cell key={`cell-mini-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div> */}
            {/* Mini Pie Chart Section */}
            <div className="text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={leadSources}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={65}
                      dataKey="value"
                      isAnimationActive={false}
                    >
                      {leadSources.map((entry, index) => (
                        <Cell key={`cell-mini-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-10">
          {leadSources.map((src) => (
            <div key={src.name}>
              <div className="flex justify-between text-xs mb-2 text-gray-700">
                <span>{src.name}</span>
                <span>{src.value}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${src.value}%`,
                    backgroundColor: src.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

export default LeadSources;
