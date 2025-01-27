
import React from "react";
import { useState } from "react";
import {
  FaRegUser,
  FaPhoneAlt,
  FaTruckMoving,
  FaArrowCircleUp,
} from "react-icons/fa";
import { CiHeart, CiCreditCard2, CiBookmark } from "react-icons/ci";
import { MdChair } from "react-icons/md";
import { GiStamper } from "react-icons/gi";
import {
  FaHome,
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
const RoomPage = () => {
  const [input, setinput] = useState("");
  const [review, setreview] = useState([" This product is verey very good"]);
  const [sliderBool, setSliderBool] = useState(false);
  const handleClickForSlider = () => {
    setSliderBool(true);
  };
  const handleReview = () => {
    console.log(review);
    console.log(input);
    setinput("");
    setreview([...review, input]);
  };
  console.log(review);
  const Activitycard = [
    {
      icon: <FaRegUser className="  text-[25px] font-semibold" />,
      Number: 130,
      text: "Unique View",
    },
    {
      icon: <CiHeart className="  text-[25px] font-semibold" />,
      Number: 10,
      text: "ShortList",
    },
    {
      icon: <FaPhoneAlt className="  text-[25px] font-semibold" />,
      Number: 0,
      text: "Conatact",
    },
  ];
  const RoomSharingDetails = [
    {
      SharingText: "Single",
      Occupancy: "Single",
      SecurityDeposit: "6,000",
      Faciluty: [
        {
          image:
            "https://th.bing.com/th/id/OIP.WR9lh6xMtYcEZ_z_hfQxQgAAAA?rs=1&pid=ImgDetMain",
          text: "CupBoard",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/ksru0sw0/water-geyser/p/6/w/aswh-3015-crompton-original-imag69j6vnzpgfy6.jpeg?q=70",
          text: "Geagure",
        },
        {
          image:
            "https://www.nilkamalsleep.com/cdn/shop/products/4_beb9aaa3-29e7-4d84-a222-486acaa9eb35_650x.jpg?v=1723097059",
          text: "Bedding",
        },
      ],
    },

    {
      SharingText: "Double",
      Occupancy: "double",
      SecurityDeposit: "6,000",
      Faciluty: [
        {
          image:
            "https://th.bing.com/th/id/OIP.WR9lh6xMtYcEZ_z_hfQxQgAAAA?rs=1&pid=ImgDetMain",
          text: "CupBoard",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/ksru0sw0/water-geyser/p/6/w/aswh-3015-crompton-original-imag69j6vnzpgfy6.jpeg?q=70",
          text: "Geagure",
        },
        {
          image:
            "https://www.nilkamalsleep.com/cdn/shop/products/4_beb9aaa3-29e7-4d84-a222-486acaa9eb35_650x.jpg?v=1723097059",
          text: "Bedding",
        },
      ],
    },
    {
      SharingText: "Triple",
      Occupancy: "triple",
      SecurityDeposit: "5,000",
      Faciluty: [
        {
          image:
            "https://th.bing.com/th/id/OIP.WR9lh6xMtYcEZ_z_hfQxQgAAAA?rs=1&pid=ImgDetMain",
          text: "CupBoard",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/ksru0sw0/water-geyser/p/6/w/aswh-3015-crompton-original-imag69j6vnzpgfy6.jpeg?q=70",
          text: "Geagure",
        },
        {
          image:
            "https://www.nilkamalsleep.com/cdn/shop/products/4_beb9aaa3-29e7-4d84-a222-486acaa9eb35_650x.jpg?v=1723097059",
          text: "Bedding",
        },
      ],
    },
  ];
  const Services = [
    {
      icon: <CiCreditCard2 className=" w-[50px] h-[50px]" />,
      services: "Pay",
      text: "Token or Rent",
    },
    {
      icon: <MdChair className=" w-[50px] h-[50px]" />,
      services: "Estimate",
      text: "Moving Coast",
    },
    {
      icon: <FaTruckMoving className=" w-[50px] h-[50px]" />,
      services: "Rent/Buy",
      text: "Furniture",
    },
    {
      icon: <GiStamper className=" w-[50px] h-[50px]" />,
      services: "Create",
      text: "Agreement",
    },
    {
      icon: <GiStamper className=" w-[50px] h-[50px]" />,
      services: "Create",
      text: "Agreement",
    },
    {
      icon: <CiBookmark className=" w-[50px] h-[50px]" />,
      services: "Create",
      text: "Agreement",
    },
  ];

  return (
    <>
      <Header />
      {sliderBool && <ImageSlider setSliderBool={setSliderBool} />}
      <div>
        <p className="text-gray-600">
          Home / PG in Noida / PG in Sector 75 / PG for Boys in Sector 75 /
          Property Details
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,0.9fr] gap-3 md:px-2">
          {/* Main Content */}
          <div className="px-5 grid grid-cols-1">
            {/* Add only the necessary components */}
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

          {/* Sidebar */}
          <div className="px-">
            <div className="sticky top-0 ">
              {/* Table of contents or other sidebar elements can be added here */}
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
                    // onClick={() => setOwenerDetailsPopUp(true)}
                    className="getownerButton"
                  >
                    Get Owner Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,0.9fr] gap-4 md:px-5">
          {/* Main Content */}
          <div className="px-5 grid grid-cols-1">
            {/* Add only the necessary components */}
            <div>
              {/* {industryName?.contentsummary && (
        <IndustryAbout about={industryName?.contentsummary} />
      )} */}
              <p>Trail first Side </p>
              <SharingDetail />
            </div>
          </div>

          {/* Sidebar */}
          <div className="px-1">
            <div className="sticky top-0 z-10">
              {/* Table of contents or other sidebar elements can be added here */}
              {/* <IndustrySideForm /> */}
              <div className="">
                <h1 className="font-semibold text-[20px] p-3 w-full text-center mt-3">
                  Similar
                  <hr className="mt-2 h-1" />
                </h1>
                <SideCard />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="RoomSharingCard">
          <div className="RoomCardSharingDetails">
            {RoomSharingDetails.map((data, i) => (
              <div
                key={i}
                className=" border bg-white flex flex-col py-4 gap-5 px-4"
              >
                <p className=" underline decoration-red-700 text-xl font-bold underline-offset-8">
                  {data.SharingText} Sharing Room Details
                </p>
                <div className=" flex">
                  <div className="flex w-1/2 gap-4">
                    <p>Rent for {data.Occupancy} Occupancy</p>
                    <p className=" font-semibold">₹ {data.SecurityDeposit}/M</p>
                  </div>
                  <div className="flex w-1/2 gap-4">
                    <p>Security Deposit</p>
                    <p className=" font-semibold">₹ {data.SecurityDeposit}/M</p>
                  </div>
                </div>
                <div className=" flex  gap-5  p-2">
                  {data.Faciluty.map((Faciluty, i) => (
                    <div
                      key={i}
                      className="   max-w-[90px] max-h-[90px] px-2 py-4 bg-slate-100 flex flex-col justify-center items-center rounded-lg"
                    >
                      <img
                        src={Faciluty.image}
                        alt=""
                        className=" max-w-[40px] max-h-[40px] "
                      />
                      <p className=" text-[15px]">{Faciluty.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className=" p-2 bg-white">
              <h1 className=" text-[25px] font-semibold"> Services</h1>
              <div className="flex flex-wrap  justify-between mt-4">
                {Services.map((data, i) => (
                  <div
                    key={i}
                    className=" flex flex-col justify-center items-center"
                  >
                    <p className=" p-3  bg-white  rounded-full  max-w-[80px]">
                      {data.icon}
                    </p>
                    <p>{data.services}</p>
                    <span>{data.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" w-1/3  ml-4  p-3">
            <h1 className=" font-semibold text-[20px] p-3 w-full text-center mt-3">
              Similar
              <hr className=" mt-2 h-1" />
            </h1>
            <SideCard />
          </div>
        </div> */}

        <div className="  flex justify-center m-auto  mt-[5vh]">
          <img
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
            alt=" google map image"
            className=" w-4/5 m-auto max-h-[70vh]  object-cover   "
          />
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

// <div className="bg-white  ">
// <div className="mt-4">
//   <p className="text-gray-600">
//     Home / PG in Noida / PG in Sector 75 / PG for Boys in Sector 75 /
//     Property Details
//   </p>
// </div>
// <div className="mt-4 flex h-full">
//   <div className="w-2/3">
//     <div className="relative flex">
//       <div>
//         <img
//           src="https://placehold.co/600x400"
//           alt="Room image"
//           className="w-full h-auto"
//         />

//         <button className="RoomDetailsbtn">
//           <FaCamera className="mr-2" /> Photos
//         </button>
//         <button className="RoomDetailsbtn">
//           <FaMapMarkerAlt className="mr-2" /> Location
//         </button>
//       </div>
//       <div className="flex flex-col mx-2">
//         <img
//           src="https://placehold.co/300x200"
//           alt="Room image"
//           className="w-full h-auto"
//         />
//         <div
//           onClick={handleClickForSlider}
//           className="relative cursor-pointer"
//         >
//           <img
//             src="https://placehold.co/300x200"
//             alt="Room image"
//             className="w-full h-auto"
//           />
//           <div className="RoomDetailsCardimagesnumber">+6</div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="w-1/3 pl-4">
//     <div className="border p-4">
//       <div className="border">
//         <div className="flex justify-between items-center border-b mb-2">
//           <div className="flex items-center border-r px-2 py-3 w-1/2">
//             <FaUserTie className="mr-2" />
//             <div className="px-2">
//               <p>Professional</p>
//               <p>Prefered Tenant</p>
//             </div>
//           </div>
//           <div className="flex items-center px-2 py-3 w-1/2">
//             <FaCalendarAlt className="mr-2" />
//             <div className="mr-2">
//               <p>Aug 11, 2024</p>
//               <p>Posted On</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center border-b mb-2">
//           <div className="flex items-center border-r px-2 py-3 w-1/2">
//             <FaCar className="mr-2" />
//             <div className="px-2">
//               <p> Car</p>
//               <p>Parking</p>
//             </div>
//           </div>
//           <div className="flex items-center px-2 py-3 w-1/2">
//             <FaClock className="mr-2" />
//             <div className="px-2">
//               <p> Immediately</p>
//               <p>Possesion</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center mb-2">
//           <div className="flex items-center border-r px-2 py-3 w-1/2">
//             <FaUtensils className="mr-2" />
//             <div className=" px-2">
//               <p> Not Available</p>
//               <p>Food Facility</p>
//             </div>
//           </div>
//           <div className="flex items-center px-2 py-3 w-1/2">
//             <FaKey className="mr-2" />
//             <div className=" px-2">
//               <p> Not Provided</p>
//               <p>Gate Closing Time</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         // onClick={() => setOwenerDetailsPopUp(true)}
//         className="getownerButton"
//       >
//         Get Owner Details
//       </button>
//     </div>
//   </div>
// </div>
// </div>
