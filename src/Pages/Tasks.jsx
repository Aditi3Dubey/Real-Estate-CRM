import React, { useState } from "react";
import {
  AlertTriangle,
  Clock,
  CheckCircle,
  MoreHorizontal,
  ArrowLeft,
  ClipboardList,
  Clock4,
  TriangleAlert,
  CircleCheck,
  Pencil,
  Check,
  Trash2,
  Wallet,
} from "lucide-react";
import TableFooter from "../Components/TableFooter";
import SearchBar from "../Components/Searchbar";
import SummaryCard from "../Components/SummaryCard";
import AddTaskModal from "../Components/AddTaskModal";

const tasks = [
  {
    iconType: "AlertTriangle",
    iconColor: "text-red-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "High",
    dueDate: "Jun 28, 2025",
    assignee: "Autumn Phillips",
    relatedTo: "Robert taylor (Lead)",
  },
  {
    iconType: "Clock",
    iconColor: "text-yellow-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "Low",
    dueDate: "Jun 15, 2025",
    assignee: "Daniel Hamilton",
    relatedTo: "John Doe (Lead)",
  },
  {
    iconType: "Clock",
    iconColor: "text-yellow-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "Low",
    dueDate: "Jun 10, 2025",
    assignee: "Kimberly Mastrangelo",
    relatedTo: "Emma wilson (Lead)",
  },
  {
    iconType: "AlertTriangle",
    iconColor: "text-red-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "High",
    dueDate: "Jun 10, 2025",
    assignee: "Jerry Helfer",
    relatedTo: "System",
  },
  {
    iconType: "AlertTriangle",
    iconColor: "text-red-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "High",
    dueDate: "Jul 8, 2025",
    assignee: "James Hall",
    relatedTo: "Cozy Suburban House (Property)",
  },
  {
    iconType: "CheckCircle",
    iconColor: "text-green-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "Medium",
    dueDate: "Jul 8, 2025",
    assignee: "Bradley Lawlor",
    relatedTo: "Alex Martinez (Lead)",
  },
  {
    iconType: "CheckCircle",
    iconColor: "text-green-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "Medium",
    dueDate: "Jul 8, 2025",
    assignee: "Alex Buckmaster",
    relatedTo: "Jerry Helfer (Lead)",
  },
  {
    iconType: "CheckCircle",
    iconColor: "text-green-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "Medium",
    dueDate: "Jul 8, 2025",
    assignee: "Rodger Struck",
    relatedTo: "Dennis Callis (Lead)",
  },
  {
    iconType: "Clock",
    iconColor: "text-yellow-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "Low",
    dueDate: "Jul 8, 2025",
    assignee: "Lorri Warf",
    relatedTo: "Katie Sims (Lead)",
  },
  {
    iconType: "AlertTriangle",
    iconColor: "text-red-500",
    name: "Call Robert Taylor about Condominium inspection",
    priority: "High",
    dueDate: "Jul 8, 2025",
    assignee: "Joshua Jones",
    relatedTo: "Stephanie Sharkey (Lead)",
  },
];
const iconMap = {
  AlertTriangle,
  Clock,
  CheckCircle,
};

const getPriorityStyle = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-600";
    case "Medium":
      return "bg-blue-100 text-blue-600";
    case "Low":
      return "bg-yellow-100 text-yellow-600";
    default:
      return "";
  }
};

const Tasks = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  return (
    <div className="p-4 max-w-screen bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
          <h1 className="text-xl font-semibold">Task Management</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <SearchBar searchPlaceholder="Search Visits..." />

          <div className="flex border border-gray-300 rounded-md overflow-hidden text-sm bg-white text-gray-700 w-full sm:w-auto">
            {["Completed", "Pending", "All"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`flex-1 px-4 py-2 transition-colors ${
                  filter === status
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full sm:w-auto"
            onClick={() => setShowAddModal(true)}
          >
            Add Task
          </button>
        </div>
      </div>
      {/* SummaryCards */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible  mb-6">
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Total Tasks"
            value="28"
            icon={Wallet}
            iconColor="green"
            change="+5.3%"
            period="from last Week"
            color="blue"
            textColor="green"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Pending "
            value="14"
            icon={Clock4}
            iconColor="green"
            change="-8.2%"
            period="from last Week"
            color="blue"
            textColor="green"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Overdue "
            value="3"
            icon={TriangleAlert}
            iconColor="red"
            change="+2%"
            period=" from last month"
            color="purple"
            textColor="red"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Completed"
            value="11"
            icon={CircleCheck}
            iconColor="green"
            change="+4"
            period="from last Week"
            color="pink"
            textColor="green"
          />
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y">
          <thead className="text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-3">Lead Name</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">Assign To</th>
              <th className="px-4 py-3">Related To</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100 text-gray-700">
            {tasks
              .filter((task) => {
                if (filter === "All") return true;
                if (filter === "Completed")
                  return task.iconType === "CheckCircle";
                if (filter === "Pending") return task.iconType === "Clock";
                return false;
              })
              .map((task, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 flex items-center gap-2">
                    {React.createElement(iconMap[task.iconType], {
                      className: `w-4 h-4 ${task.iconColor}`,
                    })}
                    {task.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityStyle(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-red-500">{task.dueDate}</td>
                  <td className="px-4 py-3">{task.assignee}</td>
                  <td className="px-4 py-3">{task.relatedTo}</td>
                  <td className="px-4 py-3 relative">
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() =>
                        setOpenMenuIndex(openMenuIndex === i ? null : i)
                      }
                    >
                      <MoreHorizontal className="w-4 h-4 text-gray-600" />
                    </button>

                    {openMenuIndex === i && (
                      <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow z-10">
                        <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                          <Pencil className="w-4 h-4 text-gray-600" />
                          Edit Task
                        </button>
                        <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                          <Check className="w-4 h-4 text-green-600" />
                          Mark as Complete
                        </button>
                        <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                          <Trash2 className="w-4 h-4" />
                          Delete Task
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <TableFooter />
      {showAddModal && <AddTaskModal onClose={() => setShowAddModal(false)} />}
    </div>
  );
};

export default Tasks;
