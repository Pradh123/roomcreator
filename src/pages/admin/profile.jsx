import Layout from "@/components/Layout/Layout";
import React from "react";

const profile = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen overflow-x-hidden">
        {/* Cover Image */}
        <div className="relative">
          <img
            src="https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg"
            className="w-full h-64 object-cover rounded-t-lg"
            alt="Cover"
          />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile Picture"
            className="w-44 h-44 rounded-full border-4 border-white absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          />
        </div>

        {/* Profile Details */}
        <div className="my-16 text-center">
          <h1 className="text-2xl font-bold">Pradhumn Verma</h1>
          <p className="text-gray-500">Advisor and Consultant at Stripe Inc.</p>
        </div>

        {/* Additional Sections */}
        <div className="px-4">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold">About</h2>
            <p>
              Experienced advisor and consultant with a passion for helping
              businesses grow and succeed.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <p>Email: kevin.smith@example.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default profile;
