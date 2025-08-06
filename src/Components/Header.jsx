import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { BellIcon, ChevronDown, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate(); // To programmatically navigate on logout
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track if the dropdown is visible
  const dropdownRef = useRef(null); // For detecting clicks outside dropdown
  const [userName, setUserName] = useState("User"); // Default name to show

  // On component mount, retrieve user name from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) {
      setUserName(storedUser.name); // Set username if available
    }
  }, []);

  // Handle clicks outside of dropdown to auto-close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false); // Close dropdown if click is outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login flag
    localStorage.removeItem("user"); // Clear stored user data
    navigate("/auth"); // Redirect to login/register page
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 text-black bg-white shadow-md fixed top-0 left-0 w-full z-50 h-[64px]">
      {/* App Logo */}
      <img className="h-10 sm:h-12 object-contain" src={logo} alt="Logo" />

      {/* User Info and Dropdown */}
      <div className="relative" ref={dropdownRef}>
        {/* Top bar with bell, username, dropdown arrow */}
        <div className="flex items-center space-x-2 cursor-pointer">
          {/* Notification dot */}
          <div className="bg-red-600 rounded-full w-2 h-2 absolute top-1 left-4"></div>
          <BellIcon className="w-5 h-5 text-black" />

          {/* Username */}
          <h1 className="text-sm sm:text-base font-semibold whitespace-nowrap">
            {userName}
          </h1>
          {/* Chevron icon */}
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
          >
            <ChevronDown className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* Dropdown panel */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 border">
            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
