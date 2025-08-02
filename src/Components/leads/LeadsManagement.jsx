import React, { useState } from "react";
import AddLeadModal from "./AddLeadModal";
import { Phone, Mail, CalendarDays, ArrowLeft } from "lucide-react";
import SummaryCard from "../SummaryCard";
import SearchBar from "../SearchBar";
import TableFooter from "../TableFooter";

const initialLeads = [
  {
    name: "Jane Cooper",
    email: "Jane@gmail.com",
    source: "Website",
    status: "In Progress",
    contactDate: "Jul 28, 2025",
    assigned: "Katie Sims",
    interest: "Residential",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Wade Warren",
    email: "j.Wade@outlook.com",
    source: "Referral",
    status: "Qualified",
    contactDate: "Jul 15, 2025",
    assigned: "Kathy Pacheco",
    interest: "Commercial",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Bradley Lawlor",
    email: "Bradley@aol.com",
    source: "Google Ads",
    status: "New",
    contactDate: "Jul 10, 2025",
    assigned: "Bradley Lawlor",
    interest: "Residential",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Rodger Struck",
    email: "david291@gmail.com",
    source: "Facebook Ads",
    status: "Nurturing",
    contactDate: "Jul 8, 2025",
    assigned: "Stephanie Nicol",
    interest: "Land",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Alex Buckmaster",
    email: "Alex@aol.com",
    source: "Referral",
    status: "Qualified",
    contactDate: "Jul 8, 2025",
    assigned: "Judith Rodriguez",
    interest: "Commercial",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
];

const statusColors = {
  "In Progress": "text-orange-500",
  Qualified: "text-green-600",
  New: "text-blue-500",
  Nurturing: "text-purple-600",
};

const sourceColors = {
  Website: "bg-blue-100 text-blue-700",
  Referral: "bg-purple-100 text-purple-700",
  "Google Ads": "bg-red-100 text-red-700",
  "Facebook Ads": "bg-sky-100 text-sky-700",
};

export default function LeadsManagement() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [leads, setLeads] = useState(initialLeads);

  const handleAddLead = (newLead) => {
    const formattedLead = {
      ...newLead,
      contactDate: new Date().toDateString(),
      avatar: `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70)}`,
    };
    setLeads((prev) => [formattedLead, ...prev]);
  };

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto bg-gray-50 min-h-screen">
      <div className="w-full px-4 max-w-screen-xl mx-auto">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Left: Title */}
          <div className="flex items-center gap-2 min-w-[150px]">
            <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
            <h1 className="text-lg sm:text-xl font-semibold">
              Lead Management
            </h1>
          </div>

          {/* Spacer (center blank area) */}
          <div className="flex-1 hidden md:block" />

          {/* Right: Search + Filter + Button */}
          <div className="flex flex-wrap items-center justify-end gap-2 w-full sm:w-auto">
            {/* Slightly smaller SearchBar */}
            <div className="w-full sm:w-[200px]">
              <SearchBar searchPlaceholder="Search Leads" />
            </div>

            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 w-full sm:w-auto">
              <option>Filter by Date Range</option>
            </select>

            <button
              onClick={() => setShowAddModal(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm w-full sm:w-auto"
            >
              Add Leads
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <SummaryCard
            title="Total Leads"
            value="154"
            change="+12.5%"
            color="green"
            textColor="green"
            iconColor="green"
            period= "vs last month"
          />
          <SummaryCard
            title="New Leads"
            value="32"
            change="+8.2%"
            color="blue"
             textColor="green"
            iconColor="green"
            period= "vs last month"
          />
          <SummaryCard
            title="Qualified Leads"
            value="94"
            change="+15.3%"
            color="purple"
             textColor="green"
            iconColor="green"
            period= "from last month"
          />
          <SummaryCard
            title="Conversion Rate"
            value="24.7%"
            change="-2.1%"
            color="pink"
             textColor="red"
            iconColor="red"
            period= "vs last month"
          />
        </div>
      </div>

      {/* Responsive Scrollable Table */}
      <div className="w-full overflow-x-auto rounded-lg border bg-white shadow-sm">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="text-left bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 whitespace-nowrap">Lead Name & Email</th>
              <th className="p-3 whitespace-nowrap">Source</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 whitespace-nowrap">Last Contact</th>
              <th className="p-3 whitespace-nowrap">Assigned To</th>
              <th className="p-3 whitespace-nowrap">Interest</th>
              <th className="p-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="p-3 whitespace-nowrap">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <img
                      src={lead.avatar}
                      alt={lead.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      sourceColors[lead.source]
                    }`}
                  >
                    {lead.source}
                  </span>
                </td>
                <td
                  className={`p-3 font-medium whitespace-nowrap ${
                    statusColors[lead.status]
                  }`}
                >
                  {lead.status}
                </td>
                <td className="p-3 whitespace-nowrap">{lead.contactDate}</td>
                <td className="p-3 whitespace-nowrap">{lead.assigned}</td>
                <td className="p-3 whitespace-nowrap">{lead.interest}</td>
                <td className="p-3 flex gap-3 text-gray-500 whitespace-nowrap">
                  <Phone className="w-4 h-4 cursor-pointer hover:text-blue-500" />
                  <Mail className="w-4 h-4 cursor-pointer hover:text-blue-500" />
                  <CalendarDays className="w-4 h-4 cursor-pointer hover:text-blue-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Lead Modal */}
      {showAddModal && (
        <AddLeadModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddLead}
        />
      )}

      {/* Pagination */}
      <div className="mt-6">
        <TableFooter />
      </div>
    </div>
  );
}
