// App.jsx
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import AuthPage from "./Pages/AuthPage";
import ProtectedRoute from "./utils/ProtectedRoute";

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
import PropertyDetail from "./Components/properties/PropertyDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(stored === "true");
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // This will trigger re-render to show Sidebar/Header
  };

  return (
    <Router>
      {isLoggedIn && <Header />}
      <div className="flex flex-col min-h-screen bg-gray-100 overflow-x-hidden">
        <div className="flex flex-1 pt-[64px]">
          {isLoggedIn && <Sidebar />}
          <main
            className={`flex-1 w-full p-4 ${isLoggedIn ? "lg:ml-[220px]" : ""}`}
          >
            <Routes>
              <Route
                path="/auth"
                element={<AuthPage onLogin={handleLoginSuccess} />}
              />

              {isLoggedIn ? (
                <>
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
                </>
              ) : (
                <Route path="*" element={<Navigate to="/auth" />} />
              )}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
