import Header from "@/components/Header/Header";
import Image from "next/image";
import React, { useState } from "react";
const UserAdminForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res?.ok) {
      alert("signup successfully");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex mt-3 md:mt-10 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white md:shadow-md rounded-2xl w-full max-w-4xl">
          <div className="hidden md:block md:mt-4">
            <Image
              src="/assets/room.jpeg"
              alt="Plant and cozy space"
              className="object-cover w-full h-full"
              width={500}
              height={500}
            />
          </div>
          <div className="p-8 flex flex-col max-w-lg text-center justify-center bg-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-3 md:mb-4 text-center">
              Join Us Today!
            </h2>
            <p className="text-gray-600 text-sm mb-3 md:mb-6 text-center">
             
                Log in to access your account
               
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white font-semibold py-2 rounded-lg  focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdminForm;

