import React from "react";
import { User, Calendar, IndianRupee, MessageSquare, Home } from "lucide-react";
const RecentActivity = () => {
  const activities = [
    { icon: User, desc: "New lead created Michael Johnson" },
    { icon: Calendar, desc: "Site visit scheduled for Riverfront Villa" },
    {
      icon: IndianRupee,
      desc: "Payment received ₹25,000 for Oasis Apartments",
    },
    { icon: MessageSquare, desc: "Follow-up response from Sarah Williams" },
    { icon: Home, desc: "New property listed Sunset Heights Villa" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div
        className=" p-2 rounded-md flex justify-between items-center mb-4"
        style={{ backgroundColor: "#FFF4F0" }}
      >
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <button>View All</button>
      </div>

      <ul className="space-y-7">
        {activities.map((item, idx) => (
          <li key={idx} className="text-lg text-black flex items-center gap-4">
            <item.icon className="w-4 h-4 text-gray-900" />
            <span>{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
