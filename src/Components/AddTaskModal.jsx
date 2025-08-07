// components/AddTaskModal.jsx
import React, { useState } from "react";
import { AlertTriangle, Clock, CheckCircle } from "lucide-react";

// Mapping for icon based on priority (or status)
const iconMap = {
  High: "AlertTriangle",
  Medium: "Clock", // Assuming a new medium priority icon
  Low: "Clock",
};

const AddTaskModal = ({ onClose, onSave }) => {
  const [taskDetails, setTaskDetails] = useState({
    name: "",
    priority: "Low", // Default priority
    dueDate: "",
    assignee: "",
    relatedTo: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Determine iconType based on priority
    const newIconType = taskDetails.priority === "High" ? "AlertTriangle" : "Clock";
    const newIconColor =
      taskDetails.priority === "High"
        ? "text-red-500"
        : taskDetails.priority === "Medium"
        ? "text-blue-500"
        : "text-yellow-500";

    // Create the new task object with all the required properties
    const newTask = {
      ...taskDetails,
      iconType: newIconType,
      iconColor: newIconColor,
      status: "Pending", // New tasks are always pending by default
    };

    // Call the onSave function from the parent to add the task
    onSave(newTask);
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white p-6 md:p-8 rounded-xl w-full max-w-2xl shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Add New Task</h2>
          <p className="text-gray-500 text-sm">
            Enter the task details to assign and track
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Task Name */}
          <div className="col-span-2">
            <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
              Task Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={taskDetails.name}
              onChange={handleChange}
              placeholder="Call client regarding inspection"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm text-gray-700 mb-1">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={taskDetails.priority}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label htmlFor="dueDate" className="block text-sm text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={taskDetails.dueDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Assignee */}
          <div>
            <label htmlFor="assignee" className="block text-sm text-gray-700 mb-1">
              Assign To
            </label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              value={taskDetails.assignee}
              onChange={handleChange}
              placeholder="Autumn Phillips"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Related To */}
          <div>
            <label htmlFor="relatedTo" className="block text-sm text-gray-700 mb-1">
              Related To
            </label>
            <input
              type="text"
              id="relatedTo"
              name="relatedTo"
              value={taskDetails.relatedTo}
              onChange={handleChange}
              placeholder="Robert Taylor (Lead)"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Notes */}
          <div className="col-span-2">
            <label htmlFor="notes" className="block text-sm text-gray-700 mb-1">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={taskDetails.notes}
              onChange={handleChange}
              placeholder="Additional notes..."
              rows={3}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;