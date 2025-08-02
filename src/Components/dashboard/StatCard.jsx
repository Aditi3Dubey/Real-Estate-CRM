import React from "react";

const StatCard = ({ title, value, change, icon: Icon, bgcolor, compare }) => {
  const isPositive = change.includes("+");
  const colorClass = isPositive ? "text-green-600" : "text-red-500";

  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 ${bgcolor} rounded-xl shadow w-full border ${bgcolor}/50`}
    >
      <div className="bg-white rounded-full p-2 shadow">
        {Icon && <Icon size={24} className={colorClass} />}
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-center w-full text-lg font-medium text-gray-700">
          <span>{title}</span>
          <span className="text-black font-bold text-base">{value}</span>
        </div>
        <div className={`text-md mt-1 flex items-center gap-1 ${colorClass}`}>
          {change}
          <span className="text-gray-500 font-bold">{compare}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
