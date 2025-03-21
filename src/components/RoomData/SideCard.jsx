// import Image from "next/image";
// import Link from "next/link";

// const SideCard = () => {
//   // Static Data with rent and deposit
//   const staticData = [
//     {
//       path: "/assets/im3.jpg",
//       altText: "Example Image 1",
//       title: "Title 1",
//       description:
//         "This is a description for package 1. It is a great package.",
//       rent: 400, // Numeric rent value
//       deposit: 90, // Numeric deposit value
//     },
//     {
//       path: "/assets//bg.jpg",
//       altText: "Example Image 2",
//       title: "Title 2",
//       description:
//         "This is a description for package 2. It is a great package.",
//       rent: 500,
//       deposit: 100,
//     },
//     {
//       path: "/assets/im2.jpg",
//       altText: "Example Image 3",
//       title: "Title 3",
//       description:
//         "This is a description for package 3. It is a great package.",
//       rent: 450,
//       deposit: 85,
//     },
//     {
//       path: "/assets/im3.jpg",
//       altText: "Example Image 4",
//       title: "Package 4",
//       description:
//         "This is a description for package 4. It is a great package.",
//       rent: 600,
//       deposit: 120,
//     },
//   ];

//   // Format money dynamically
//   const formatMoney = (value) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//     }).format(value);
//   };

//   return (
//     <div>
//       <h1 className="font-semibold text-[20px]  w-full text-center ">
//         Similar
//         <hr className=" h-1" />
//       </h1>
//       <div className="package-list">
//         {/* Check if staticData has elements */}
//         {staticData.length > 0 ? (
//           staticData.slice(0, 4).map((data, i) => {
//             // Log details to the console
//             console.log("Rendering package:", data);

//             return (
//               <div
//                 key={i}
//                 className="border relative mx-auto flex-shrink-0 max-w-[20rem] flex-col rounded-xl bg-white shadow-lg my-2"
//               >
//                 <div className="mx-4 h-[10rem] mt-4 overflow-hidden shadow rounded">
//                   <Image
//                     className="h-full w-full object-cover"
//                     width={300}
//                     height={100}
//                     src={data?.path || "/image/m2.avif"} // Fallback to default image
//                     alt={data?.altText || "Package image"} // Fallback for altText
//                   />
//                 </div>
//                 <div className="px-6 py-4">
//                   <h5 className="block text-[17px] text-heading font-semibold text-blue-gray-900">
//                     {data?.title || "Untitled"}
//                   </h5>
//                   <div className="line-clamp-3">
//                     <p className="md:text-sm text-xs ">
//                       {data?.description || "No description available."}
//                     </p>
//                   </div>
//                   <div className="items-center mt-2 flex justify-between">
//                     {/* Rent Section */}
//                     <div>
//                       <p className="text-base text-green-700 font-semibold">
//                         Rent:
//                       </p>
//                       <span className="text-base">
//                         {data?.rent ? formatMoney(data.rent) : "Not specified"}
//                       </span>
//                     </div>
//                     {/* Deposit Section */}
//                     <div>
//                       <p className="text-base font-semibold">Deposit:</p>
//                       <span className="text-base">
//                         {data?.deposit
//                           ? formatMoney(data.deposit)
//                           : "Not specified"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4 pt-0">
//                   <Link
//                     href={`/resource/case-studies/${encodeURIComponent(
//                       data?.title?.trim().replace(/\s+/g, "-") || "unknown"
//                     )}`}
//                   ></Link>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-center">No packages available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SideCard;

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Function to format currency
const formatMoney = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
};

const SideCard = () => {
  const staticData = [
    {
      path: "/assets/im3.jpg",
      altText: "Example Image 1",
      title: "Title 1",
      description:
        "This is a description for package 1. It is a great package.",
      rent: 400,
      deposit: 90,
    },
    {
      path: "/assets/bg.jpg",
      altText: "Example Image 2",
      title: "Title 2",
      description:
        "This is a description for package 2. It is a great package.",
      rent: 500,
      deposit: 100,
    },
    {
      path: "/assets/im2.jpg",
      altText: "Example Image 3",
      title: "Title 3",
      description:
        "This is a description for package 3. It is a great package.",
      rent: 450,
      deposit: 85,
    },
    {
      path: "/assets/im3.jpg",
      altText: "Example Image 4",
      title: "Package 4",
      description:
        "This is a description for package 4. It is a great package.",
      rent: 600,
      deposit: 120,
    },
  ];

  // Detect if the device is mobile or tablet
  const [isSliderActive, setIsSliderActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSliderActive(window.innerWidth <= 1024); // Enable slider for mobile & tablets
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings for mobile & tablet
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 card at a time on mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // 2.5 seconds per slide
    arrows: false,
    rtl: true, // Right to left slider on tablet
  };

  const tabletSliderSettings = {
    ...sliderSettings,
    slidesToShow: 3, // Show 3 cards at a time on tablet
  };

  return (
    <div className="w-full p-4">
      <h1 className="font-semibold text-[20px] text-center">Similar</h1>
      <hr className="h-1 mb-4" />

      {isSliderActive ? (
        // Mobile & Tablet Slider with RTL (Right to Left)
        <Slider
          {...(window.innerWidth <= 768
            ? sliderSettings
            : tabletSliderSettings)}
        >
          {staticData.map((data, i) => (
            <div key={i} className="p-2">
              <Card data={data} />
            </div>
          ))}
        </Slider>
      ) : (
        // Desktop Layout - EXACTLY as you provided
        <div className="flex flex-wrap justify-center gap-4">
          {staticData.slice(0, 2).map((data, i) => (
            <Card key={i} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

// Card Component
const Card = ({ data }) => (
  <div className="border relative mx-auto flex-shrink-0 max-w-[20rem] flex-col rounded-xl bg-white shadow-lg my-2">
    <div className="mx-4 h-[10rem] mt-4 overflow-hidden shadow rounded">
      <Image
        className="h-full w-full object-cover"
        width={300}
        height={100}
        src={data?.path || "/image/m2.avif"}
        alt={data?.altText || "Package image"}
      />
    </div>
    <div className="px-6 py-4">
      <h5 className="block text-[17px] font-semibold text-blue-gray-900">
        {data?.title || "Untitled"}
      </h5>
      <p className="text-xs md:text-sm line-clamp-3">
        {data?.description || "No description available."}
      </p>
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-base text-green-700 font-semibold">Rent:</p>
          <span className="text-base">
            {data?.rent ? formatMoney(data.rent) : "Not specified"}
          </span>
        </div>
        <div>
          <p className="text-base font-semibold">Deposit:</p>
          <span className="text-base">
            {data?.deposit ? formatMoney(data.deposit) : "Not specified"}
          </span>
        </div>
      </div>
    </div>
    <div className="p-4 pt-0">
      <Link
        href={`/resource/case-studies/${encodeURIComponent(
          data?.title?.trim().replace(/\s+/g, "-") || "unknown"
        )}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default SideCard;
