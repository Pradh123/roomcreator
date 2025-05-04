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

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
// // import { FaMapMarkerAlt } from "react-icons/fa";
// const HomeRental = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const allCities = [
//     { name: "Bangalore", image: "/assets/bangalore.jpg" },
//     { name: "Mumbai", image: "/assets/mumbai.jpg" },
//     { name: "Delhi", image: "/assets/delhi.jpg" },
//     { name: "Chennai", image: "/assets/chennai.jpg" },
//     { name: "Kolkata", image: "/assets/kolkata.jpg" },
//     { name: "Kolkata", image: "/assets/kolkata.jpg" },
//     { name: "Kolkata", image: "/assets/kolkata.jpg" },
//     { name: "Kolkata", image: "/assets/kolkata.jpg" },
//   ];

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   const handleCitySelect = (city) => {
//     setSelectedCity(city);
//     setIsPopupVisible(false); // Close the popup after selection
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: "url('/assets/bg.jpg')",
//       }}
//     >
//       <div className="bg-gradient-to-b from-black/50 via-black/30 to-black/50 w-full h-full absolute"></div>
//       <div className="relative z-10 text-center text-white px-6">
//         <h2 className="text-yellow-400 font-semibold text-lg mb-4">
//           Homes for rent that fit your timeline
//         </h2>
//         <h1 className="text-4xl md:text-5xl">Discover a place you all love</h1>
//         <div className="flex w-full max-w-6xl justify-center mt-8">
//           <button className="bg-gradient-to-r rounded-t-[40px]   from-blue-400 to-blue-300 hover:bg-gray-600 text-white font-semibold  py-3 px-6  text-base md:text-base  transition-transform transform hover:scale-105">
//             Pg & Rooms
//           </button>
//         </div>

//         <div className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-full shadow-lg w-full max-w-6xl mx-auto">
//           {/* Input for Selected City */}
//           <div className=" w-max  relative">
//             <button
//               className="w-full appearance-none border-none text-left bg-transparent text-gray-700 py-2 px-4 border border-gray-300 rounded-lg"
//               onClick={togglePopup}
//             >
//               {selectedCity ? selectedCity.name : "Select City"}
//               <FontAwesomeIcon
//                 icon={faCaretDown}
//                 className=" pl-2 text-black"
//               />
//             </button>
//           </div>

//           <div className="w-[2px] h-7 bg-gray-700 mx-2 "></div>
//           <input
//             type="text"
//             placeholder="Search Locality"
//             className="py-2  appearance-none border-none  flex-grow text-sm md:text-base focus:outline-none text-gray-700  bg-transparent"
//           />

//           {/* Search Button */}
//           <button className="border text-sm md:text-lg bg-[#5564AE] hover:text-primary py-2 md:py-2 px-4 md:px-5 rounded-full text-white flex items-center">
//             <FontAwesomeIcon icon={faSearch} className="text-sm mr-1" />
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Popup Modal */}
//       {isPopupVisible && (
//         <div className="fixed    bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-1/2 mx-auto h-[380px] overflow-auto p-6 rounded-lg shadow-lg  text-center">
//             {/* <h3 className="text-xl font-semibold mb-4">Select City</h3> */}
//             <div className="flex flex-wrap gap-4 justify-center mb-4">
//               {allCities.map((city) => (
//                 <div
//                   key={city.name}
//                   className="cursor-pointer border rounded-lg overflow-hidden shadow-md w-40"
//                   onClick={() => handleCitySelect(city)}
//                 >
//                   <div
//                     className={`py-2 text-sm font-semibold ${
//                       selectedCity?.name === city.name
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {city.name}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               className=" bg-gray-500 text-white py-2 px-4 rounded-lg"
//               onClick={togglePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomeRental;





import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import CitySelection from "./CitySelection";

const HomeRental = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const togglePopup1 = ()=>{
    setIsPopupVisible(true);
  }
  return (
    <div
      className="min-h-[80vh] bg-cyan-50 w-full bg-cover  flex items-center justify-center"
     
    >
      <div className="bg-gradient-to-b via-black/30 to-black/50 w-full h-full absolute"></div>
      <div className="relative z-1 text-center px-6">
        <h2 className="text-yellow-400 font-semibold md:text-[30px] text-xl mb-4">
          Homes for rent that fit your timeline
        </h2>
        <h1 className="">Discover a place you all love</h1>
        <div className="flex w-full max-w-6xl justify-center mt-8">
          <div className="bg-gradient-to-r rounded-t-[40px] from-blue-400 to-blue-300 hover:bg-gray-600 text-white font-semibold py-3 px-6 text-base">
            Pg & Rooms
          </div>
        </div>

        <div className="flex items-center  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-2 md:p-6 bg-white rounded-full shadow-lg">
          <div className="w-auto flex  flex-shrink-0  relative">
            <button
              className="appearance-none border-none bg-transparent text-gray-700 px-3 py-1 text-sm md:text-base rounded-lg focus:outline-none"
              onClick={togglePopup1}
            >
              {selectedCity ? selectedCity.name : "Select City"}
              <FontAwesomeIcon icon={faCaretDown} className="pl-2 text-black" />
            </button>
          </div>
          <div className="w-[1px] h-4 bg-gray-300 mx-3"></div>
          <input
            type="text"
            placeholder="Search Locality"
            className="flex-grow text-sm md:text-base text-gray-700 bg-transparent focus:outline-none placeholder-gray-500"
          />
          <div className=" md:block hidden">
            <button className="flex  items-center bg-[#5564AE] hover:bg-[#445299] text-white text-sm md:text-base py-2 px-1 md:px-5 rounded-full">
              <FontAwesomeIcon icon={faSearch} className="text-sm md:mr-2" />
              <span className=" ">Search</span>
            </button>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <CitySelection 
          setIsPopupVisible={setIsPopupVisible} 
          isPopupVisible={isPopupVisible} 
          setSelectedCity={setSelectedCity} 
          selectedCity={selectedCity}
        />
      )}
    </div>
  )
}

export default HomeRental
