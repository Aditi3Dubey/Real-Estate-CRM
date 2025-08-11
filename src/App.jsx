// ✅ Final Working App.jsx (no reloads, clean login/logout toggle)
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout Components
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

// Auth Page
import AuthPage from "./Pages/AuthPage";

// App Pages
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
import PropertyDetail from "./Components/properties/PropertyDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On app load, check login state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(stored === "true");
  }, []);

  // Login success callback from AuthPage
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Logout callback to pass to Header
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {/* Show Header only if logged in */}
      {isLoggedIn && <Header onLogout={handleLogout} />}

      <div className="flex flex-col min-h-screen bg-gray-100 overflow-x-hidden select-none">
        {isLoggedIn ? (
          // Protected layout
          <div className="flex flex-1 pt-[64px]">
            <Sidebar />
            <main className="flex-1 w-full p-3 lg:ml-[220px]">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/properties/:id" element={<PropertyDetail />} />
                <Route path="/site-visits" element={<SiteVisits />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/reports" element={<Report />} />
                <Route path="/team" element={<Team />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        ) : (
          // Auth layout (no top margin)
          <main className="flex flex-1">
            <Routes>
              <Route
                path="/auth"
                element={<AuthPage onLogin={handleLoginSuccess} />}
              />
              <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
          </main>
        )}
      </div>
    </Router>
  );
}

export default App;
