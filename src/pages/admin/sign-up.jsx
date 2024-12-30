import { formOpen } from "@/store/signUpSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserAdminForm = () => {
  const [formType, setFormType] = useState("signup");
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const toggle = useSelector((store) => store.signup.togle);
  const dispatch = useDispatch();
console.log("togle",toggle)
  useEffect(() => {
    if (toggle) {
      router.push("/admin");
    } else {
      router.push("/admin/sign-up");
    }
  }, [toggle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(formOpen());
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          {formType === "signup" && (
            <h2 className="text-2xl font-semibold text-[#fd3752]">
              Registration Form
            </h2>
          )}
          {formType === "signin" && (
            <h2 className="text-2xl font-semibold text-[#fd3752]">
              Login Form
            </h2>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          {formType === "signup" && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
              />
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
            />
          </div>
          {formType === "signup" && (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
                />
              </div>
            </>
          )}
          <div className="mb-4 relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#fd3752] text-white py-2 rounded-lg hover:bg-[#791b27]"
          >
            {formType === "signup" ? "CREATE ACCOUNT" : "LOGIN"}
          </button>
        </form>
        {formType === "signup" && (
          <div className="text-center flex gap-5 text-gray-400 text-sm mt-4">
            <p>Already have an account?</p>
            <span
              onClick={() => setFormType("signin")}
              className="text-[#fd3752] cursor-pointer"
            >
              Log in
            </span>
          </div>
        )}
        {formType === "signin" && (
          <div className="text-center flex gap-5 text-gray-400 text-sm mt-4">
            <p>Create an account?</p>
            <span
              onClick={() => setFormType("signup")}
              className="text-[#fd3752] cursor-pointer"
            >
              Register
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAdminForm;
