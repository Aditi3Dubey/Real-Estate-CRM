// pages/Dashboard.jsx
import React from "react";
import StatCard from "../Components/dashboard/StatCard";
import LeadChart from "../Components/dashboard/LeadChart";
import LeadSources from "../Components/dashboard/LeadSources";
import RecentActivity from "../Components/dashboard/RecentActivity";
import RecentProperties from "../Components/dashboard/RecentProperties";
import UpcomingTasks from "../Components/dashboard/UpcomingTasks";
import RecentLeads from "../Components/dashboard/RecentLeads";
import TableFooter from "../Components/TableFooter";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-50 justify-end min-h-screen p-4 sm:p-6 w-full">
      <div className="w-full space-y-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Leads"
            value="1924"
            change="+12.5%"
            color="green"
            icon={ArrowDownRight}
            bgcolor="bg-green-50"
            compare="vs last month"
          />
          <StatCard
            title="Property Visits"
            value="432"
            change="+8.2%"
            icon={ArrowUpRight}
            color="blue"
            bgcolor="bg-green-50"
            compare="vs last month"
          />
          <StatCard
            title="Active Listings"
            value="94"
            change="-3.1%"
            color="purple"
            icon={ArrowDownRight}
            bgcolor="bg-purple-100"
            compare="vs last month"
          />
          <StatCard
            title="Closed Deals"
            value="36"
            change="+18.9%"
            icon={ArrowUpRight}
            color="rose"
            bgcolor="bg-rose-50"
            compare="vs last month"
          />
        </div>

        {/* Charts and Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LeadChart />
          </div>
          <div>
            <LeadSources />
          </div>
        </div>

        {/* Activities, Properties, Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RecentActivity />
          <RecentProperties />
          <UpcomingTasks />
        </div>

        {/* Recent Leads Table */}
        <RecentLeads />
        <TableFooter></TableFooter>
      </div>
    </div>
  );
};

export default Dashboard;
