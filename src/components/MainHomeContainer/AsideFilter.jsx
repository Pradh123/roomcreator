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
  const handlePriceButtonClick = (min, max) => {
    if (activePriceRange === `${min}-${max}`) {
      setPriceRange([5000, 200000]);  // Reset to default if the same range is clicked again
      setActivePriceRange(null);  // Deactivate the button
    } else {
      setPriceRange([min, max]);
      setActivePriceRange(`${min}-${max}`);  // Set the clicked range as active
    }
  };
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-full overflow-y-scroll max-h-[85vh]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="filter">
          <CiFilter />
          Filter
        </h1>
        <button className="reset">
          <GrPowerReset />
          Reset
        </button>
      </div>
      <hr/>

      {/* PG for Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">PG for</h2>
        <div className="flex gap-4">
          <label className="utilslabel">
            <input type="radio" name="pg" className="utilCheckBox" />
            <span>Male</span>
          </label>
          <label className="utilslabel">
            <input type="radio" name="pg" className="utilCheckBox" />
            <span>Female</span>
          </label>
          <label className="utilslabel">
            <input type="radio" name="pg" className="utilCheckBox" />
            <span>Anyone</span>
          </label>
        </div>
      </div>

      {/* Room Type Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">Room Type</h2>
        <div className="grid grid-cols-2 gap-4">
          <label className="utilslabel">
            <input type="checkbox" name="room_type" className="utilCheckBox" />
            <span>Single</span>
          </label>
          <label className="utilslabel">
            <input type="checkbox" name="room_type" className="utilCheckBox" />
            <span>Double</span>
          </label>
          <label className="utilslabel">
            <input type="checkbox" name="room_type" className="utilCheckBox" />
            <span>Triple</span>
          </label>
          <label className="utilslabel">
            <input type="checkbox" name="room_type" className="utilCheckBox" />
            <span>Four</span>
          </label>
        </div>
      </div>

      {/* Rent Range Section */}
      <div className="mb-4">
      <Box>
            <Slider
              className="w-full"
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
                className={`px-2 py-2 w-1/2 border ${activePriceRange === "5000-30000" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(5000, 30000)}
              >
                ₹5,000 - ₹30,000
              </button>
              <button
                className={`px-2 py-2 w-1/2 border ${activePriceRange === "30000-50000" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(30000, 50000)}
              >
                ₹30,000 - ₹50,000
              </button>
            </div>
            <div className="flex gap-3">
              <button
                className={`px-2 py-2 w-1/2 border ${activePriceRange === "20000-120000" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(20000, 120000)}
              >
                ₹50,000 - ₹1.2L
              </button>
              <button
                className={`px-2 py-2 w-1/2 border ${activePriceRange === "120000-200000" ? "border-blue-500" : "border-slate-300"} hover:border-slate-500 text-gray-600 rounded-full`}
                onClick={() => handlePriceButtonClick(120000, MAX)}
              >
                ₹1.2L & above
              </button>
            </div>
          </div>
      </div>

      {/* Preferred For Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">Preferred For</h2>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="preferred_for"
              className="utilCheckBox"
            />
            <span>Students</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="preferred_for"
              className="utilCheckBox"
            />
            <span>Professionals</span>
          </label>
        </div>
      </div>

      {/* Food Included Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">Food Included</h2>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="food_included"
              className="utilCheckBox"
            />
            <span>Breakfast</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="food_included"
              className="utilCheckBox"
            />
            <span>Lunch</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="food_included"
              className="utilCheckBox"
            />
            <span>Dinner</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AsideFilter;
