"use client";
import Image from "next/image";
import mayaLogo from "../../../assents/Logo.png";
import searchLogo from "../../../assents/NavBar/searchLogo.png";

import userLogo from "../../../assents/NavBar/userLogo.png";
import cartLogo from "../../../assents/NavBar/cartLogo.png";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full relative bg-primary text-gray-100 body-font shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="mx-auto relative md:px-24 w-full h-[44px] flex justify-between items-center  px-5">
        {/* Site logo and Name */}
        <Image
          className="w-[100px] h-[24px]"
          src={mayaLogo}
          alt="Maya Logo"
        ></Image>
        {/* Navbar */}
        <nav className="hidden md:ml-auto flex-1 md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <a href="#link" className="mr-8 hover:text-gray-300">
            Solutions
          </a>
          <a href="#link" className="mr-8 hover:text-gray-300">
            Prices
          </a>
          <a href="#link" className="mr-8 hover:text-gray-300">
            About
          </a>
          <a href="#link" className="mr-8 hover:text-gray-300">
            Contact
          </a>
        </nav>
        {/* Avatar */}
        <div className="hidden md:flex justify-between w-[10%]  sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <Image
            src={searchLogo}
            className="size-[18px]"
            alt="search logo"
          ></Image>
          <Image src={cartLogo} className="size-[18px]" alt="user logo"></Image>
          <Image src={userLogo} className="size-[18px]" alt="cart logo"></Image>
        </div>
        {/* Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset "
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full absolute top-11 z-10 flex flex-col py-4 px-3  bg-gray-900 text-base transition-all uppercase text-center font-semibold">
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Solutions
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Prices
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Contact
          </a>

          <div className="flex justify-center gap-6">
            <Image
              src={searchLogo}
              className="size-[18px]"
              alt="search logo"
            ></Image>
            <Image
              src={cartLogo}
              className="size-[18px]"
              alt="user logo"
            ></Image>
            <Image
              src={userLogo}
              className="size-[18px]"
              alt="cart logo"
            ></Image>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
