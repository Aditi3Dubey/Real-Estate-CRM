import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Ruler,
  CarFrontIcon,
  ChevronDown,
  TrendingDown,
  Tag,
  Key,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SearchBar from "../Components/SearchBar";
import SummaryCard from "../Components/SummaryCard";

const propertyData = [
  {
    id: 1,
    title: "Modern Apartment In Downtown",
    price: 50000,
    address: "123 main St, New York, NY 10001",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1560449758-4b2f62b3f7aa",
      "https://images.unsplash.com/photo-1605276374104-de6330128bfc",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600585154205-03b1fa3b69f2",
      "https://images.unsplash.com/photo-1600573472084-c7c3e0f20f41",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600585154340-3c6044ef78d4",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154360-07aa5c1e3dfb",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154205-03b1fa3b69f2",
    ],
    status: "For Sale",
    tag: "Featured",
    beds: 3,
    baths: 2,
    area: 1300,
    garages: 2,
  },
];

const PropertyCard = ({ data, viewMode }) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const {
    title,
    price,
    address,
    images,
    status,
    tag,
    beds,
    baths,
    area,
    garages,
  } = data;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      onClick={() =>
        navigate(`/properties/${data.id}`, {
          state: { property: data },
        })
      }
      className="cursor-pointer bg-white rounded-xl shadow p-2 w-full h-full"
    >
      <div
        className={`rounded-xl p-2 w-full h-full ${
          viewMode === "list" ? "flex gap-4" : ""
        }`}
      >
        <div className={`${viewMode === "list" ? "w-1/3" : "relative"}`}>
          <div className="relative">
            <img
              src={images[currentImage]}
              alt={`${title} ${currentImage + 1}`}
              className={`rounded-xl w-full ${
                viewMode === "list"
                  ? "h-full max-h-40 object-cover"
                  : "h-44 object-cover"
              }`}
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-1 rounded-full"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-1 rounded-full"
                >
                  <ChevronRight size={16} />
                </button>
              </>
            )}
          </div>

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
            <p className="text-lg font-bold mb-1">
              ₹{price.toLocaleString()}/-
            </p>
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
    </div>
  );
};

const Properties = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="p-4 max-w-screen bg-gray-50 min-h-screen overflow-x-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
          <h1 className="text-xl font-semibold">Properties</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto items-center">
          <SearchBar searchPlaceholder="Search Visits..." />

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

          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full sm:w-auto"
            onClick={() => setShowAddModal(true)}
          >
            Add Properties
          </button>
        </div>
      </div>

      {/* SummaryCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Properties"
          value="86"
          icon={TrendingUp}
          iconColor="green"
          change="+5.3%"
          period="from last month"
          color="blue"
          textColor="green"
        />
        <SummaryCard
          title="For Sale"
          value="54"
          icon={TrendingUp}
          iconColor="green"
          change="+7.8%"
          period="from last month"
          color="blue"
          textColor="green"
        />
        <SummaryCard
          title="For Rent"
          value="32"
          icon={TrendingDown}
          iconColor="red"
          change="-2.4%"
          period="from last month"
          color="purple"
          textColor="red"
        />
        <SummaryCard
          title="Conventional Rate"
          value="-8.1%"
          icon={TrendingUp}
          iconColor="green"
          change="18.9%"
          period="from last month"
          color="pink"
          textColor="green"
        />
      </div>

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
