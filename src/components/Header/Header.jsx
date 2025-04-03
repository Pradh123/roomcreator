// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import TopHeader from "./TopHeader";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <TopHeader />
//     <header className="z-50 sticky top-0 h-[12vh] border-b bg-white shadow-md">
//       <div className="flex items-center justify-between md:p-4 p-2 max-w-screen-xl mx-auto">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//             <Image
//               src="/logo.png"
//               alt="Indian Room Logo"
//               className="h-10 w-auto"
//               height={40}
//               width={120}
//               priority
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link
//             href="/admin/sign-up"
//             className=" bg-[#009587] text-white px-4 py-2 rounded-md hover:bg-[#007a6f] transition"
//           >
//             Post Your Room
//           </Link>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden flex items-center text-gray-700"
//           onClick={toggleMobileMenu}
//         >
//           <FontAwesomeIcon
//             icon={isMobileMenuOpen ? faTimes : faBars}
//             className="h-6 w-6"
//           />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg border-t">
//           <nav className="flex flex-col items-start p-4 space-y-2">
//             <Link
//               href="/admin/sign-up"
//               className="w-full text-center bg-[#009587] text-white px-4 py-2 rounded-md hover:bg-[#007a6f] transition"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Post Your Room
//             </Link>
//             <div className="flex justify-center w-full mt-2"></div>
//           </nav>
//         </div>
//       )}
//     </header>
//     </>
//   );
// };

// export default Header;


import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser, faXmark, faPhone, } from "@fortawesome/free-solid-svg-icons";
import TopHeader from "./TopHeader";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TopHeader />
       <div className="z-50 sticky top-0 w-full h-14 bg-white shadow-xl text-black flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="lg:w-[35%] w-full flex items-center md:gap-5 gap-3">
          <Image
            className="w-12 h-12 object-cover"
            src="/assets/Lo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <h2 className="text-xl font-bold text-blue-700">Indian Rooms</h2>
        </div>
       
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-around items-center w-[60%] font-medium">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="/about-us" className="hover:text-blue-700">About</Link>
          <Link href="/contact-us" className="hover:text-blue-700">Contact</Link>
          <Link href="/query" className="hover:text-blue-700">Query</Link>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          {/* <FontAwesomeIcon
            icon={faUser}
            className="cursor-pointer"
          /> */}
          <Link href="/admin/sign-up"
            className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300"
          >
              Post Your Room
          </Link>
        </div>
        {/* Hamburger Icon */}
        <div className="lg:hidden" 
          onClick={handleToggle}
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="h-6 w-6 text-[28px] text-blue-700 cursor-pointer"
            />
          ) : (
            <div className="space-y-1.5 cursor-pointer">
              <div className="bg-blue-700 w-5 h-1"></div>
              <div className="bg-blue-700 w-5 h-1"></div>
              <div className="bg-blue-700 w-5 h-1"></div>
            </div>
          )}
        </div>
        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${isOpen ? "block" : "hidden"} w-full h-auto absolute left-0 top-14 bg-gray-100 text-black px-7 pt-3 pb-7 flex flex-col gap-3 font-medium`}
        > 
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="/about-us" className="hover:text-blue-700">About</Link>
          <Link href="/contact-us" className="hover:text-blue-700">Contact</Link>
          <Link href="/query" className="hover:text-blue-700">Query</Link>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          {/* <div>
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer mr-1"
            />
            <span onClick={() => setLoginPopup(true)} className="cursor-pointer">Login</span>
          </div> */}
          <Link href="/admin/sign-up"
            className="text-center bg-blue-700 text-white px-4 py-2 w-full rounded-md hover:bg-blue-500 transition-colors duration-300"
          >
              Post Your Room
          </Link>         
          <Link href="https://wa.me/8084863546" target='_blank' className="text-center bg-green-500 text-white px-4 py-2 w-full rounded-md hover:bg-green-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
          </Link>
          <Link href="tel:+918084863546" target='_blank' className="text-center bg-blue-700 text-white px-4 py-2 w-full rounded-md hover:bg-blue-500 transition-colors duration-300">
            <FontAwesomeIcon icon={faPhone} /> Call Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;







