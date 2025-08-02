import React, { useState } from "react";
import {
  ArrowLeft,
  ClipboardList,
  Clock4,
  TriangleAlert,
  CircleCheck,
  MapPin,
  Bed,
  Bath,
  MoveRight,
  ChevronDown,
  House,
  Tag,
  Key,
  TrendingUp,
  Ruler,
  Car,
  CarFront,
  CarFrontIcon,
} from "lucide-react";
import StatCard from "../Components/Dashboard/StatCard";
import SearchBar from "../Components/Searchbar";

const propertyData = [
  {
    id: 1,
    title: "Modern Apartment In Downtown",
    price: 50000,
    address: "123 main St, New York, NY 10001",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    status: "For Sale",
    tag: "Featured",
    beds: 2,
    baths: 2,
    area: 1200,
    garages: 2,
  },
  {
    id: 2,
    title: "Luxury Condo in Midtown",
    price: 75000,
    address: "456 Elm St, New York, NY 10002",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    status: "For Sale",
    tag: "Featured",
    beds: 3,
    baths: 2,
    area: 1500,
    garages: 1,
  },
  {
    id: 3,
    title: "Cozy Villa by the Hills",
    price: 60000,
    address: "789 Hilltop Rd, Denver, CO 80014",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    status: "For Sale",
    tag: "Featured",
    beds: 2,
    baths: 1,
    area: 1000,
    garages: 1,
  },
  {
    id: 4,
    title: "Urban Apartment",
    price: 68000,
    address: "321 Central Ave, Los Angeles, CA 90001",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    status: "For Sale",
    tag: "Featured",
    beds: 3,
    baths: 2,
    area: 1300,
    garages: 2,
  },
  {
    id: 5,
    title: "Urban Apartment",
    price: 68000,
    address: "321 Central Ave, Los Angeles, CA 90001",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    status: "For Sale",
    tag: "Featured",
    beds: 3,
    baths: 2,
    area: 1300,
    garages: 2,
  },
];

const PropertyCard = ({ data, viewMode }) => {
  const {
    title,
    price,
    address,
    image,
    status,
    tag,
    beds,
    baths,
    area,
    garages,
  } = data;

  return (
    <div
      className={`bg-white rounded-xl shadow p-2 w-full h-full ${
        viewMode === "list" ? "flex gap-4" : ""
      }`}
    >
      <div className={`${viewMode === "list" ? "w-1/3" : "relative"}`}>
        <img
          src={image}
          alt={title}
          className={`rounded-xl w-full ${
            viewMode === "list"
              ? "h-full max-h-40 object-cover"
              : "h-44 object-cover"
          }`}
        />
        {viewMode === "grid" && (
          <>
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded">
              {status}
            </span>
            <span className="absolute top-2 right-2 bg-yellow-100 text-gray-800 text-xs px-2 py-0.5 rounded">
              {tag}
            </span>
          </>
        )}
      </div>

      <div
        className={`p-3 flex flex-col justify-between ${
          viewMode === "list" ? "w-2/3" : "h-[160px]"
        }`}
      >
        <div>
          <h3 className="text-base font-semibold mb-1">{title}</h3>
          <p className="text-lg font-bold mb-1">₹{price.toLocaleString()}/-</p>
          <div className="text-sm text-gray-500 flex items-start gap-1 mb-2">
            <MapPin size={14} className="mt-0.5" />
            <span className="line-clamp-2 leading-snug">{address}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center text-xs text-gray-600 gap-x-4">
          <span className="flex items-center gap-1">
            <Bed size={14} />
            {beds}
          </span>
          <span className="flex items-center gap-1">
            <Bath size={14} />
            {baths}
          </span>
          <span className="flex items-center gap-1">
            <Ruler size={14} />
            {area} ft²
          </span>
          <span className="flex items-center gap-1">
            <CarFrontIcon size={14} />
            {garages}
          </span>
        </div>
      </div>
    </div>
  );
};

const Properties = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="p-4 max-w-screen bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
          <h1 className="text-xl font-semibold">Properties</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto items-center">
          <SearchBar searchPlaceholder="Search Visits..." />

          {/* Grid/List Buttons (No space between) */}
          <div className="flex border border-gray-300 rounded-md overflow-hidden text-sm bg-white text-gray-700 w-full sm:w-auto">
            {["Grid", "List"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode.toLowerCase())}
                className={`flex-1 px-4 py-2 transition-colors ${
                  viewMode === mode.toLowerCase()
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Filter Dropdown */}
          <div className="relative text-sm text-gray-700 w-full sm:w-auto">
            <select className="block w-full min-w-[180px] px-4 py-3 pr-10 border border-gray-300 rounded-md bg-white appearance-none">
              <option value="">Filter by Data Range</option>
              <option value="0-50">0 - 50</option>
              <option value="51-100">51 - 100</option>
              <option value="101-200">101 - 200</option>
              <option value="201+">201+</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

          {/* Add Task Button */}
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full sm:w-auto"
            onClick={() => setShowAddModal(true)}
          >
            Add Properties
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Properties"
          icon={House}
          value="1924"
          change="+12.5%"
          color="green"
          bgcolor="bg-green-50"
          compare="from last week"
        />
        <StatCard
          title="For Sale"
          value="432"
          icon={Tag}
          change="+8.2%"
          color="blue"
          bgcolor="bg-green-50"
          compare="from last week"
        />
        <StatCard
          title="For Rent"
          value="94"
          change="-3.1%"
          icon={Key}
          color="purple"
          bgcolor="bg-purple-100"
          compare="from last month"
        />
        <StatCard
          title="Conversion Rate"
          value="36"
          icon={TrendingUp}
          change="+18.9%"
          color="rose"
          bgcolor="bg-rose-50"
          compare="from last week"
        />
      </div>

      {/* Property Cards Grid/List */}
      <div
        className={`${
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            : "flex flex-col gap-4"
        }`}
      >
        {propertyData.map((item) => (
          <PropertyCard key={item.id} data={item} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
