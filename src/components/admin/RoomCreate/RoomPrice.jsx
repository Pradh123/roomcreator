import React, { useState } from "react";

const RoomPrice = ({ setActiveTab, roomData }) => {
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room Price Submitted:", price);
    setActiveTab("Tab4");
  };

  return (
    <div>
      <h2>Here is my Room Price Section</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Room Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RoomPrice;
