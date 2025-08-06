import React from "react";
import SummaryCard from "../SummaryCard";
import { File, Clock, AlertCircle } from "lucide-react";
import TableFooter from "../TableFooter";
import SearchBar from "../SearchBar";

const transactions = [
  {
    id: "TRX–01",
    date: "Jun 28, 2025",
    client: "Autumn Phillips",
    property: "123 Main St",
    type: "Commission",
    amount: 20000,
    status: "Completed",
  },
  {
    id: "TRX–02",
    date: "Jun 15, 2025",
    client: "Daniel Hamilton",
    property: "123 Main St",
    type: "Listing Free",
    amount: 20000,
    status: "Completed",
  },
  {
    id: "TRX–03",
    date: "Jun 10, 2025",
    client: "Kimberly Mastrangelo",
    property: "123 Main St",
    type: "Commission",
    amount: 20000,
    status: "Pending",
  },
  {
    id: "TRX–04",
    date: "Jun 10, 2025",
    client: "Jerry Helfer",
    property: "123 Main St",
    type: "Commission",
    amount: 20000,
    status: "Completed",
  },
  {
    id: "TRX–05",
    date: "Jul 8, 2025",
    client: "James Hall",
    property: "123 Main St",
    type: "Commission",
    amount: 20000,
    status: "Completed",
  },
  {
    id: "TRX–06",
    date: "Jul 8, 2025",
    client: "Bradley Lawlor",
    property: "123 Main St",
    type: "Commission",
    amount: 20000,
    status: "Completed",
  },
  {
    id: "TRX–07",
    date: "Jul 8, 2025",
    client: "Alex Buckmaster",
    property: "123 Main St",
    type: "Commission",
    amount: 20000,
    status: "Completed",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Failed":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const TransactionsTab = () => {
  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto bg-gray-50 min-h-screen">
      {/* Top Bar */}
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* SearchBar - takes full width or max space on larger screens */}
        <div className="flex-1 min-w-[200px]">
          <SearchBar searchPlaceholder="Search Transactions" />
        </div>

        {/* Right-side filters - stack on small, row on md+ */}
        <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
          <select className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white w-full sm:w-auto">
            <option>Filter by Date Range</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white w-full sm:w-auto">
            <option>Amount</option>
            <option>50,000</option>
            <option>20,000</option>
            <option>30,000</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible mb-6">
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Total Transaction"
            value="₹50,000"
            icon={File}
            color="blue"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Pending"
            value="₹20,000"
            icon={Clock}
            color="blue"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Failed"
            value="₹1,000"
            icon={AlertCircle}
            color="purple"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-md shadow-sm border">
        <table className="min-w-[900px] w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3 font-medium">Transaction ID</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Property</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">{txn.id}</td>
                <td className="px-4 py-3">{txn.date}</td>
                <td className="px-4 py-3">{txn.client}</td>
                <td className="px-4 py-3">{txn.property}</td>
                <td className="px-4 py-3">{txn.type}</td>
                <td className="px-4 py-3 font-medium">
                  ₹{txn.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-md font-semibold ${getStatusStyle(
                      txn.status
                    )}`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-xl text-gray-400">⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <TableFooter />
      </div>
    </div>
  );
};

export default TransactionsTab;
