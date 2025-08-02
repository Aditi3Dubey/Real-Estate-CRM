import React from "react";

const AddTaskModal = ({ onClose }) => {
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
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Task Name */}
          <div className="col-span-2">
            <label className="block text-sm text-gray-700 mb-1">
              Task Name
            </label>
            <input
              type="text"
              placeholder="Call client regarding inspection"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Priority</label>
            <select className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="">Select</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Due Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Assignee */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Assign To
            </label>
            <input
              type="text"
              placeholder="Autumn Phillips"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Related To */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Related To
            </label>
            <input
              type="text"
              placeholder="Robert Taylor (Lead)"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Notes */}
          <div className="col-span-2">
            <label className="block text-sm text-gray-700 mb-1">Notes</label>
            <textarea
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
