import React from "react";
import GoogleMap from "./GoogleMap";

const Map = ({ setActiveTab, roomData }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setActiveTab("Tab5"); // Change tab (replace "nextTab" with your actual tab key)
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 md:p-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Locality Details</h1>
        <p className="text-gray-500 mt-2">
          Provide accurate details for better location mapping.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 mt-5 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="locality"
              className="text-lg font-medium text-gray-700"
            >
              Select City
            </label>
            <select
              id="locality"
              className="mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
            >
              <option>Select City</option>
              <option value="noida">Noida</option>
              <option value="agra">Agra</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="text-lg font-medium text-gray-700"
            >
              Your Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter Your Address"
              className="mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="nearby"
              className="text-lg font-medium text-gray-700"
            >
              Nearby Famous Place
            </label>
            <input
              type="text"
              id="nearby"
              placeholder="Enter Nearby Famous Place"
              className="mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800">
            Upload Room Location Map
          </h2>
          <div className="mt-3 border rounded-lg overflow-hidden">
            <GoogleMap />
          </div>
        </div>

        <div className="mt-5 w-full flex justify-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium px-4 py-2 rounded-lg shadow-md transition-all"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Map;
