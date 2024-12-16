"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SubNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="container mx-auto mt-4 flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Bandage</div>

        {/* Hamburger Menu for Small Screens */}

        <div className="flex gap-3">
         

          <button
            className="block lg:hidden text-[#737373] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-lg mt-12 lg:relative lg:flex lg:top-auto lg:left-auto lg:shadow-none`}
        >
          <div className="md:flex relative bottom-6 -right-6 md:items-center md:space-x-8">
            <a
              href="/"
              className="block py-2 px-4 text-[#737373] font-bold hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="/productlisting"
              className="block py-2 px-4 text-[#737373] font-bold hover:text-blue-500"
            >
            Product
            </a>
            <a
              href="/pricing"
              className="block py-2 px-4 text-[#737373] font-bold hover:text-blue-500"
            >
             Pricing
            </a>
           
            <a
              href="#"
              className="block py-2 px-4 text-[#737373] font-bold hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Right Icons */}
        <div className="hidden sm:flex items-center ">
          <a href="#" className="text-blue-500 w-28 font-bold hover:underline">
            Login
          </a>
          <button className="w-[214px] h-12 bg-blue-500 rounded-lg flex items-center justify-center gap-2 text-white">
            <p>Become a member </p>
            <Image
              src="/btn-arrow.png"
              alt="arrow"
              width={12}
              height={10}
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
