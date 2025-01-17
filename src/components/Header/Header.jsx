import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="z-50 sticky top-0 h-[12vh] border-b bg-white shadow-md">
      <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Indian Room Logo"
              className="h-10 w-auto"
              height={40}
              width={120}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/admin/sign-up"
            className="bg-[#009587] text-white px-4 py-2 rounded-md hover:bg-[#007a6f] transition"
          >
            Post Your Room
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col items-start p-4 space-y-2">
            <Link
              href="/admin/sign-up"
              className="w-full text-center bg-[#009587] text-white px-4 py-2 rounded-md hover:bg-[#007a6f] transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Post Your Room
            </Link>
            <div className="flex justify-center w-full mt-2"></div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
