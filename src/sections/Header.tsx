"use client";

import { useState } from "react";
import Scissors from "../../public/assets/images/scissors.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center h-24 md:h-28 px-6 mb-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Scissors className="w-10 h-10 text-black hover:rotate-12 transition-transform duration-300" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-black uppercase tracking-wide">
          <Link
            href="/#services"
            className="relative group px-2 py-1 hover:text-purple-700  "
          >
            Service & Pricing
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="/#membership"
            className="relative group px-2 py-1 hover:text-purple-700"
          >
            Studio Membership
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="/#contact"
            className="relative group px-2 py-1 hover:text-purple-700"
          >
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            href="/#services"
            className="bg-black text-white rounded-full py-2 px-6 hover:bg-purple-700 hover:shadow-lg transition duration-300"
          >
            Book
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {menuOpen ? (
              <CloseIcon className="w-8 h-8 text-black" />
            ) : (
              <MenuIcon className="w-8 h-8 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg flex flex-col gap-4 px-6 py-4 uppercase font-medium text-black">
          <Link
            href="/#services"
            className="hover:bg-purple-500 hover:text-white transition rounded-full px-4 py-2"
          >
            Service & Pricing
          </Link>
          <Link
            href="/#membership"
            className="hover:bg-purple-500 hover:text-white transition rounded-full px-4 py-2"
          >
            Studio Membership
          </Link>
          <Link
            href="/#contact"
            className="hover:bg-purple-500 hover:text-white transition rounded-full px-4 py-2"
          >
            Contact Us
          </Link>
          <Link
            href="/#services"
            className="bg-black text-white rounded-full py-2 px-6 text-center hover:bg-purple-500 transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};
