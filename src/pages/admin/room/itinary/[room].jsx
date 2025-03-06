import { useState, useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import BasicInfo from "@/components/admin/RoomCreate/BasicInfo";
import RoomImgeUpload from "@/components/admin/RoomCreate/RoomImgeUpload";
import RoomPrice from "@/components/admin/RoomCreate/RoomPrice";
import Map from "@/components/admin/RoomCreate/Map";

export default function Room() {
  const router = useRouter();
  const { room } = router?.query;
  const [roomData, setRoomData] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");

  // Function to switch to the next tab
  useEffect(() => {
    if (activeTab === "Tab1") {
      setActiveTab("Tab2");
    } else if (activeTab === "Tab2") {
      setActiveTab("Tab3");
    } else if (activeTab === "Tab3") {
      setActiveTab("Tab4");
    } else if (activeTab === "Tab4") {
      setActiveTab("Tab5");
    }
  }, []);

  return (
    <Layout>
      <div className="flex items-center gap-5 text-primary pb-3">
        <p className="md:text-[28px] text-2xl text-black">Create Room</p>
      </div>
      <div className="border-b border-slate-300 mb-5">
        <div className="flex gap-2 text-[14px] pt-3 pb-2 flex-wrap">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`${
              activeTab === "Tab1"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            Basic Information
          </button>
          <button
            onClick={() => setActiveTab("Tab2")}
            className={`${
              activeTab === "Tab2"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            RoomImage Upload
          </button>
          <button
            onClick={() => setActiveTab("Tab3")}
            className={`${
              activeTab === "Tab3"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            RoomPrice Detail
          </button>
          <button
            onClick={() => setActiveTab("Tab4")}
            className={`${
              activeTab === "Tab4"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            Map
          </button>
          <button
            onClick={() => setActiveTab("Tab5")}
            className={`${
              activeTab === "Tab5"
                ? "border-b-2 scale-105 border-black text-black"
                : "border-black text-slate-500"
            } px-3 py-1`}
          >
            Seo Field
          </button>
        </div>
      </div>

      {/* Render each tab's content conditionally */}
      <div
        className={`tab-content ${activeTab === "Tab1" ? "block" : "hidden"}`}
      >
        <BasicInfo setActiveTab={setActiveTab} roomData={roomData} />
      </div>
      <div
        className={`tab-content ${activeTab === "Tab2" ? "block" : "hidden"}`}
      >
        <RoomImgeUpload roomData={roomData} setActiveTab={setActiveTab} />
      </div>
      <div
        className={`tab-content ${activeTab === "Tab3" ? "block" : "hidden"}`}
      >
        <RoomPrice roomData={roomData} setActiveTab={setActiveTab} />
      </div>
      <div
        className={`tab-content ${activeTab === "Tab4" ? "block" : "hidden"}`}
      >
        <Map roomData={roomData} setActiveTab={setActiveTab} />
      </div>
      <div
        className={`tab-content ${activeTab === "Tab5" ? "block" : "hidden"}`}
      >
        {/* <SeoPage roomData={roomData} setActiveTab={setActiveTab} /> */}
      </div>
    </Layout>
  );
}
