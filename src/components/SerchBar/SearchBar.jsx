// import React from 'react'

// const SearchBar = () => {
//   return (
//     <div className="flex z-50 items-center sticky top-16 justify-between p-4 bg-white shadow-sm border rounded-lg w-full">
//         {/* Search Input */}
//         <div className="m-auto space-x-2 w-full lg:w-1/2 flex flex-col lg:flex-row">
//           <select className="w-full lg:w-auto p-2 border rounded-lg">
//             <option value="">Select one city</option>
//             <option value="noida">Noida</option>
//             <option value="agra">Agra</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Search city here"
//             className="flex-grow p-2 border rounded-lg w-full lg:w-auto"
//           />
//           <button className="px-4 py-2 bg-red-500 text-white rounded-lg w-full lg:w-auto">
//             Search
//           </button>
//         </div>
//       </div>
//   )
// }

// export default SearchBar

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const HomeRental = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/bg.jpg')", // Replace with your image path
      }}
    >
      <div className="bg-gradient-to-b from-black/50 via-black/30 to-black/50 w-full h-full absolute"></div>
      <div className="relative z-10 text-center text-white px-6 ">
        <h2 className="text-yellow-400 font-semobold text-lg mb-4">
          Homes for rent that fit your timeline
        </h2>
        <h1 className="text-4xl  md:text-5xl">Discover a place you all love</h1>
        <div className="flex w-full  max-w-6xl justify-center mt-8">
          <button className="bg-gray-100  text-black py-6 px-10  text-sm md:text-base">
            PG & Rooms
          </button>
        </div>

        <div className="flex items-center justify-center bg-white  p-4 sm:p-6 rounded-full shadow-lg w-full max-w-6xl mx-auto">
          {/* Input for Search Locality */}
          <div className="relative w-max">
            <select
              className="appearance-none border-none  py-2  px-2 font-semibold text-sm md:text-base focus:outline-none text-gray-700 border border-gray-300 bg-transparent"
              defaultValue="Bangalore"
            >
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </select>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="absolute  top-1/2 transform -translate-y-1/2 text-black"
            />
          </div>
          <div className=" w-px h-7 bg-gray-800 mx-6"></div>
          <input
            type="text"
            placeholder="Search Locality"
            className="py-2  flex-grow  text-sm md:text-base focus:outline-none text-gray-700 border-none bg-transparent"
          />

          {/* Search Button */}

          <button className="border text-sm md:text-lg bg-[#5564AE] hover:text-primary py-2 md:py-2 px-4 md:px-5 rounded-full text-white flex items-center">
            <FontAwesomeIcon icon={faSearch} className="text-sm mr-1" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeRental;
