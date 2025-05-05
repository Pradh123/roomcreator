import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser, faXmark, faPhone, faCircleUser, } from "@fortawesome/free-solid-svg-icons";
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
      <div className="sticky top-0 z-50 w-full h-14 border-b border-teal-700 bg-white/5 backdrop-blur-sm shadow-md text-black flex justify-between items-center md:px-4 px-1">
        {/* Logo Section */}
        <div className="lg:w-[35%] w-full flex items-center md:gap-5 gap-1">
          <Image
            className="w-12 h-12 object-cover"
            src="/assets/Lo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <h2 className="text-xl font-bold text-teal-700">Indian Rooms</h2>
        </div>
       
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-around items-center w-[30%] font-medium">
          <div className=" px-2 py-2   rounded flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faUser} className=" mr-1" />
            <span className="font-medium">Login</span>
          </div>
          <div className=" px-2 py-2  rounded flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faCircleUser} className="mr-1 text-md"/>
            <span className="font-medium">Sign Up</span>
          </div>
          <Link href="/admin/sign-up"
            className="bg-teal-600 text-sm text-white px-4 py-2 rounded-md hover:bg-teal-500 transition-colors duration-300"
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
              className="h-6 w-6 text-[28px] text-teal-700 cursor-pointer"
            />
          ) : (
            <div className="space-y-1.5 cursor-pointer">
              <div className="bg-teal-700 w-5 h-1"></div>
              <div className="bg-teal-700 w-5 h-1"></div>
              <div className="bg-teal-700 w-5 h-1"></div>
            </div>
          )}
        </div>
        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${isOpen ? "block" : "hidden"} w-full h-auto absolute left-0 top-14 bg-gray-100 text-black px-7 pt-3 pb-7 flex flex-col gap-3 font-medium`}
        > 
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <Link href="/about-us" className="hover:text-teal-700">About</Link>
          <Link href="/contact-us" className="hover:text-teal-700">Contact</Link>
          <Link href="/query" className="hover:text-teal-700">Query</Link>
          <div className="flex items-center hover:text-teal-700">
            <FontAwesomeIcon icon={faCircleUser} className="cursor-pointer mr-1 "/>
            <span className="cursor-pointer ">Sign Up</span>
          </div>
          <div className="flex items-center hover:text-teal-700">
            <FontAwesomeIcon icon={faUser} className="cursor-pointer mr-1 " />
            <span className="cursor-pointer ">Login</span>
          </div>
          <Link href="/admin/sign-up"
            className="text-center bg-teal-600 text-white px-4 py-2 w-full rounded-md hover:bg-teal-500 transition-colors duration-300"
          >
              Post Your Room
          </Link>         
          <Link href="https://wa.me/8084863546" target='_blank' className="text-center bg-green-500 text-white px-4 py-2 w-full rounded-md hover:bg-green-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
          </Link>
          <Link href="tel:+918084863546" target='_blank' className="text-center bg-orange-500 text-white px-4 py-2 w-full rounded-md hover:bg-orange-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faPhone} /> Call Us
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header







