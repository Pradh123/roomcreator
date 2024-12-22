import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <header className="z-50 sticky top-0  h-[10vh]  border border-blue-500">
      <div className="flex flex-wrap items-center justify-between p-4 bg-white shadow-sm border-b">
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <img src={"./logo.svg"} alt="NoBroker" className="h-8" />
          </Link>
          <select className="ml-4 text-gray-700 border-none focus:outline-none">
            <option value="pg/hostel">PG/Hostel</option>
          </select>
        </div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <Link
            href="/admin/sign-up"
            className=" bg-[#009587] px-4 mx-8 py-1 rounded-md hover:bg-[#007a6f] "
          >
            Post Your Room
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
