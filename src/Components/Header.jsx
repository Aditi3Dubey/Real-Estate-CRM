// Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { BellIcon, ChevronDown, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ onLogout }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) setUserName(storedUser.name);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    if (onLogout) onLogout();
    navigate("/auth");
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 text-black bg-white shadow-md fixed top-0 left-0 w-full z-50 h-[64px]">
      <img className="h-10 sm:h-12 object-contain" src={logo} alt="Logo" />

      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-red-600 rounded-full w-2 h-2 absolute top-1 left-4"></div>
          <BellIcon className="w-5 h-5 text-black" />
          <h1 className="text-sm sm:text-base font-semibold whitespace-nowrap">
            {userName}
          </h1>
          <div onClick={() => setDropdownOpen(!dropdownOpen)}>
            <ChevronDown className="w-4 h-4 text-black" />
          </div>
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 border">
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
};

export default Header;
