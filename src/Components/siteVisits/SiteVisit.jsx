import { ArrowLeft, Plus } from "lucide-react";
import React, { useState } from "react";
import SearchBar from "../SearchBar";
import Button from "../Button";
import SummaryCard from "../SummaryCard";
import SegmentedTabs from "../SegmentedTabs";
import TableFooter from "../TableFooter";

const allAppointments = []; // Fill this with objects later

export default function SiteVisits() {
  const [range, setRange] = useState("upcoming");
  const [data, setData] = useState(allAppointments);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const paginatedData = data.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
          <h1 className="text-xl font-semibold">Site Visits</h1>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full md:w-auto">
          <SearchBar searchPlaceholder="Search Visit" />
          <SegmentedTabs
            options={[
              { label: "Upcoming", value: "upcoming" },
              { label: "Past", value: "past" },
              { label: "All", value: "all" },
            ]}
            active={range}
            onChange={setRange}
          />
          <Button label="Schedule Visit" to="/site-visits/new" icon={Plus} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible mb-6">
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Total Visits"
            value="154"
            change="+12.5%"
            color="green"
            textColor="green"
            period="from last month"
            iconColor="green"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Scheduled"
            value="94"
            change="+15.3%"
            color="blue"
            textColor="green"
            iconColor="green"
            period="from last month"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Confirmed"
            value="24.7%"
            change="-2.1%"
            color="purple"
            textColor="red"
            period="from last month"
            iconColor="red"
          />
        </div>
        <div className="min-w-[250px] sm:min-w-0">
          <SummaryCard
            title="Cancelled"
            value="32"
            change="+8.2%"
            color="pink"
            textColor="green"
            iconColor="green"
            period="from last month"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm text-left">
          <thead className="text-gray-700 border-b">
            <tr className="whitespace-nowrap">
              <th className="py-3 px-4">Client</th>
              <th className="py-3 px-4">Property</th>
              <th className="py-3 px-4">Date & Time</th>
              <th className="py-3 px-4">Agent</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-10">
                  No Results
                </td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{item.client}</td>
                  <td className="py-3 px-4">{item.property}</td>
                  <td className="py-3 px-4">{item.datetime}</td>
                  <td className="py-3 px-4">{item.agent}</td>
                  <td className="py-3 px-4">{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div className="mt-6">
        <TableFooter
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / resultsPerPage)}
        />
      </div>
    </div>
  );
}
