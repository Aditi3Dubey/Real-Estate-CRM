import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const propertySales = [
  { name: "Residential", value: 60 },
  { name: "Commercial", value: 20 },
  { name: "Land", value: 15 },
  { name: "Industries", value: 5 },
];

const COLORS2 = ["#3F3FC7", "#FF7F23", "#84C225", "#008b8b", "#1DBFC1"];

const SalesPie = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow min-h-[350px] w-full">
      <div className="p-4 rounded-lg flex-1">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Pie Chart */}
          <div className="w-[250px] h-[250px] md:w-[280px] md:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={propertySales}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
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
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div>
            <ul className="flex flex-col justify-center gap-3">
              {propertySales.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS2[index % COLORS2.length] }}
                  ></span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPie;
