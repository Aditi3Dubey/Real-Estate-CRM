// import React from "react";

// const RecentProperties = () => {
//   const properties = [
//     {
//       name: "Luxury Villa",
//       address: "123 Maple Street, Beverly Hills",
//       price: "₹100,000",
//       status: "Active",
//       time: "Listed 2d ago",
//       image:
//         "https://cdn.confident-group.com/wp-content/uploads/2025/01/09175702/villa-cover.jpg",
//     },
//     {
//       name: "Modern Apartment",
//       address: "456 Oak Avenue, Downtown",
//       price: "₹700,000",
//       status: "Pending",
//       time: "Listed 5d ago",
//       image:
//         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1",
//     },
//     {
//       name: "Beach House",
//       address: "789 Ocean Drive, Malibu",
//       price: "₹900,000",
//       status: "Active",
//       time: "Listed 2d ago",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtZeLbKfcotE0WQ8N7y2qluNzWskUdSrccg&s",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-2xl shadow p-4 max-w-2xl mx-auto">
//       <div className="flex justify-between items-center mb-4 gap-24 bg-pink-100 p-2 rounded-md">
//         <h2 className="text-lg font-semibold">Recent Property</h2>
//         <button>View All</button>
//       </div>

//       <ul className="space-y-4">
//         {properties.map((item, idx) => (
//           <li className="flex items-start p-3 bg-gray-100 rounded-lg shadow-sm gap-6">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-14 h-14 rounded object-cover"
//             />

//             <div className="flex justify-between items-start w-full gap-4 flex-wrap sm:flex-nowrap">
//               {/* Left section */}
//               <div className="flex-1 space-y-1">
//                 <div className="text-sm font-medium">{item.name}</div>
//                 <div className="text-xs text-gray-700">{item.address}</div>
//                 <div className="text-sm text-red-600 font-bold">
//                   {item.price}
//                 </div>
//               </div>

//               {/* Right section */}
//               <div className="flex flex-col items-end">
//                 <span
//                   className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${
//                     item.status === "Active"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-yellow-100 text-yellow-800"
//                   }`}
//                 >
//                   {item.status}
//                 </span>
//                 <div className="text-xs text-gray-500 mt-6">{item.time}</div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RecentProperties;
import React from "react";

const RecentProperties = () => {
  const properties = [
    {
      name: "Luxury Villa",
      address: "123 Maple Street, Beverly Hills",
      price: "₹100,000",
      status: "Active",
      time: "Listed 2d ago",
      image:
        "https://cdn.confident-group.com/wp-content/uploads/2025/01/09175702/villa-cover.jpg",
    },
    {
      name: "Modern Apartment",
      address: "456 Oak Avenue, Downtown",
      price: "₹700,000",
      status: "Pending",
      time: "Listed 5d ago",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1",
    },
    {
      name: "Beach House",
      address: "789 Ocean Drive, Malibu",
      price: "₹900,000",
      status: "Active",
      time: "Listed 2d ago",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtZeLbKfcotE0WQ8N7y2qluNzWskUdSrccg&s",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-4 max-w-4xl mx-auto w-full">
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mb-4 gap-4 bg-pink-100 p-2 rounded-md">
        <h2 className="text-lg font-semibold">Recent Property</h2>
        <button className="text-sm">View All</button>
      </div>

      <ul className="space-y-4">
        {properties.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:items-start p-3 bg-gray-100 rounded-lg shadow-sm gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full sm:w-20 h-20 rounded object-cover"
            />

            <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-4">
              {/* Left section */}
              <div className="flex-1 space-y-1">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-gray-700">{item.address}</div>
                <div className="text-sm text-red-600 font-bold">
                  {item.price}
                </div>
              </div>

              {/* Right section */}
              <div className="flex flex-col items-start sm:items-end">
                <span
                  className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.status}
                </span>
                <div className="text-xs text-gray-500 mt-2 sm:mt-6">
                  {item.time}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentProperties;
