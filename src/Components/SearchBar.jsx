import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({
  searchPlaceholder = "Search...",
  width = "w-full sm:w-auto", // default is flexible
}) {
  return (
    <div className={`flex relative ${width}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      <input
        type="text"
        placeholder={searchPlaceholder}
        className="pl-9 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );
}
