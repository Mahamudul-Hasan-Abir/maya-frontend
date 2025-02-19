"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import mayaLogo from "../../../assents/Logo.png";
import searchLogo from "../../../assents/NavBar/searchLogo.png";
import cartLogo from "../../../assents/NavBar/cartLogo.png";
import AuthComponent from "../AuthComponent/AuthComponent";
import { useCart } from "@/Context/CartContext/CartContext";
const NavBar = () => {
  const { toggleCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <header className="w-full relative bg-[#004B47] text-gray-100 body-font shadow-sm">
      <div className="mx-auto relative md:px-24 w-full h-[44px] flex justify-between items-center px-5">
        <Link href={"/"}>
          <Image
            className="w-[100px] h-[24px]"
            src={mayaLogo}
            alt="Maya Logo"
          />
        </Link>

        <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <Link href="/search" className="mr-8 hover:text-gray-300">
            Shop
          </Link>
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

        {/* Search and Cart Icons */}
        <div className="hidden md:flex justify-between w-[10%] sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <Image src={searchLogo} className="size-[20px] " alt="search logo" />
          <Image
            onClick={toggleCart}
            src={cartLogo}
            className="size-[18px]"
            alt="cart logo"
          />
          <AuthComponent isOpen={isAuthOpen} onClose={setIsAuthOpen} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md focus:ring-2 focus:ring-inset"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-8 w-8 text-gray-300 hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full absolute top-11 z-10 flex flex-col py-4 px-3 bg-gray-900 text-center text-base uppercase font-semibold">
          <Link
            href="/allproducts"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Products
          </Link>
          <a
            href="#link"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Prices
          </a>
          <a
            href="#link"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#link"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Contact
          </a>

          <div className="flex justify-center gap-6">
            <Image src={searchLogo} className="size-[18px]" alt="search logo" />
            <Image src={cartLogo} className="size-[18px]" alt="cart logo" />
            <AuthComponent isOpen={isAuthOpen} onClose={setIsAuthOpen} />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
