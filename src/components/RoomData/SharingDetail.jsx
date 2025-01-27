import React from "react";
import { CiHeart, CiCreditCard2, CiBookmark } from "react-icons/ci";
import { MdChair } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { GiStamper } from "react-icons/gi";

const SharingDetail = () => {
  const RoomSharingDetails = [
    {
      SharingText: "Single",
      Occupancy: "Single",
      SecurityDeposit: "6,000",
      Facility: [
        {
          image:
            "https://th.bing.com/th/id/OIP.WR9lh6xMtYcEZ_z_hfQxQgAAAA?rs=1&pid=ImgDetMain",
          text: "CupBoard",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/ksru0sw0/water-geyser/p/6/w/aswh-3015-crompton-original-imag69j6vnzpgfy6.jpeg?q=70",
          text: "Geyser",
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
      Occupancy: "Double",
      SecurityDeposit: "6,000",
      Facility: [
        {
          image:
            "https://th.bing.com/th/id/OIP.WR9lh6xMtYcEZ_z_hfQxQgAAAA?rs=1&pid=ImgDetMain",
          text: "CupBoard",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/ksru0sw0/water-geyser/p/6/w/aswh-3015-crompton-original-imag69j6vnzpgfy6.jpeg?q=70",
          text: "Geyser",
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
      Occupancy: "Triple",
      SecurityDeposit: "5,000",
      Facility: [
        {
          image:
            "https://th.bing.com/th/id/OIP.WR9lh6xMtYcEZ_z_hfQxQgAAAA?rs=1&pid=ImgDetMain",
          text: "CupBoard",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/ksru0sw0/water-geyser/p/6/w/aswh-3015-crompton-original-imag69j6vnzpgfy6.jpeg?q=70",
          text: "Geyser",
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
      icon: <CiCreditCard2 className="w-[50px] h-[50px]" />,
      services: "Pay",
      text: "Token or Rent",
    },
    {
      icon: <MdChair className="w-[50px] h-[50px]" />,
      services: "Estimate",
      text: "Moving Cost",
    },
    {
      icon: <FaTruckMoving className="w-[50px] h-[50px]" />,
      services: "Rent/Buy",
      text: "Furniture",
    },
    {
      icon: <GiStamper className="w-[50px] h-[50px]" />,
      services: "Create",
      text: "Agreement",
    },
    {
      icon: <CiBookmark className="w-[50px] h-[50px]" />,
      services: "Bookmark",
      text: "Favorites",
    },
  ];

  return (
    <div className="p-4">
      {RoomSharingDetails.map((data, i) => (
        <div key={i} className="border bg-white flex flex-col py-4 gap-5 px-4">
          <p className="underline decoration-red-700 text-xl font-bold underline-offset-8">
            {data.SharingText} Sharing Room Details
          </p>
          <div className="flex">
            <div className="flex w-1/2 gap-4">
              <p>Rent for {data.Occupancy} Occupancy</p>
              <p className="font-semibold">₹ {data.SecurityDeposit}/M</p>
            </div>
            <div className="flex w-1/2 gap-4">
              <p>Security Deposit</p>
              <p className="font-semibold">₹ {data.SecurityDeposit}</p>
            </div>
          </div>
          <div className="flex gap-5 p-2">
            {data.Facility.map((facility, index) => (
              <div
                key={index}
                className="max-w-[90px] max-h-[90px] px-2 py-4 bg-slate-100 flex flex-col justify-center items-center rounded-lg"
              >
                <img
                  src={facility.image}
                  alt={`${facility.text} icon`}
                  className="max-w-[40px] max-h-[40px]"
                />
                <p className="text-[15px]">{facility.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="p-2 bg-white">
        <h1 className="text-[25px] font-semibold">Services</h1>
        <div className="flex flex-wrap justify-between mt-4">
          {Services.map((data, i) => (
            <div key={i} className="flex flex-col justify-center items-center">
              <p className="p-3 bg-white rounded-full max-w-[80px]">
                {data.icon}
              </p>
              <p>{data.services}</p>
              <span>{data.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharingDetail;
