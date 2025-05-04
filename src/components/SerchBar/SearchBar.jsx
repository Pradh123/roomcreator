// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCaretDown,
//   faSearch,
// } from "@fortawesome/free-solid-svg-icons";
// import CitySelection from "./CitySelection";

// const HomeRental = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const togglePopup1 = ()=>{
//     setIsPopupVisible(true);
//   }
//   return (
//     <div
//       className="min-h-[80vh] bg-cyan-50 w-full bg-cover  flex items-center justify-center"
     
//     >
//       <div className="bg-gradient-to-b via-black/30 to-black/50 w-full h-full absolute"></div>
//       <div className="relative z-1 text-center px-6">
//         <h2 className="text-yellow-400 font-semibold md:text-[30px] text-xl mb-4">
//           Homes for rent that fit your timeline
//         </h2>
//         <h1 className="">Discover a place you all love</h1>
//         <div className="flex w-full max-w-6xl justify-center mt-8">
//           <div className="bg-gradient-to-r rounded-t-[40px] from-blue-400 to-blue-300 hover:bg-gray-600 text-white font-semibold py-3 px-6 text-base">
//             Pg & Rooms
//           </div>
//         </div>

//         <div className="flex items-center  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-2 md:p-6 bg-white rounded-full shadow-lg">
//           <div className="w-auto flex  flex-shrink-0  relative">
//             <button
//               className="appearance-none border-none bg-transparent text-gray-700 px-3 py-1 text-sm md:text-base rounded-lg focus:outline-none"
//               onClick={togglePopup1}
//             >
//               {selectedCity ? selectedCity.name : "Select City"}
//               <FontAwesomeIcon icon={faCaretDown} className="pl-2 text-black" />
//             </button>
//           </div>
//           <div className="w-[1px] h-4 bg-gray-300 mx-3"></div>
//           <input
//             type="text"
//             placeholder="Search Locality"
//             className="flex-grow text-sm md:text-base text-gray-700 bg-transparent focus:outline-none placeholder-gray-500"
//           />
//           <div className=" md:block hidden">
//             <button className="flex  items-center bg-[#5564AE] hover:bg-[#445299] text-white text-sm md:text-base py-2 px-1 md:px-5 rounded-full">
//               <FontAwesomeIcon icon={faSearch} className="text-sm md:mr-2" />
//               <span className=" ">Search</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {isPopupVisible && (
//         <CitySelection 
//           setIsPopupVisible={setIsPopupVisible} 
//           isPopupVisible={isPopupVisible} 
//           setSelectedCity={setSelectedCity} 
//           selectedCity={selectedCity}
//         />
//       )}
//     </div>
//   )
// }

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
  className="min-h-[80vh] w-full bg-cover bg-center relative flex items-center justify-center"
  style={{ backgroundImage: "url('/assets/noidaCity.jpg')" }}
>
  <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0"></div>
      <div className="relative z-10 text-center px-6">
        <h2 className="text-yellow-400 font-semibold md:text-[30px] text-xl mb-4 capitalize">
          Homes for rent that fit your timeline
        </h2>
        <h1 className="text-white capitalize">Discover a place you all love</h1>
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

