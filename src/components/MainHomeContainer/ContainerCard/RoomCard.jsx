import { FaMapMarkerAlt, FaUserGraduate, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import images from "./Images/Images";
import { useEffect, useState } from "react";
export const RoomCard = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Set interval to change image every 3 seconds
    const id = setInterval(() => {
      setCount((prevCount) => (prevCount >= images?.length - 1 ? 0 : prevCount + 1));
    }, 2000);

    // Clear the interval when component unmounts
    return () => clearInterval(id);
  }, [count]);
  return (
    <div>
      <div className="h-auto bg-gray-100 flex flex-col ">
        {/* Header Section */}

        <div className="  bg-slate-100">
          <div className="flex flex-col my-3">
            <div className="flex items-center gap-1 my-3 text-lg font-semibold">
              <p>PG For Girls In Sector 51</p>
              {/* <HiExternalLink className="text-blue-500 text-lg" /> */}
            </div>
            <div className=" flex gap-2">
              {/* Location */}
              <p className="text-gray-500 text-sm flex items-center mb-3">
                opposite Ravi Women Hospital Near HP petrol pump A48, Sector 51
                {/* <FaMapMarkerAlt className="mx-1 " /> */}
              </p>
              <a href="#" className="text-blue-500 text-sm underline">
                Explore Nearby
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <main className="flex flex-col lg:flex-row w-full max-w-5xl">
          {/* Image Section */}
          <div className="w-full lg:w-[40%]">
            <div className=" h-auto w-full flex relative  overflow-hidden">
              <Image
                alt="Room preview"
                src={images?.[count]}
                height={500}
                width={500}
                className="h-[170px] w-full  md:w-full md:h-72 lg:h-[344px] xl:h-[316px]"
              />
              <p className=" absolute right-1 bottom-1 bg-black bg-opacity-50  px-1 rounded-sm">{count+1}/5</p>
            </div>
          </div>

          {/* Boxes Section */}
          <div className="w-full lg:w-[60%] xl:h-[348px]">
            <div className="bg-white">
              <div className="flex  justify-around p-4  text-center text-sm">
                <div className="px-1 md:px-0">
                  <p className="text-sm text-gray-500">Deposit</p>
                  <p className="text-base md:text-lg  font-semibold">₹9,000</p>
                </div>
                <div className="w-0.5 bg-slate-300"></div>
                <div className="">
                  <p className="text-sm text-gray-500"> Available Room Type</p>
                  <p className="text-base md:text-lg  font-semibold">
                    Single and Shared
                  </p>
                </div>
                <div className="w-0.5 bg-slate-300"></div>
                <div className=" px-1 md:px-0">
                  <p className="text-sm text-gray-500">Rent/Month</p>
                  <p className="text-base md:text-lg  font-semibold">₹9,000</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <hr />
            <div className="flex-1 flex flex-col justify-between md:p-4 bg-white">
              <div className="w-full flex border  border-gray-200 flex-col gap-2">
                <div className="m-1 border">
                  <div className="flex mx-3 my-2">
                    <Link
                      href="/room"
                      className="flex items-center gap-2 w-1/2"
                    >
                      <FaUserGraduate className="text-gray-600" />
                      <div className=" flex flex-col gap-1 mx-2">
                        <p className="text-sm md:text-lg  font-semibold">
                          Any
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">
                          Preferred Tenants
                        </p>
                      </div>
                    </Link>
                    <div className=" w-0.5 bg-slate-200"></div>
                    <Link
                      href="/room"
                      className="flex items-center gap-2 ml-4 w-1/2"
                    >
                      <FaCalendarAlt className="text-gray-600" />
                      <div className=" flex flex-col gap-1 mx-2">
                        <p className="text-sm  md:text-lg  font-semibold">
                          14 Days Ago
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">Posted On</p>
                      </div>
                    </Link>
                  </div>
                  <hr />

                  <div className="flex mx-3 my-2">
                    <Link
                      href="/room"
                      className="flex items-center gap-2 w-1/2"
                    >
                      <div className="text-gray-600">🍴</div>
                      <div className=" flex flex-col gap-1 mx-2">
                        <p className="text-sm md:text-lg  font-semibold">
                          Breakfast, Dinner
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">Food Facility</p>
                      </div>
                    </Link>
                    <div className=" w-0.5 bg-slate-200"></div>
                    <Link
                      href="/room"
                      className="flex items-center gap-2 w-1/2 ml-4"
                    >
                      <div className="text-gray-600">⏰</div>
                      <div className=" flex flex-col gap-1 mx-2">
                        <p className="text-sm md:text-lg  font-semibold">
                          Not Provided
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">
                          Gate Closing Time
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <button
                className="w-full mt-4 bg-red-400 px-2 py-2 rounded"
                onClick={() => {
                  setOwenerDetailsPopUp(true);
                }}
              >
                GetOwnerDetails1
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
