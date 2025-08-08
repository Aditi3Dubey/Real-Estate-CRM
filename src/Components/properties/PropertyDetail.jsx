import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  IndianRupee,
  Ruler,
  LayoutPanelTop,
  Eye,
  Home,
  Layers,
  ShieldCheck,
  PawPrint,
  Wifi,
  AirVent,
  Droplets,
  Camera,
  Bath,
  CarFront,
  BarChart3,
  MoveRight,
  Building2,
  Sun,
  Building2Icon,
  Snowflake,
  ChevronLeft,
  ChevronRight,
  Hotel,
  ShieldCheckIcon,
  ShieldCloseIcon,
} from "lucide-react";

const PropertyDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data = state?.property;

  data.floorPlans = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbTGWnADS-iYHrvrCjM5BmmJ4RIDr_mx0Xg&s",
      name: "3 BHK Type A",
      area: "1450 sq.ft.",
      price: "1.35 Cr",
      emi: "₹2.91 L",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbTGWnADS-iYHrvrCjM5BmmJ4RIDr_mx0Xg&s",
      name: "3 BHK Type A",
      area: "1450 sq.ft.",
      price: "1.35 Cr",
      emi: "₹2.91 L",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbTGWnADS-iYHrvrCjM5BmmJ4RIDr_mx0Xg&s",
      name: "3 BHK Type A",
      area: "1450 sq.ft.",
      price: "1.35 Cr",
      emi: "₹2.91 L",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbTGWnADS-iYHrvrCjM5BmmJ4RIDr_mx0Xg&s",
      name: "3 BHK Type A",
      area: "1450 sq.ft.",
      price: "1.35 Cr",
      emi: "₹2.91 L",
    },
  ];

  if (!data) return <div>No data found.</div>;
  const details = data.details ?? {};

  const [selected, setSelected] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  const options = ["All", "3 BHK", "4 BHK"];

  return (
    <div className="p-4 bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Back Button and Title */}
      <div className="flex items-center gap-2 mb-4">
        <ArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
        <h1 className="text-xl font-semibold">{data.title}</h1>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6 relative">
        <div className="relative w-full lg:w-[calc(100%-200px)]">
          <img
            src={data.images[currentIndex]}
            alt={`Main ${currentIndex}`}
            className="rounded-xl w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover"
          />
          <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 text-xs rounded-full">
            {data.status}
          </div>
          <div className="absolute top-2 right-2 bg-yellow-200 text-black px-3 py-1 text-xs rounded-full">
            {data.tag}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Thumbnails - only on large screens */}
        <div className="hidden lg:flex flex-col gap-4 w-48 h-[400px]">
          {data.images
            .map((img, i) =>
              i !== currentIndex ? (
                <img
                  key={i}
                  src={img}
                  onClick={() => setCurrentIndex(i)}
                  alt={`Thumb ${i}`}
                  className="rounded-xl h-[120px] w-full object-cover cursor-pointer border-2 hover:border-black"
                />
              ) : null
            )
            .filter(Boolean)
            .slice(0, 3)}
        </div>
      </div>

      {/* Overview */}
      <div className="mb-6">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <button className="px-4 py-2 bg-orange-500 text-white rounded mr-52">
            3D Floor Plans
          </button>
        </div>
        <p className="text-xl text-black font-bold mt-4">
          ₹{data.price.toLocaleString()}/-
        </p>
        <div className="border-t border-gray-200 pt-4 flex items-center gap-2 text-black mt-4 text-xl">
          <MapPin size={16} />
          {data.address}
        </div>
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 text-gray-800">
        <DetailCard icon={<Layers />} label="Floors" value={details?.floor} />
        <DetailCard icon={<Bath />} label="Bathrooms" value={data.baths} />
        <DetailCard icon={<Ruler />} label="Area" value={data.area} />
        <DetailCard
          icon={<CarFront />}
          label="Parking Spaces"
          value={details?.parking}
        />
        <DetailCard
          icon={<LayoutPanelTop />}
          label="Configuration"
          value={details?.configuration}
        />
        <DetailCard
          icon={<IndianRupee />}
          label="Price"
          value={`₹${data?.price?.toLocaleString()} ${
            details?.pricePerSqft ? `@ ₹${details.pricePerSqft}/sq.ft.` : ""
          }`}
        />
        <DetailCard icon={<MapPin />} label="Address" value={data.address} />
        <DetailCard
          icon={<BarChart3 />}
          label="Floor Number"
          value={details?.floorNumber}
        />
        <DetailCard
          icon={<MoveRight />}
          label="Facing"
          value={details?.facing}
        />
        <DetailCard
          icon={<Eye />}
          label="Overlooking"
          value={details?.overlooking}
        />
        <DetailCard
          icon={<ShieldCheck />}
          label="Property Age"
          value={details?.age}
        />
        <DetailCard
          icon={<ShieldCloseIcon />}
          label="24/7 Security"
          value={details?.area}
        />
      </div>

      {/* Floor Plans */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 mt-8">
          {data.title} Floor Plans
        </h3>
        <div className="inline-flex mb-4 rounded overflow-hidden border">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`px-4 py-1 transition-colors duration-200 ${
                selected === option
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {Array.isArray(data.floorPlans) && data.floorPlans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.floorPlans.map((plan, i) => (
              <div
                key={i}
                className="border rounded-xl p-3 shadow-sm "
                style={{ backgroundColor: "#FFF7F5" }}
              >
                <img
                  src={plan.image}
                  alt={`Floor Plan ${i}`}
                  className="rounded-md mb-2 h-40 w-full object-cover"
                />
                <p className="font-medium">
                  {plan.name} {plan.area}
                </p>
                <p className="text-sm text-gray-600">(Carpet Area)</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="font-bold">₹{plan.price}</p>
                  <p className="text-xs text-black underline">{plan.emi} EMI</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No floor plans available.</p>
        )}
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">{data.title} Amenities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {[
            { icon: Sun, label: "Swimming Pool", color: "text-blue-500" },
            {
              icon: ShieldCheck,
              label: "24x7 Security",
              color: "text-purple-600",
            },
            { icon: Building2Icon, label: "Elevator", color: "text-amber-600" },
            { icon: PawPrint, label: "Pet Friendly", color: "text-green-600" },
            { icon: Wifi, label: "High-Speed Wi-Fi", color: "text-indigo-600" },
            {
              icon: Building2,
              label: "Spacious Balcony",
              color: "text-yellow-600",
            },
            {
              icon: Snowflake,
              label: "Air Conditioning",
              color: "text-pink-600",
            },
            {
              icon: Droplets,
              label: "24*7 Water Supply",
              color: "text-blue-700",
            },
            { icon: Camera, label: "CCTV", color: "text-blue-800" },
          ].map(({ icon: Icon, label, color }, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 border rounded-xl p-4"
            >
              <Icon className={`w-6 h-6 ${color}`} />
              <p className="text-sm font-medium text-center">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// DetailCard Component
const DetailCard = ({ icon, label, value, isFirst }) => (
  <div className={`flex items-start gap-4 ${!isFirst ? "" : ""}`}>
    <div
      className="p-3 rounded-full"
      style={{
        background: "linear-gradient(180deg, #F7FEFF 0%, #FFECE6 100%)",
      }}
    >
      {icon}
    </div>

    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  </div>
);

export default PropertyDetail;
