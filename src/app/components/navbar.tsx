"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleCartClick } = useShoppingCart();
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
          <div className="text-xl md:text-2xl w-38 text-nowrap bg-white  font-semibold">Brands Bazar</div>

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
            } absolute z-10 top-16 left-0 w-full bg-white shadow-lg mt-12 lg:relative lg:flex lg:top-auto lg:left-auto lg:shadow-none`}
          >
            <div className="md:flex relative bottom-6 -right-6 md:items-center md:space-x-8">
              <button>
                <Link
                  href="/"
                  className="block py-2 px-4 text-[#737373]  font-bold hover:text-blue-500"
                >
                  Home
                </Link>
              </button>
              <Link
                href="/shop"
                className="block py-2 px-4 text-[#737373]  font-bold hover:text-blue-500"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="block py-2 px-4 text-[#737373] font-bold hover:text-blue-500"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block py-2 px-4 text-[#737373] font-bold hover:text-blue-500"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button onClick={() => handleCartClick()}>
                <ShoppingBag />
              </button>
            </div>
            <div>
              <Button>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
