"use client";

import { useState } from "react";
import Scissors from "@/assets/images/scissors.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 backdrop-blur-lg ">
      <div className="container mb-7">
        <div className="flex justify-between items-center h-24 md:h-28 px-4">
          {/* Logo */}
          <div className="flex items-center text-base font-bold">
            <Link href="/">
              <Scissors className="w-10 h-10" />
            </Link>
            <span className=" sm:text-sm ml-4">Four Season</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 text-sm whitespace-nowrap">
            <div className="flex gap-4 items-center">
              <Link
                href="/#services"
                scroll={true}
                className="hover:text-purple-700 cursor-pointer "
              >
                Service & Pricing
              </Link>
              <div className="hover:text-purple-700 cursor-pointer "> Studio Membership</div>
              <div className="hover:text-purple-700 cursor-pointer " >Contact Us</div>
              <div className="bg-white text-black rounded-full cursor-pointer  py-1.5 px-4 hover:bg-purple-700 hover:text-white">
                Book Now
              </div>
            </div>
          </div>

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
          <div className="md:hidden flex flex-col gap-4 text-sm px-4 pb-4 ">
            <div className="  hover:bg-purple-500 cursor-pointer rounded-lg p-2 hover:text-white  " >Service & Pricing</div>
            <div className="  hover:bg-purple-500 cursor-pointer rounded-lg p-2 hover:text-white       "   >Location</div>
            <div className="  hover:bg-purple-500 cursor-pointer rounded-lg p-2  hover:text-white    "  >Studio Membership</div>
            <div className="  hover:bg-purple-500 cursor-pointer rounded-lg p-2 hover:text-white     "  >Contact Us</div>
            <div  className="bg-black text-white rounded-full py-1.5 px-4 text-center  hover:bg-purple-500 cursor-pointer    ">
              Book Now
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
