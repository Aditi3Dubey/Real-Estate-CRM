import { Mail, NotebookPen } from "lucide-react";
import React from "react";

const RecentLeads = () => {
  const leads = [
    {
      name: "Jane Cooper",
      contact: "jane@gmail.com",
      source: "Website",
      status: "Contacting",
      assigned: "Kenneth Allen",
      lastActivity: "4 hours ago",
      image:
        "https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png",
    },
    {
      name: "Wade Warren",
      contact: "j.wade@outlook.com",
      source: "Referral",
      status: "Qualified",
      assigned: "Kurt Bates",
      lastActivity: "Yesterday",
      image:
        "https://w7.pngwing.com/pngs/910/606/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png",
    },
    {
      name: "Bradley Lawlor",
      contact: "bradley@aol.com",
      source: "Google Ads",
      status: "New",
      assigned: "Autumn Phillips",
      lastActivity: "1 Day ago",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-4 max-w-full mx-auto overflow-hidden">
      <div
        className="flex justify-between items-center mb-4  p-2 rounded-md"
        style={{ backgroundColor: "#FFF4F0" }}
      >
        <h2 className="text-lg font-semibold">Recent Leads</h2>
        <button>View All</button>
      </div>

      {/* Responsive wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm">
          <thead>
            <tr className="text-gray-700">
              <th className="px-4 py-2 text-left">Lead</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Source</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Assigned</th>
              <th className="px-4 py-2 text-left">Last Activity</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  {lead.name}
                </td>
                <td className="px-4 py-2 text-gray-600">{lead.contact}</td>
                <td className="px-4 py-2">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {lead.source}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-full ${
                      lead.status === "Contacting"
                        ? "bg-yellow-100 text-yellow-800"
                        : lead.status === "Qualified"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-800">{lead.assigned}</td>
                <td className="px-4 py-2 text-gray-600">{lead.lastActivity}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <NotebookPen className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentLeads;
