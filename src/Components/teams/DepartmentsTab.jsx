import React from "react";
import { MoreVertical } from "lucide-react";

const departments = [
  {
    name: "Residential Sales",
    lead: "Emily Rodriquez",
    members: 5,
    listings: 24,
  },
  {
    name: "Commercial Properties",
    lead: "Emily Rodriquez",
    members: 5,
    listings: 24,
  },
  {
    name: "Administration",
    lead: "Jennie",
    members: 5,
    listings: null,
  },
  {
    name: "Marketing",
    lead: "Mike",
    members: 2,
    listings: null,
  },
];

const Departments = () => {
  return (
    <div className="font-semibold">
      <h1 className="mb-4">Team Management</h1>

      {/* Grid of Departments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <h3 className="text-base font-semibold text-black">
                {dept.name}
              </h3>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>

            {/* Info Row */}
            <div className="mt-4 flex items-center text-sm text-gray-600 divide-x divide-gray-200">
              <div className="px-3 first:pl-0">
                <p className="text-xs">Team Lead</p>
                <p className="font-medium text-gray-800">{dept.lead}</p>
              </div>
              <div className="px-3">
                <p className="text-xs">Team Members</p>
                <p className="font-medium text-gray-800">{dept.members}</p>
              </div>
              {dept.listings !== null && (
                <div className="px-3">
                  <p className="text-xs">Active Listings</p>
                  <p className="font-medium text-gray-800">{dept.listings}</p>
                </div>
              )}
            </div>

            {/* Button */}
            <button className="mt-8 text-sm border px-4 py-2 rounded hover:bg-gray-100 transition flex items-center gap-2 w-fit">
              View Team <span className="text-lg leading-none">&rarr;</span>
            </button>
          </div>
        ))}
      </div>

      {/* Department Hierarchy */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Department Hierarchy</h2>

        <div className="flex flex-col items-center justify-center bg-[#fff7f5] p-4 rounded-xl">
          {/* Executive Team Box */}
          <div className="border-2 border-[#fe5d2c] text-[#fe5d2c] px-6 py-2 rounded-md font-semibold bg-white shadow-md z-10">
            Executive Team
          </div>

          {/* Vertical Line */}
          <div className="w-0.5 h-12 bg-[#F4DBD5]"></div>

          {/* Horizontal + Vertical Lines and Boxes */}
          <div className="relative w-full max-w-5xl px-2 sm:px-6">
            {/* Horizontal Line */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-[#F4DBD5]"></div>

            {/* Vertical lines only under Box 1 & 4 */}
            <div className="absolute top-0 h-12 w-0.5 bg-[#F4DBD5] left-[12.5%]"></div>
            <div className="absolute top-0 h-12 w-0.5 bg-[#F4DBD5] right-[12.5%]"></div>

            {/* Boxes */}
            <div className="flex flex-col sm:flex-row justify-between pt-12 gap-4 text-sm text-center">
              <div
                className="bg-white rounded-md shadow-md px-4 py-3 font-medium w-full sm:w-[22%] mx-auto"
                style={{ border: "0.91px solid #FFB59A" }}
              >
                Residential Sales
              </div>
              <div
                className="bg-white rounded-md shadow-md px-4 py-3 font-medium w-full sm:w-[22%] mx-auto"
                style={{ border: "0.91px solid #FFB59A" }}
              >
                Commercial Properties
              </div>
              <div
                className="bg-white rounded-md shadow-md px-4 py-3 font-medium w-full sm:w-[22%] mx-auto"
                style={{ border: "0.91px solid #FFB59A" }}
              >
                Administration
              </div>
              <div
                className="bg-white rounded-md shadow-md px-4 py-3 font-medium w-full sm:w-[22%] mx-auto"
                style={{ border: "0.91px solid #FFB59A" }}
              >
                Marketing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
