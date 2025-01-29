import { MdContactPhone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { formClose} from "@/store/signUpSlice";
export const OwnerDetails = () => {
 const [number,setNumber]=useState("")
 const dispatch=useDispatch();
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const handleSubmit=()=>{
    dispatch(formClose());
  }
  console.log("entered number is here --> ",number);
  return (
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 sha z-50"></div>

      {/* Popup container */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative bg-white w-full max-w-xl p-4 flex rounded-lg shadow-lg">
          {/* Close button */}
          <RxCross2
            className="absolute right-3 top-3 text-[20px] font-semibold cursor-pointer"
            onClick={() => {
              dispatch(formClose());
            }}
          />
          {/* Left section */}
          <div className="bg-slate-200 w-[40%] flex flex-col  h-[490px] gap-[20px] rounded-l-lg p-5">
            <MdContactPhone className="w-[100px] h-[100px]" />
            <p>Get Owner Details</p>
            <ul className="flex flex-col gap-3">
              <li>✓ 100% genuine</li>
              <li>✓ Zero Brokerage</li>
              <li>✓ New Listing every day</li>
            </ul>
          </div>

          {/* Right section */}
          <div className="w-[60%] h-[490px] gap-[20px] p-5">
            <section className="flex flex-col gap-4 w-full">
              <label
                htmlFor="phone number"
                className="text-[20px] font-semibold text-center"
              >
                Enter Phone Number to continue
              </label>
              <input
                type="text"
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                placeholder="Enter Mobile Number"
                className="outline-none border-2 border-t-0 border-l-0 border-r-0 border-red-500 w-full p-2"
              />
              <button onClick={handleSubmit}>
              Get Owner Details
              </button>
              
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
