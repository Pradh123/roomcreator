import Image from "next/image";
import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <header className="z-50 sticky top-0  h-[10vh]  border border-blue-500">
      <div className="flex flex-wrap items-center justify-between p-4  bg-white shadow-sm border-b">
        <div className="flex  items-center flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NoBroker Logo"
              className="h-20 w-20 md:h-10 lg:h-10"
              height={500}
              width={500}
              priority // Optional: For performance optimization
            />
          </Link>
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
