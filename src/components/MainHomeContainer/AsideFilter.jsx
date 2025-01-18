// import React, { useState } from "react";
// import { CiFilter } from "react-icons/ci";
// import { GrPowerReset } from "react-icons/gr";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// const MAX = 200000;
// const MIN = 5000;
// const priceMarks = [
//   { value: MIN, label: "" },
//   { value: MAX, label: "" },
// ];
// const AsideFilter = () => {
//   const [priceRange, setPriceRange] = useState([5000, 200000]);
//   const [activePriceRange, setActivePriceRange] = useState(null);
//   const handlePriceButtonClick = (min, max) => {
//     if (activePriceRange === `${min}-${max}`) {
//       setPriceRange([5000, 200000]); // Reset to default if the same range is clicked again
//       setActivePriceRange(null); // Deactivate the button
//     } else {
//       setPriceRange([min, max]);
//       setActivePriceRange(`${min}-${max}`); // Set the clicked range as active
//     }
//   };
//   return (
//     <div className="p-4 bg-white shadow-lg rounded-lg w-full overflow-y-scroll thin-scrollbar max-h-[85vh]">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="filter">
//           <span className=" font-bold">Filter :</span>
//         </h1>
//         <button className="reset flex">
//           <GrPowerReset />
//           {/* <span className=" text-xs">Reset</span> */}
//         </button>
//       </div>
//       <hr />

//       {/* PG for Section */}
//       <div className="mb-4">
//         <h2 className="text-md font-bold mb-2">PG for</h2>
//         <div className="flex gap-6">
//           <label className="utilslabel ">
//             <input type="radio" name="pg" className="utilCheckBox" />
//             <span className=" md:text-base text-sm">Male</span>
//           </label>

//           <label className="utilslabel">
//             <input type="radio" name="pg" className="utilCheckBox" />
//             <span className=" md:text-base text-sm">Female</span>
//           </label>
//           <label className="utilslabel">
//             <input type="radio" name="pg" className="utilCheckBox" />
//             <span className=" md:text-base text-sm">Anyone</span>
//           </label>
//         </div>
//       </div>
//       <div className="mb-4">
//         <h2 className="text-base font-bold mb-2">Room Type</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <label className="utilslabel gap-1 flex ">
//             <input type="checkbox" name="room_type" className="utilCheckBox" />
//             <span className=" md:text-base text-sm">Single</span>
//           </label>
//           <label className="utilslabel gap-1 flex ">
//             <input type="checkbox" name="room_type" className="utilCheckBox" />
//             <span className=" md:text-base text-sm">Double</span>
//           </label>
//           <label className="utilslabel gap-1 flex ">
//             <input type="checkbox" name="room_type" className="utilCheckBox" />
//             <span className=" md:text-base text-sm">Triple</span>
//           </label>
//           <label className="utilslabel gap-1 flex ">
//             <input type="checkbox" name="room_type" className="utilCheckBox" />
//             <span className=" md:text-base text-sm">Four</span>
//           </label>
//         </div>
//       </div>
//       <div className="mb-4">
//         <Box>
//           <Slider
//             className="w-[92%]"
//             marks={priceMarks}
//             step={100}
//             value={priceRange}
//             valueLabelDisplay="auto"
//             min={MIN}
//             max={MAX}
//             onChange={(_, newValue) => setPriceRange(newValue)}
//             sx={{ color: "#2A2C41" }}
//           />
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <p className="md:text-para text-[12px]">
//               {priceRange[0].toLocaleString("en-IN", {
//                 style: "currency",
//                 currency: "INR",
//                 minimumFractionDigits: 0,
//                 maximumFractionDigits: 0,
//               })}{" "}
//               -{" "}
//               {priceRange[1].toLocaleString("en-IN", {
//                 style: "currency",
//                 currency: "INR",
//                 minimumFractionDigits: 0,
//                 maximumFractionDigits: 0,
//               })}{" "}
//               Prices
//             </p>
//           </Box>
//         </Box>
//         <div className="md:text-para text-sm font-light">
//           <div className="flex gap-3 my-3">
//             <button
//               className={`px-2 py-2 w-1/2 border ${
//                 activePriceRange === "5000-30000"
//                   ? "border-blue-500"
//                   : "border-slate-300"
//               } hover:border-slate-500 text-gray-600 rounded-full`}
//               onClick={() => handlePriceButtonClick(5000, 30000)}
//             >
//               ₹5,000 - ₹30,000
//             </button>
//             <button
//               className={`px-2 py-2 w-1/2 border ${
//                 activePriceRange === "30000-50000"
//                   ? "border-blue-500"
//                   : "border-slate-300"
//               } hover:border-slate-500 text-gray-600 rounded-full`}
//               onClick={() => handlePriceButtonClick(30000, 50000)}
//             >
//               ₹30,000 - ₹50,000
//             </button>
//           </div>
//           <div className="flex gap-3">
//             <button
//               className={`px-2 py-2 w-1/2 border ${
//                 activePriceRange === "20000-120000"
//                   ? "border-blue-500"
//                   : "border-slate-300"
//               } hover:border-slate-500 text-gray-600 rounded-full`}
//               onClick={() => handlePriceButtonClick(20000, 120000)}
//             >
//               ₹50,000 - ₹1.2L
//             </button>
//             <button
//               className={`px-2 py-2 w-1/2 border ${
//                 activePriceRange === "120000-200000"
//                   ? "border-blue-500"
//                   : "border-slate-300"
//               } hover:border-slate-500 text-gray-600 rounded-full`}
//               onClick={() => handlePriceButtonClick(120000, MAX)}
//             >
//               ₹1.2L & above
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Preferred For Section */}
//       <div className="mb-4">
//         <h2 className="text-base  font-bold mb-2">Preferred For</h2>
//         <div className="flex gap-4">
//           <label className="flex items-center gap-1 cursor-pointer">
//             <input
//               type="checkbox"
//               name="preferred_for"
//               className="utilCheckBox"
//             />
//             <span className=" md:text-base text-sm">Students</span>
//           </label>
//           <label className="flex items-center gap-1 cursor-pointer">
//             <input
//               type="checkbox"
//               name="preferred_for"
//               className="utilCheckBox"
//             />
//             <span className=" md:text-base text-sm">Professionals</span>
//           </label>
//         </div>
//       </div>

//       {/* Food Included Section */}
//       <div className="mb-4">
//         <h2 className=" text-base  font-bold mb-2">Food Included</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <label className="flex items-center gap-1 cursor-pointer">
//             <input
//               type="checkbox"
//               name="food_included"
//               className="utilCheckBox"
//             />
//             <span className=" md:text-base text-sm">Breakfast</span>
//           </label>
//           <label className="flex items-center gap-1 cursor-pointer">
//             <input
//               type="checkbox"
//               name="food_included"
//               className="utilCheckBox"
//             />
//             <span className=" md:text-base text-sm">Lunch</span>
//           </label>
//           <label className="flex items-center gap-1 cursor-pointer">
//             <input
//               type="checkbox"
//               name="food_included"
//               className="utilCheckBox"
//             />
//             <span className=" md:text-base text-sm">Dinner</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AsideFilter;

import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const MAX = 200000;
const MIN = 5000;
const priceMarks = [
  { value: MIN, label: "" },
  { value: MAX, label: "" },
];

const AsideFilter = () => {
  const [priceRange, setPriceRange] = useState([5000, 200000]);
  const [activePriceRange, setActivePriceRange] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePriceButtonClick = (min, max) => {
    if (activePriceRange === `${min}-${max}`) {
      setPriceRange([5000, 200000]); // Reset to default if the same range is clicked again
      setActivePriceRange(null); // Deactivate the button
    } else {
      setPriceRange([min, max]);
      setActivePriceRange(`${min}-${max}`); // Set the clicked range as active
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Filter Button for Mobile */}
      <div className="  absolute sm:hidden md:hidden lg:hidden ">
        <button
          onClick={toggleModal}
          className="filter-button  flex items-center p-2 bg-blue-500 text-white rounded-md"
        >
          <CiFilter className="mr-2" /> Filter
        </button>
      </div>

      {/* Filter Modal for Mobile */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h1 className="filter">
                <span className="font-bold">Filter :</span>
              </h1>
              <div>
                {/* Close Modal Button */}
                <button
                  onClick={toggleModal}
                  className="w-max right-0    bg-red-500 text-white py-2 rounded-md mt-4"
                >
                  <GrPowerReset />
                </button>
                <button className="reset flex" onClick={toggleModal}>
                  <GrPowerReset />
                </button>
              </div>
            </div>
            <hr />
            {/* PG for Section */}
            <div className="mb-4">
              <h2 className="text-md font-bold mb-2">PG for</h2>
              <div className="flex gap-6">
                <label className="utilslabel">
                  <input type="radio" name="pg" className="utilCheckBox" />
                  <span className="md:text-base text-sm">Male</span>
                </label>
                <label className="utilslabel">
                  <input type="radio" name="pg" className="utilCheckBox" />
                  <span className="md:text-base text-sm">Female</span>
                </label>
                <label className="utilslabel">
                  <input type="radio" name="pg" className="utilCheckBox" />
                  <span className="md:text-base text-sm">Anyone</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-base font-bold mb-2">Room Type</h2>
              <div className="grid grid-cols-2 gap-4">
                <label className="utilslabel gap-1 flex">
                  <input
                    type="checkbox"
                    name="room_type"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Single</span>
                </label>
                <label className="utilslabel gap-1 flex">
                  <input
                    type="checkbox"
                    name="room_type"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Double</span>
                </label>
                <label className="utilslabel gap-1 flex">
                  <input
                    type="checkbox"
                    name="room_type"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Triple</span>
                </label>
                <label className="utilslabel gap-1 flex">
                  <input
                    type="checkbox"
                    name="room_type"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Four</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <Box>
                <Slider
                  className="w-[92%]"
                  marks={priceMarks}
                  step={100}
                  value={priceRange}
                  valueLabelDisplay="auto"
                  min={MIN}
                  max={MAX}
                  onChange={(_, newValue) => setPriceRange(newValue)}
                  sx={{ color: "#2A2C41" }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <p className="md:text-para text-[12px]">
                    {priceRange[0].toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}{" "}
                    -{" "}
                    {priceRange[1].toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}{" "}
                    Prices
                  </p>
                </Box>
              </Box>
              <div className="md:text-para text-sm font-light">
                <div className="flex gap-3 my-3">
                  <button
                    className={`px-2 py-2 w-1/2 border ${
                      activePriceRange === "5000-30000"
                        ? "border-blue-500"
                        : "border-slate-300"
                    } hover:border-slate-500 text-gray-600 rounded-full`}
                    onClick={() => handlePriceButtonClick(5000, 30000)}
                  >
                    ₹5,000 - ₹30,000
                  </button>
                  <button
                    className={`px-2 py-2 w-1/2 border ${
                      activePriceRange === "30000-50000"
                        ? "border-blue-500"
                        : "border-slate-300"
                    } hover:border-slate-500 text-gray-600 rounded-full`}
                    onClick={() => handlePriceButtonClick(30000, 50000)}
                  >
                    ₹30,000 - ₹50,000
                  </button>
                </div>
                <div className="flex gap-3">
                  <button
                    className={`px-2 py-2 w-1/2 border ${
                      activePriceRange === "20000-120000"
                        ? "border-blue-500"
                        : "border-slate-300"
                    } hover:border-slate-500 text-gray-600 rounded-full`}
                    onClick={() => handlePriceButtonClick(20000, 120000)}
                  >
                    ₹50,000 - ₹1.2L
                  </button>
                  <button
                    className={`px-2 py-2 w-1/2 border ${
                      activePriceRange === "120000-200000"
                        ? "border-blue-500"
                        : "border-slate-300"
                    } hover:border-slate-500 text-gray-600 rounded-full`}
                    onClick={() => handlePriceButtonClick(120000, MAX)}
                  >
                    ₹1.2L & above
                  </button>
                </div>
              </div>
            </div>

            {/* Preferred For Section */}
            <div className="mb-4">
              <h2 className="text-base font-bold mb-2">Preferred For</h2>
              <div className="flex gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    name="preferred_for"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Students</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    name="preferred_for"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Professionals</span>
                </label>
              </div>
            </div>

            {/* Food Included Section */}
            <div className="mb-4">
              <h2 className="text-base font-bold mb-2">Food Included</h2>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    name="food_included"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Breakfast</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    name="food_included"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Lunch</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    name="food_included"
                    className="utilCheckBox"
                  />
                  <span className="md:text-base text-sm">Dinner</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop and Larger Devices */}
      <div className="hidden md:block p-4 bg-white shadow-lg rounded-lg w-full overflow-y-scroll thin-scrollbar max-h-[85vh]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="filter">
            <span className="font-bold">Filter :</span>
          </h1>
          <button className="reset flex">
            <GrPowerReset />
          </button>
        </div>
        <hr />
        {/* PG for Section */}
        <div className="mb-4">
          <h2 className="text-md font-bold mb-2">PG for</h2>
          <div className="flex gap-6">
            <label className="utilslabel">
              <input type="radio" name="pg" className="utilCheckBox" />
              <span className="md:text-base text-sm">Male</span>
            </label>
            <label className="utilslabel">
              <input type="radio" name="pg" className="utilCheckBox" />
              <span className="md:text-base text-sm">Female</span>
            </label>
            <label className="utilslabel">
              <input type="radio" name="pg" className="utilCheckBox" />
              <span className="md:text-base text-sm">Anyone</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">Room Type</h2>
          <div className="grid grid-cols-2 gap-4">
            <label className="utilslabel gap-1 flex">
              <input
                type="checkbox"
                name="room_type"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Single</span>
            </label>
            <label className="utilslabel gap-1 flex">
              <input
                type="checkbox"
                name="room_type"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Double</span>
            </label>
            <label className="utilslabel gap-1 flex">
              <input
                type="checkbox"
                name="room_type"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Triple</span>
            </label>
            <label className="utilslabel gap-1 flex">
              <input
                type="checkbox"
                name="room_type"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Four</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <Box>
            <Slider
              className="w-[92%]"
              marks={priceMarks}
              step={100}
              value={priceRange}
              valueLabelDisplay="auto"
              min={MIN}
              max={MAX}
              onChange={(_, newValue) => setPriceRange(newValue)}
              sx={{ color: "#2A2C41" }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p className="md:text-para text-[12px]">
                {priceRange[0].toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}{" "}
                -{" "}
                {priceRange[1].toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}{" "}
                Prices
              </p>
            </Box>
          </Box>
          <div className="md:text-para text-sm font-light">
            <div className="flex gap-3 my-3">
              <button
                className={`px-2 py-2 w-1/2 border ${
                  activePriceRange === "5000-30000"
                    ? "border-blue-500"
                    : "border-slate-300"
                } hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(5000, 30000)}
              >
                ₹5,000 - ₹30,000
              </button>
              <button
                className={`px-2 py-2 w-1/2 border ${
                  activePriceRange === "30000-50000"
                    ? "border-blue-500"
                    : "border-slate-300"
                } hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(30000, 50000)}
              >
                ₹30,000 - ₹50,000
              </button>
            </div>
            <div className="flex gap-3">
              <button
                className={`px-2 py-2 w-1/2 border ${
                  activePriceRange === "20000-120000"
                    ? "border-blue-500"
                    : "border-slate-300"
                } hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(20000, 120000)}
              >
                ₹50,000 - ₹1.2L
              </button>
              <button
                className={`px-2 py-2 w-1/2 border ${
                  activePriceRange === "120000-200000"
                    ? "border-blue-500"
                    : "border-slate-300"
                } hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(120000, MAX)}
              >
                ₹1.2L & above
              </button>
            </div>
          </div>
        </div>

        {/* Preferred For Section */}
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">Preferred For</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                name="preferred_for"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Students</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                name="preferred_for"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Professionals</span>
            </label>
          </div>
        </div>

        {/* Food Included Section */}
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2">Food Included</h2>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                name="food_included"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Breakfast</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                name="food_included"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Lunch</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                name="food_included"
                className="utilCheckBox"
              />
              <span className="md:text-base text-sm">Dinner</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideFilter;
