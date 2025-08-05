import { Printer, Mail, Download } from "lucide-react";
import ChartSection from "../ChartSection";
import RecentReports from "./RecentReports";
import ScheduledReports from "./ScheduledReports";
 
const scheduledReports = [
  {
    name: "Q1 20245 financial performance",
    frequency: "Monthly",
    nextRun: "Jun 28, 2025",
    recipients: "5 Recipients",
    status: "Active",
  },
  {
    name: "Q1 20245 financial performance",
    frequency: "Weekly",
    nextRun: "Jun 15, 2025",
    recipients: "6 Recipients",
    status: "Active",
  },
  {
    name: "Q1 20245 financial performance",
    frequency: "Monthly",
    nextRun: "Jun 10, 2025",
    recipients: "10 Recipients",
    status: "Active",
  },
];
 
const recentReports = [
  {
    id: "TRX-01",
    name: "Q1 20245 financial performance",
    type: "Financial",
    date: "Jun 28, 2025",
    size: "3.2 MB",
  },
  {
    id: "TRX-02",
    name: "Q1 20245 financial performance",
    type: "Financial",
    date: "Jun 15, 2025",
    size: "3.2 MB",
  },
  {
    id: "TRX-03",
    name: "Q1 20245 financial performance",
    type: "Financial",
    date: "Jun 10, 2025",
    size: "3.2 MB",
  },
];
 
export default function MarketingTab() {
  return (
    <div className="p-4 sm:p-6 lg:p-6 space-y-2">
      <ChartSection />
      <RecentReports reports={recentReports} />
      <ScheduledReports reports={scheduledReports} />
      </div>
  )}
    