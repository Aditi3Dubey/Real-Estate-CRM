import React from "react";
// import { useNavigate } from "react-router-dom";

export default function Button({
  label,
  // {to,}
  icon: Icon,
  bgColor = "bg-orange-500",
  textColor = "text-white",
  hoverColor = "hover:bg-orange-600",
  borderColor = "border-transparent",
}) {
  // const navigate = useNavigate();

  return (
    <div>
      <button
        // onClick={() => navigate(to)}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded w-full sm:w-auto transition 
        ${bgColor} ${textColor} ${hoverColor} ${borderColor} border`}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {label}
      </button>
    </div>
  );
}
