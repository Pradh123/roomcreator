// import React, { useState, useEffect } from "react";

// const GoogleMap = () => {
//   const [mapCode, setMapCode] = useState(null);
//   const handleChange = (e) => {
//     setMapCode(e.target.value);
//   };

//   return (
//     <>
//       {/* <div>Code Render</div> */}
//       <div className="md:grid grid-cols-2 gap-5 items-center">
//         <div className=" mt-5">
//           <textarea
//             value={mapCode}
//             onChange={handleChange}
//             className="p-2 w-full h-80 resize-none border-2 border-gray-400  rounded-md"
//           ></textarea>
//           <div className="md:flex justify-between px-3">
//             <p className="text-xs mb-2">
//               Confirm you Enter width=100% & height=100%
//             </p>
//           </div>
//         </div>
//         <div className="md:mt-0 mt-5">
//           <p className="font-semibold text-sm">Google Map show is here</p>
//           <div
//             className="border-black border w-full h-72 rounded-md overflow-hidden"
//             dangerouslySetInnerHTML={{ __html: mapCode }}
//           ></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GoogleMap;

import React, { useState } from "react";

const GoogleMap = () => {
  const [mapCode, setMapCode] = useState(`
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093716!2d144.95373531531588!3d-37.81627974202106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfc9f29b3%3A0x2b7b1b3bb3b13e4!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1611813531730!5m2!1sen!2sus" 
      width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
    </iframe>`);

  const handleChange = (e) => {
    setMapCode(e.target.value);
  };

  const handleReset = () => {
    setMapCode("");
  };

  return (
    <div className="md:grid grid-cols-2 gap-5 items-center">
      {/* Left Side - Input */}
      <div className="mt-5">
        <textarea
          value={mapCode}
          onChange={handleChange}
          placeholder="Paste your Google Maps embed code here..."
          className="p-2 w-full h-80 resize-none border-2 border-gray-400 rounded-md"
        ></textarea>
        <div className="flex justify-between items-center px-3 mt-2">
          <p className="text-xs text-gray-600">
            Confirm you entered <code>width="100%"</code> &{" "}
            <code>height="100%"</code>
          </p>
          <button
            onClick={handleReset}
            className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600 transition"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Right Side - Preview */}
      <div className="md:mt-0 mt-5">
        <p className="font-semibold text-sm">Google Map preview:</p>
        <div className="border-black border w-full h-[400px] rounded-md overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: mapCode }} />
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
