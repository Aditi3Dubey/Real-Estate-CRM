import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarDays,
  ClipboardList,
  BarChart2,
  CreditCard,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
  { name: "Leads", path: "/leads", icon: <Users size={20} /> },
  { name: "Properties", path: "/properties", icon: <Building2 size={20} /> },
  { name: "Site Visits", path: "/site-visits", icon: <CalendarDays size={20} /> },
  { name: "Tasks", path: "/tasks", icon: <ClipboardList size={20} /> },
  { name: "Analytics", path: "/analytics", icon: <BarChart2 size={20} /> },
  { name: "Payments", path: "/payments", icon: <CreditCard size={20} /> },
  { name: "Reports", path: "/reports", icon: <FileText size={20} /> },
  { name: "Team", path: "/team", icon: <Users size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-[72px] left-4 z-50 bg-white p-2 rounded-md shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] w-[220px]
          bg-white border-r z-40 flex flex-col justify-start
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
          overflow-y-auto overflow-x-hidden
        `}
      >
        <nav className="flex-1 px-2 pt-4 space-y-2 md:space-y-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-full font-medium transition-all duration-200
                  ${isActive ? "bg-orange-500 text-white" : "bg-white text-black hover:bg-gray-100"}
                `}
              >
                {item.icon}
                <span className="text-sm sm:text-base">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
