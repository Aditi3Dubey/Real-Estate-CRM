import React from "react";
import logo from "../assets/logo.png";
import { BellIcon, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 text-black bg-white shadow-md fixed top-0 left-0 w-full z-50 h-[64px]">
      <img
        className="h-10 sm:h-12 object-contain"
        src={logo}
        alt="Logo"
      />
      <div className="flex items-center space-x-2">
        <div className="bg-red-600 rounded-full w-2 h-2 absolute top-6 right-[8rem]"></div>
        <BellIcon className="w-5 h-5 text-black" />
        <h1 className="text-sm sm:text-base font-semibold whitespace-nowrap">
          John Doe
        </h1>
        <ChevronDown className="w-4 h-4 text-black" />
      </div>
    </header>
  );
}
