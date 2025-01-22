import React from "react";

import { RoomCard } from "./RoomCard";
import BottomLink from "./BottomLink";

const Container = () => {
  return (
    <>
      <RoomCard />
      <RoomCard /><RoomCard /><RoomCard /><RoomCard />
      {/* <BottomLink /> */}
      <div className=" text-center my-3">
        <button className=" bg-[#009587] px-4 py-3 rounded-md hover:bg-[#007a6f] ">
          Post Your Requirement
        </button>
      </div>
    </>
  );
};

export default Container;
