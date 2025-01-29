import React from "react";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import {
  FaCamera,
  FaMapMarkerAlt,
  FaUserTie,
  FaCalendarAlt,
  FaCar,
  FaClock,
  FaUtensils,
  FaKey,
} from "react-icons/fa";
import ImageSlider from "@/components/RoomPage/ImageSlider";
import BottomLink from "@/components/MainHomeContainer/ContainerCard/BottomLink";
import Header from "@/components/Header/Header";
import SideCard from "@/components/RoomData/SideCard";
import SharingDetail from "@/components/RoomData/SharingDetail";
import Itinerarymap from "@/components/RoomPage/RoomMap";
import { useDispatch, useSelector } from "react-redux";
import { formOpen } from "@/store/signUpSlice";
import { OwnerDetails } from "@/components/UserLoginToGetOnwerDetail";
const RoomPage = () => {
  const [input, setinput] = useState("");
  const [review, setreview] = useState([" This product is verey very good"]);
  const [sliderBool, setSliderBool] = useState(false);
  const dispatch=useDispatch();
  const login=useSelector(store=>store.signup);
  const handleClickForSlider = () => {
    setSliderBool(true);
  };
  const handleReview = () => {
    console.log(review);
    console.log(input);
    setinput("");
    setreview([...review, input]);
  };
  // console.log(review);

  return (
    <>
      <Header />
      {login?.togle&&<OwnerDetails/>}
      {sliderBool && <ImageSlider setSliderBool={setSliderBool} />}
       <div>
        <p className="text-gray-600">
          Home / PG in Noida / PG in Sector 75 / PG for Boys in Sector 75 /
          Property Details
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,0.9fr] gap-3 md:px-2">
       
          <div className="px-5 grid grid-cols-1">
           
            <div>
              <p>Trial Here</p>
            </div>
            <div className="">
              <div className="relative flex">
                <div>
                  <img
                    src="https://placehold.co/600x400"
                    alt="Room image"
                    className="w-full h-auto"
                  />

                  <button className="RoomDetailsbtn">
                    <FaCamera className="mr-2" /> Photos
                  </button>
                  <button className="RoomDetailsbtn">
                    <FaMapMarkerAlt className="mr-2" /> Location
                  </button>
                </div>
                <div className="flex flex-col mx-2">
                  <img
                    src="https://placehold.co/300x200"
                    alt="Room image"
                    className="w-full h-auto"
                  />
                  <div
                    onClick={handleClickForSlider}
                    className="relative cursor-pointer"
                  >
                    <img
                      src="https://placehold.co/300x200"
                      alt="Room image"
                      className="w-full h-auto"
                    />
                    <div className="RoomDetailsCardimagesnumber">+6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="px-">
            <div className="sticky top-0 ">
              
              welcomr to the slode section
              <div className="">
                <div className="border p-4">
                  <div className="border">
                    <div className="flex justify-between items-center border-b mb-2">
                      <div className="flex items-center border-r px-2 py-3 w-1/2">
                        <FaUserTie className="mr-2" />
                        <div className="px-2">
                          <p>Professional</p>
                          <p>Prefered Tenant</p>
                        </div>
                      </div>
                      <div className="flex items-center px-2 py-3 w-1/2">
                        <FaCalendarAlt className="mr-2" />
                        <div className="mr-2">
                          <p>Aug 11, 2024</p>
                          <p>Posted On</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b mb-2">
                      <div className="flex items-center border-r px-2 py-3 w-1/2">
                        <FaCar className="mr-2" />
                        <div className="px-2">
                          <p> Car</p>
                          <p>Parking</p>
                        </div>
                      </div>
                      <div className="flex items-center px-2 py-3 w-1/2">
                        <FaClock className="mr-2" />
                        <div className="px-2">
                          <p> Immediately</p>
                          <p>Possesion</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center border-r px-2 py-3 w-1/2">
                        <FaUtensils className="mr-2" />
                        <div className=" px-2">
                          <p> Not Available</p>
                          <p>Food Facility</p>
                        </div>
                      </div>
                      <div className="flex items-center px-2 py-3 w-1/2">
                        <FaKey className="mr-2" />
                        <div className=" px-2">
                          <p> Not Provided</p>
                          <p>Gate Closing Time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(formOpen())}
                    className="getownerButton"
                  >
                    Get Owner Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-10  lg:grid-cols-[2fr,0.9fr] gap-3 md:px-2">
          
          <div className="grid grid-cols-1">
           
            <div>
              <SharingDetail />
            </div>
          </div>

          
          <div className="px-1">
            <div className="sticky top-0 z-10">
              <SideCard />
            </div>
          </div>
        </div>

        <div className="  flex justify-center m-auto  mt-[5vh]">
        
          <Itinerarymap/>
        </div>
        <div className=" mt-3  mx-10 border border-red-500 min-h-[60vh] bg-slate-50 relative">
          <h1 className=" text-center font-bold"> Rate And Review</h1>
          <div className="bg-white p-3 w-[90%] m-auto rounded-md border border-slate-300 ">
            {review.map((text, i) => (
              <div key={i}>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <section className=" w-full flex  justify-center ">
            <div className=" w-[80%] rounded-3xl  shadow-xl  flex absolute bottom-3 bg-white justify-between items-center  p-2 ">
              <input
                type="text"
                className=" w-[70%]   p-1 rounded-3xl outline-none  "
                value={input}
                onChange={(e) => {
                  e.preventDefault();
                  setinput(e.target.value);
                }}
              />
              <FaArrowCircleUp
                className=" text-[30px] bg-white  cursor-pointer "
                onClick={handleReview}
              />
            </div>
          </section>
        </div>
        <div className="m-10">
          <BottomLink />
        </div>
      </div> 
    </>
  );
};

export default RoomPage;
