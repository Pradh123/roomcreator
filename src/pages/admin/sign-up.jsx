import Header from "@/components/Header/Header";
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
    <div>
      <Header />

      <div className="flex mt-3 md:mt-10 items-center justify-center">
        {/* Centering the container */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white md:shadow-md rounded-2xl w-full max-w-4xl">
          {/* Limiting max width */}
          {/* Left Section - Image */}
          <div className="hidden md:block md:mt-4">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-3 md:mb-4 text-center">
              {isLogin ? "Welcome Back!" : "Join Us Today!"}
            </h2>
            <p className="text-gray-600 text-sm mb-3 md:mb-6 text-center">
              {isLogin
                ? "Log in to access your account"
                : "Create an account in a few easy steps"}
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  {/* First Name and Last Name */}
                  <div className="flex gap-4 flex-col md:flex-row">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full md:w-1/2 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full md:w-1/2 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {/* Phone */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  {/* Country */}
                  {/* <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                /> */}
                </>
              )}

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={isLogin ? "Password" : "Create Password"}
                className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Terms and Conditions */}
              {!isLogin && (
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" required className="" />
                  <label
                    htmlFor="terms"
                    className="text-gray-600 text-xs md:text-sm"
                  >
                    I agree to the terms and privacy policy
                  </label>
                </div>
              )}
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
    </div>
  );
};

export default UserAdminForm;
