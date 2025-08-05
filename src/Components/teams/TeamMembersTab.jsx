import React from "react";
import { MessageSquare, Mail, MoreVertical, WalletCards } from "lucide-react";
import SummaryCard from "../SummaryCard"; // Assuming you have a SummaryCard component

// Dummy team members data
const teamMembers = [
  {
    name: "Jane Cooper",
    role: "Senior Agent",
    status: "On Leave",
    email: "Jane@gmail.com",
    phone: "(347) 438-7215",
    listings: "12 (8 closed)",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Wade Warren",
    role: "Senior Agent",
    status: "Active",
    email: "j.Wade@outlook.com",
    phone: "(785) 712-6532",
    listings: "8 (5 closed)",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Bradley Lawlor",
    role: "Senior Agent",
    status: "On Leave",
    email: "Bradley@aol.com",
    phone: "(843) 461-5941",
    listings: "12 (8 closed)",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Rodger Struck",
    role: "Senior Agent",
    status: "Inactive",
    email: "david291@gmail.com",
    phone: "(904) 335-2403",
    listings: "12 (8 closed)",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Alex Buckmaster",
    role: "Senior Agent",
    status: "Active",
    email: "Alex@aol.com",
    phone: "(401) 715-3344",
    listings: "12 (8 closed)",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Frances Swann",
    role: "Senior Agent",
    status: "On Leave",
    email: "Frances@gmail.com",
    phone: "(518) 744-6291",
    listings: "12 (8 closed)",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Eddie Lake",
    role: "Senior Agent",
    status: "Active",
    email: "Eddie@gmail.com",
    phone: "(765) 322-1399",
    listings: "12 (8 closed)",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Ricky Smith",
    role: "Senior Agent",
    status: "On Leave",
    email: "Ricky@aol.com",
    phone: "(215) 424-7763",
    listings: "12 (8 closed)",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

// Status color utility
const getStatusColor = (status) => {
  if (status === "Active") return "text-green-600";
  if (status === "On Leave") return "text-orange-500";
  return "text-gray-400";
};

const TeamMembersTab = () => {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {/* Summary Cards */}
        <SummaryCard
          title="Total Revenue"
          value="₹7,00,000"
          change="+15%"
          color="blue"
          icon={WalletCards}
          period="vs last Year"
          iconColor="white"
          textColor="green"
        />
        <SummaryCard
          title="Total Revenue"
          value="₹7,00,000"
          change="+15%"
          color="blue"
          icon={WalletCards}
          period="vs last Year"
          iconColor="white"
          textColor="green"
        />
        <SummaryCard
          title="Total Revenue"
          value="₹7,00,000"
          change="+15%"
          color="blue"
          icon={WalletCards}
          period="vs last Year"
          iconColor="white"
          textColor="green"
        />
        <SummaryCard
          title="Total Revenue"
          value="₹7,00,000"
          change="+15%"
          color="blue"
          icon={WalletCards}
          period="vs last Year"
          iconColor="white"
          textColor="green"
        />
      </div>
      <table className="w-full min-w-[900px] text-sm text-left">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Listing</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-center gap-2">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-8 h-8 rounded-full"
                />
                {member.name}
              </td>
              <td className="p-3">{member.role}</td>
              <td
                className={`p-3 font-medium ${getStatusColor(member.status)}`}
              >
                {member.status}
              </td>
              <td className="p-3">{member.email}</td>
              <td className="p-3">{member.phone}</td>
              <td className="p-3">{member.listings}</td>
              <td className="p-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gray-500 cursor-pointer" />
                <Mail className="w-4 h-4 text-gray-500 cursor-pointer" />
                <MoreVertical className="w-4 h-4 text-gray-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamMembersTab;
