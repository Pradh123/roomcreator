import { useState } from "react";

const OtpPopup=({setOtpPopup})=> {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = Array(6).fill(null).map(() => useState(null));

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs[index + 1][0]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1][0]?.focus();
    }
  };

  const handleSubmit = () => {
    if(otp.join("").length<6){
        return alert("otp is not correct ");
    }
    console.log("opt is here as ---> ",otp.join(""))
  };



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold text-center">Enter OTP</h2>
        <div className="flex justify-center gap-2 my-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs[index][0] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Verify
        </button>
        <button
         onClick={()=>setOtpPopup(false)}
          className="w-full mt-2 text-gray-500 hover:text-gray-700 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default OtpPopup

