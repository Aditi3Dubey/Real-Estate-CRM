import React from "react";
import { CheckSquare, Clock, Square } from "lucide-react";

const UpcomingTasks = () => {
  const tasks = [
    {
      title: "Call back Michael Johnson",
      time: "Today, 2:30 PM",
      priority: "High",
    },
    {
      title: "Schedule site visit for Sarah Williams",
      time: "Tomorrow, 10:00 AM",
      priority: "High",
    },
    {
      title: "Prepare contract for Heights Villa",
      time: "Thursday, 1:00 PM",
      priority: "Low",
    },
    {
      title: "Follow up with leads Open House",
      time: "Friday, 11:00 AM",
      priority: "Low",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-4 max-w-md mx-auto w-full">
      <div
        className="flex flex-wrap justify-between items-center mb-4  p-2 rounded-md gap-2"
        style={{ backgroundColor: "#FFF4F0" }}
      >
        <h2 className="text-lg font-semibold">Upcoming Tasks</h2>
        <button className="text-sm">View All</button>
      </div>
      <ul className="space-y-3">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white rounded-lg shadow gap-3"
          >
            <div className="flex-1">
              <div className="flex items-start">
                <Square className="w-5 h-5 text-gray-500 mr-2 mt-0.5" />
                <span className="text-sm font-medium text-gray-900">
                  {task.title}
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-2 pl-6">
                <Clock className="w-4 h-4 mr-1" />
                {task.time}
              </div>
            </div>

            <span
              className={`text-xs px-2 py-1 rounded-full whitespace-nowrap self-start sm:self-auto ${
                task.priority === "High"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              Priority: {task.priority}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTasks;
