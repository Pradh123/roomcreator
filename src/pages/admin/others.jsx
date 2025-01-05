import Apartment from "@/components/admin/Others/Apartment";
import BHK from "@/components/admin/Others/BHK";
import Floors from "@/components/admin/Others/Floors";
import PropertyAge from "@/components/admin/Others/PropertyAge";
import RoomFacing from "@/components/admin/Others/RoomFacing";
import Layout from "@/components/Layout/Layout";
import React from "react";

const others = () => {
  return (
    <Layout>
      <div className=" grid lg:grid-cols-2 gap-3">
        <Apartment />
        <BHK />
        <RoomFacing/>
        <PropertyAge/>
        <Floors/>
      </div>
    </Layout>
  );
};

export default others;
