// pages/Dashboard.jsx
import React from "react";
import { TrendingDown,TrendingUp } from "lucide-react";
import SummaryCard from "../Components/SummaryCard";
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
        {/* SummaryCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard title="Total Leads" value="1924"  icon={TrendingUp} iconColor="green" change="12.5%" period="vs last month" color="blue" textColor="green"/>
          <SummaryCard title="Property Visits" value="432" icon={TrendingUp} iconColor="green"  change="8.2%" period="vs last month" color="blue" textColor="green"/>
          <SummaryCard title="Active Listings" value="94" icon={TrendingDown} iconColor="red" change="3.1%" period="vs last month" color="purple" textColor="red"/>
          <SummaryCard title="Closed Deals" value="36" icon={TrendingUp} iconColor="green" change="18.9%" period="vs last month" color="pink" textColor="green"/>
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
