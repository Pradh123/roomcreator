// import React, { useState } from "react";

// const RoomPrice = ({ setActiveTab, roomData }) => {
//   const [price, setPrice] = useState("");

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Room Price Submitted:", price);
//   setActiveTab("Tab4");
// };

//   return (
//     <div>
//       <h2>Here is my Room Price Section</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           placeholder="Enter Room Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <button
//           type="submit"
//           className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RoomPrice;

import { useState } from "react";

function RoomPrice({ setActiveTab, roomData }) {
  const [prices, setPrices] = useState({
    oneSharing: "",
    twoSharing: "",
    threeSharing: "",
  });
  const [selected, setSelected] = useState({
    oneSharing: false,
    twoSharing: false,
    threeSharing: false,
  });

  const handleChange = (e, type) => {
    setPrices({ ...prices, [type]: e.target.value });
  };

  const handleCheckbox = (type) => {
    setSelected({ ...selected, [type]: !selected[type] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Options:", selected);
    console.log("Prices:", prices);
    setActiveTab("Tab4");
  };

  return (
    <div className="flex flex-col bg-gray-100 p-6 w-full">
      <div className="grid gap-6 w-full max-w-lg">
        {[
          { label: "One Sharing", key: "oneSharing" },
          { label: "Two Sharing", key: "twoSharing" },
          { label: "Three Sharing", key: "threeSharing" },
        ].map((item) => (
          <div
            key={item.key}
            className="p-4 shadow-lg rounded bg-gray-50 flex items-center gap-5 justify-center"
          >
            <input
              type="number"
              placeholder="Enter Price"
              value={prices[item.key]}
              onChange={(e) => handleChange(e, item.key)}
              className="w-60 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-lg font-semibold">{item.label}</span>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={selected[item.key]}
                onChange={() => handleCheckbox(item.key)}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full max-w-lg p-3 text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </div>
  );
}

export default RoomPrice;
