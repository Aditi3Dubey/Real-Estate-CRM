import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const SummaryCard = ({ title, value, change, color, textColor, iconColor, icon: Icon , period }) => {
  const isPositive = !change?.includes("-");

  const bgColors = {
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-100 border-purple-200",
    red: "bg-red-30 border-red-200",
    pink: "bg-pink-50 border-pink-200",
  };

  const textColors = {
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
    red: "text-red-500",
  };

  const iconColors = {
    green: "text-green-600 bg-green-100",
    blue: "text-blue-600 bg-blue-100",
    purple: "text-purple-600 bg-purple-100",
    red: "text-red-500 bg-red-100",
  };

  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border shadow-sm ${bgColors[color]} w-full`}>
      <div className={`p-2 rounded-full ${iconColors[iconColor]} flex items-center justify-center`}>
        {Icon ? <Icon className="w-4 h-4" /> : (isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />)}
      </div>
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <h2 className="text-lg font-semibold">{value}</h2>
        {change && (
          <p className="text-sm mt-1 font-medium">
            <span className={`${textColors[textColor]}`}>{change}</span> {period ? `${period}` : ""}
          </p>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
