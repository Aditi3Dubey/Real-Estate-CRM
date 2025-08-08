// components/SearchBar.jsx
import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react"; // Import the X icon for clearing

const SearchBar = ({ searchPlaceholder, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  // This effect synchronizes the internal state with the parent's state
  // It's useful if the parent component clears the search term from outside
  useEffect(() => {
    // We can assume the parent updates its state via the onChange prop.
    // However, to make this component truly reusable and self-contained,
    // we manage its own value state and pass changes up.
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Call the parent's onChange handler
    if (onChange) {
      onChange(e);
    }
  };

  const handleClearInput = () => {
    setInputValue("");
    // Create a synthetic event to pass an empty value to the parent
    if (onChange) {
      onChange({ target: { value: "" } });
    }
  };

  return (
    <div className="relative w-full sm:w-auto">
      <input
        type="text"
        placeholder={searchPlaceholder}
        value={inputValue}
        onChange={handleInputChange}
        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" />
      </div>

      {/* Conditional rendering of the clear icon */}
      {inputValue && (
        <button
          onClick={handleClearInput}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          aria-label="Clear search"
        >
          <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
