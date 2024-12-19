import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex z-50 items-center sticky top-16 justify-between p-4 bg-white shadow-sm border rounded-lg w-full">
        {/* Search Input */}
        <div className="m-auto space-x-2 w-full lg:w-1/2 flex flex-col lg:flex-row">
          <select className="w-full lg:w-auto p-2 border rounded-lg">
            <option value="">Select one city</option>
            <option value="noida">Noida</option>
            <option value="agra">Agra</option>
          </select>
          <input
            type="text"
            placeholder="Search city here"
            className="flex-grow p-2 border rounded-lg w-full lg:w-auto"
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg w-full lg:w-auto">
            Search
          </button>
        </div>
      </div>
  )
}

export default SearchBar