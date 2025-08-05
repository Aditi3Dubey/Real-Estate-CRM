import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

// Pages
import Dashboard from "./Pages/Dashboard";
import Leads from "./Pages/Leads";
import Properties from "./Pages/Properties";
import SiteVisits from "./Pages/SiteVisits";
import Tasks from "./Pages/Tasks";
import Analytics from "./Pages/Analytics";
import Payment from "./Pages/Payment";
import Report from "./Pages/Report";
import Team from "./Pages/Team";
import Settings from "./Pages/Setting";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 overflow-x-hidden select-none">
        <Header />
        <div className="flex flex-1 pt-[64px]"> {/* padding-top for fixed header */}
          <Sidebar />
          <main className="flex-1 w-full p-4 lg:ml-[220px]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/site-visits" element={<SiteVisits />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/payments" element={<Payment/>} />
              <Route path="/reports" element={<Report />} />
              <Route path="/team" element={<Team />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
