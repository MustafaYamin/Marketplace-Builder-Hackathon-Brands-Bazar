"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#252B42] h-auto py-2 flex justify-center md:justify-between items-center text-white text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Image alt="phone" src="/phone-icon.png" width={15} height={15} />
              <span className="ml-2">(225) 555-0118</span>
            </span>
            <span className="hidden sm:flex items-center">
              <Image alt="email" src="/email.png" width={15} height={15} />
              <span className="ml-2">michelle.rivera@example.com</span>
            </span>
          </div>
          <span className="text-white">
            Follow Us and get a chance to win 80% off
          </span>

          {/* Right Section */}
          <div className="hidden md:flex gap-3 items-center">
            <div className="flex items-center gap-2">
              <p className="font-bold">Follow Us:</p>
              <Image alt="Instagram" src="/insta.png" width={15} height={15} />
              <Image alt="YouTube" src="/YT.png" width={15} height={15} />
              <Image alt="Facebook" src="/fb.png" width={15} height={15} />
              <Image alt="Twitter" src="/Twiter.png" width={15} height={15} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white  py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold">Bandage</div>

          {/* Hamburger Menu for Small Screens */}

          <div className="flex gap-3">
            <Image className="md:hidden" src="/msearch.png" alt="img" width={15} height={15}/>
            <Image className="md:hidden" src="/mcart.png" alt="img" width={15} height={15}/>

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
                Shop
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-[#737373] font-bold hover:text-blue-500"
              >
                About
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-[#737373] font-bold hover:text-blue-500"
              >
                Blog
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
          <div className="hidden sm:flex items-center space-x-4">
            <Image alt="account" src="/account.png" width={20} height={20} />
            <a
              href="#"
              className="text-blue-500 w-48 font-bold hover:underline"
            >
              Login / Register
            </a>
            <Image alt="search" src="/search.png" width={20} height={20} />
            <div className="relative">
              <Image alt="cart" src="/a.png" width={60} height={12} />
            </div>
            <div className=" ">
              <Image alt="wishlist" src="/li.png" width={60} height={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
