import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSearch,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const CitySelection = ({setIsPopupVisible, setSelectedCity, selectedCity, isPopupVisible}) => {

    const allCities = [
        { name: "Bangalore" },
        { name: "Mumbai" },
        { name: "Delhi" },
        { name: "Chennai" },
        { name: "Kolkata" },
        { name: "Kolkata" },
      ];
    
      const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
      };
    
      const handleCitySelect = (city) => {
        setSelectedCity(city);
        setIsPopupVisible(false);
      };
    
      useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);

  return (
    <>
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white md:w-1/2 w-[90%] mx-auto flex justify-center items-center   max-h-[90vh] h-auto overflow-y-auto px-6 py-10 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-5 hover:text-gray-400"
              onClick={togglePopup}
            >
              <FontAwesomeIcon icon={faCircleXmark} size="lg" />
            </button>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              {allCities.map((city) => (
                <div
                  key={city.name}
                  className="cursor-pointer border text-center rounded-lg overflow-hidden shadow-md w-40"
                  onClick={() => handleCitySelect(city)}
                >
                  <div
                    className={`py-2 text-sm font-semibold ${
                      selectedCity?.name === city.name
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {city.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default CitySelection;
