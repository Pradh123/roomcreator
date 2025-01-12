// import { formOpen } from "@/store/signUpSlice";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const UserAdminForm = () => {
//   const [formType, setFormType] = useState("signup");
//   const [showPass, setShowPass] = useState(false);
//   const router = useRouter();
//   const toggle = useSelector((store) => store.signup.togle);
//   const dispatch = useDispatch();
//   console.log("togle", toggle);
//   useEffect(() => {
//     if (toggle) {
//       router.push("/admin");
//     } else {
//       router.push("/admin/sign-up");
//     }
//   }, [toggle]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(formOpen());
//   };

//   return (
//     <div className="flex items-center justify-center mt-8">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <div className="flex justify-between items-center mb-4">
//           {formType === "signup" && (
//             <h2 className="text-2xl font-semibold text-[#fd3752]">
//               Registration Form
//             </h2>
//           )}
//           {formType === "signin" && (
//             <h2 className="text-2xl font-semibold text-[#fd3752]">
//               Login Form
//             </h2>
//           )}
//         </div>
//         <form onSubmit={handleSubmit}>
//           {formType === "signup" && (
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
//               />
//             </div>
//           )}
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email address"
//               className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
//             />
//           </div>
//           {formType === "signup" && (
//             <>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Country"
//                   className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Phone"
//                   className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
//                 />
//               </div>
//             </>
//           )}
//           <div className="mb-4 relative">
//             <input
//               type={showPass ? "text" : "password"}
//               placeholder="Password"
//               className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPass(!showPass)}
//               className="absolute right-2 top-2 text-gray-500"
//             >
//               {showPass ? "Hide" : "Show"}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#fd3752] text-white py-2 rounded-lg hover:bg-[#791b27]"
//           >
//             {formType === "signup" ? "CREATE ACCOUNT" : "LOGIN"}
//           </button>
//         </form>
//         {formType === "signup" && (
//           <div className="text-center flex gap-5 text-gray-400 text-sm mt-4">
//             <p>Already have an account?</p>
//             <span
//               onClick={() => setFormType("signin")}
//               className="text-[#fd3752] cursor-pointer"
//             >
//               Log in
//             </span>
//           </div>
//         )}
//         {formType === "signin" && (
//           <div className="text-center flex gap-5 text-gray-400 text-sm mt-4">
//             <p>Create an account?</p>
//             <span
//               onClick={() => setFormType("signup")}
//               className="text-[#fd3752] cursor-pointer"
//             >
//               Register
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserAdminForm;

import Image from "next/image";
import React, { useState } from "react";

const UserAdminForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      console.log("Signup Data:", formData);
      alert("data submmited ");
    } else {
      console.log("Login Email:", formData.email);
      console.log("Login Password:", formData.password);
    }
  };

  return (
    <div className="flex h-[90vh]  items-center justify-center">
      {/* Centering the container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-md rounded-2xl w-full max-w-4xl">
        {/* Limiting max width */}
        {/* Left Section - Image */}
        <div className="hidden lg:block">
          <Image
            src="/assets/room.jpeg"
            alt="Plant and cozy space"
            className="object-cover w-full h-full"
            width={500}
            height={500}
          />
        </div>
        {/* Right Section - Form */}
        <div className="p-8 flex flex-col max-w-lg text-center justify-center bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {isLogin ? "Welcome Back!" : "Join Us Today!"}
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            {isLogin
              ? "Log in to access your account"
              : "Create an account in a few easy steps"}
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                {/* First Name and Last Name */}
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* Country */}
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={isLogin ? "Password" : "Create Password"}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Terms and Conditions */}
            {!isLogin && (
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" required className="" />
                <label htmlFor="terms" className="text-gray-600 text-sm">
                  I agree to the terms and privacy policy
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white font-semibold py-2 rounded-lg  focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAdminForm;
