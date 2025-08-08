import React from "react";
import { ArrowLeft } from "lucide-react";

const ScheduledReports = ({ reports = [] }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mt-4">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Scheduled Reports</h2>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1.5 rounded">
          Create Scheduled
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-sm">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-2">Report Name</th>
              <th>Frequency</th>
              <th>Next Run</th>
              <th>Recipients</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((item, i) => (
              <tr key={i} className="border-b">
                <td className="py-2">{item.name}</td>
                <td>{item.frequency}</td>
                <td>{item.nextRun}</td>
                <td>{item.recipients}</td>
                <td>
                  <span className="text-green-600 bg-green-100 px-2 py-1 rounded text-xs font-medium">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduledReports;
