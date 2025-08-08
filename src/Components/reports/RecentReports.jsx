import React from "react";
import { Printer, Mail, Download, ArrowLeft } from "lucide-react";

const RecentReports = ({ reports = [] }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mt-4">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Recent Reports</h2>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1.5 rounded">
          View All Reports
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-sm">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-2">ID</th>
              <th>Report Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="py-2">{report.id}</td>
                <td>{report.name}</td>
                <td>{report.type}</td>
                <td>{report.date}</td>
                <td>{report.size}</td>
                <td className="flex gap-4 py-2">
                  <Printer className="h-4 w-4 cursor-pointer text-gray-600" />
                  <Mail className="h-4 w-4 cursor-pointer text-gray-600" />
                  <Download className="h-4 w-4 cursor-pointer text-gray-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentReports;
