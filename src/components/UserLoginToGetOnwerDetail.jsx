// import { MdContactPhone } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import {useEffect, useState } from "react";
// import { useDispatch} from "react-redux";
// import { formClose} from "@/store/signUpSlice";
// export const OwnerDetails = () => {
//  const [number,setNumber]=useState("")
//  const dispatch=useDispatch();
//   useEffect(() => {
//     document.body.classList.add("overflow-hidden");
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, []);
//   const handleSubmit=()=>{
//     dispatch(formClose());
//   }
//   console.log("entered number is here --> ",number);
//   return (
//     <>
//       {/* Background overlay */}
//       <div className="fixed inset-0 bg-black bg-opacity-50 sha z-50"></div>

//       {/* Popup container */}
//       <div className="fixed inset-0 flex items-center justify-center z-50">
//         <div className="relative bg-white w-full max-w-xl p-4 flex rounded-lg shadow-lg">
//           {/* Close button */}
//           <RxCross2
//             className="absolute right-3 top-3 text-[20px] font-semibold cursor-pointer"
//             onClick={() => {
//               dispatch(formClose());
//             }}
//           />
//           {/* Left section */}
//           <div className="bg-slate-200 w-[40%] flex flex-col  h-[490px] gap-[20px] rounded-l-lg p-5">
//             <MdContactPhone className="w-[100px] h-[100px]" />
//             <p>Get Owner Details</p>
//             <ul className="flex flex-col gap-3">
//               <li>✓ 100% genuine</li>
//               <li>✓ Zero Brokerage</li>
//               <li>✓ New Listing every day</li>
//             </ul>
//           </div>

//           {/* Right section */}
//           <div className="w-[60%] h-[490px] gap-[20px] p-5">
//             <section className="flex flex-col gap-4 w-full">
//               <label
//                 htmlFor="phone number"
//                 className="text-[20px] font-semibold text-center"
//               >
//                 Enter Phone Number to continue
//               </label>
//               <input
//                 type="text"
//                 value={number}
//                 onChange={(e)=>setNumber(e.target.value)}
//                 placeholder="Enter Mobile Number"
//                 className="outline-none border-2 border-t-0 border-l-0 border-r-0 border-red-500 w-full p-2"
//               />
//               <button onClick={handleSubmit} className="px-6 py-2 bg-red-500 ">
//               Get Owner Details
//               </button>

//             </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import { MdContactPhone } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formClose } from "@/store/signUpSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export const OwnerDetails = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleChange = (e) => {
    const input = e.target.value;

    // Allow only numbers
    if (/^\d*$/.test(input)) {
      setNumber(input);

      // Validate length (assuming 10 digits for a mobile number)
      if (input.length === 10) {
        setError("");
      } else if (input.length > 0 && input.length !== 10) {
        setError("Mobile number must be 10 digits.");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = () => {
    dispatch(formClose());
  };

  return (
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 transition-opacity"></div>

      {/* Popup container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
          {/* Close button */}
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className="absolute right-4 top-4 text-gray-500 hover:text-red-500 text-2xl cursor-pointer transition-colors"
            onClick={() => dispatch(formClose())}
          />

          <div className="flex flex-col  md:flex-row">
            {/* Left section */}
            <div className="bg-red-500 h-[390px] text-white md:w-2/5 flex flex-col items-center justify-center gap-5 p-6 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              <MdContactPhone className="w-20 h-20 animate-bounce" />
              <p className="text-lg font-bold text-center">Get Owner Details</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 100% Genuine Listings</li>
                <li>✓ Zero Brokerage Fees</li>
                <li>✓ New Listings Daily</li>
              </ul>
            </div>

            {/* Right section */}
            <div className="w-full md:w-3/5 p-6 flex flex-col  pt-16 space-y-5">
              <h2 className="text-2xl font-semibold pb-5 text-center text-gray-800">
                Enter Your Phone Number
              </h2>

              {/* <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Mobile Number"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none transition-shadow"
              /> */}

              <input
                type="text"
                value={number}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                maxLength={10}
                className={`border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:ring-1 ${
                  error ? "focus:ring-red-500" : "focus:ring-red-500"
                } focus:outline-none transition-shadow`}
              />
              {error && <span className="text-red-500 text-sm">{error}</span>}
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-red-500 text-white text-lg font-medium rounded-lg hover:bg-red-600 transition-transform transform hover:scale-95"
              >
                Get Owner Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
