import React, { useState } from "react";
import globe from "../../../assets/images/globe.svg";
import heart from "../../../assets/images/heart-add.svg";
import logo from "../../../assets/images/logo.svg";
import menu from "../../../assets/images/menu.svg";
import cart from "../../../assets/images/shopping-cart.svg";
import times from "../../../assets/images/times.svg";
import DiscountAlert from "../../Home/DiscountAlert";
import Deals from "../../Menu/Deals";
import Destination from "../../Menu/Destination";
import Experience from "../../Menu/Experience";
import MobileMenu from "../../Menu/MobileMenu";
import Month from "../../Menu/Month";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="  sticky top-0 z-50">
      <DiscountAlert />
      <div className="relative px-4 py-4 lg:py-0 shadow-custom bg-white">
        <div className="container mx-auto relative lg:static z-30">
          <div className="flex items-center gap-6  sm:gap-12">
            <a href="#" className="w-[100px] shrink-0">
              <figure>
                <img src={logo} alt="logo" />
              </figure>
            </a>
            <div className="w-full flex gap-5 justify-end lg:justify-between">
              <ul className="hidden lg:flex gap-8 items-center">
                <li className="group ">
                  <a
                    href="#"
                    className="text-lg py-7 text-brand-gray-500 inline-block relative after:absolute  after:w-[30px] after:transition-all after:opacity-0 group-hover:after:opacity-100 after:h-1 after:bg-brand-red after:left-0  after:right-0 after:bottom-5"
                  >
                    Destinations
                  </a>
                  <Destination />
                </li>
                <li className="2xl:relative group">
                  <a
                    href="#"
                    className="text-lg py-7 text-brand-gray-500 inline-block  relative after:absolute  after:w-[30px] after:transition-all after:opacity-0 group-hover:after:opacity-100 after:h-1 after:bg-brand-red after:left-0  after:right-0 after:bottom-5"
                  >
                    By Month
                  </a>
                  <Month />
                </li>
                <li className=" group">
                  <a
                    href="#"
                    className="text-lg py-7 relative text-brand-gray-500 inline-block after:absolute  after:w-[30px] after:transition-all after:opacity-0 group-hover:after:opacity-100 after:h-1 after:bg-brand-red after:left-0  after:right-0 after:bottom-5"
                  >
                    Experiences
                  </a>
                  <Experience />
                </li>
                <li className="2xl:relative group">
                  <a
                    href="#"
                    className="text-lg py-7 text-brand-gray-500 inline-block relative after:absolute  after:w-[30px] after:transition-all after:opacity-0 group-hover:after:opacity-100 after:h-1 after:bg-brand-red after:left-0  after:right-0 after:bottom-5"
                  >
                    Deals
                  </a>
                  <Deals />
                </li>
              </ul>
              <ul className="flex gap-3 sm:gap-6 lg:gap-8 items-center">
                <li className="hidden xl:flex items-center gap-6">
                  <a href="#" className="text-lg text-brand-gray-500">
                    Login
                  </a>
                  <a
                    href="#"
                    className="py-2.5 px-7 rounded-full border border-brand-gray-500 text-lg inline-block text-brand-gray-500 hover:text-white hover:bg-brand-dark transition-all"
                  >
                    Sign up
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-4">
                    <img src={heart} alt="heart" />
                    <span className="hidden lg:block"> Wishlist</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-4">
                    <img src={cart} alt="cart" />
                    <span className="hidden lg:block">Cart</span>
                  </a>
                </li>
                <li className="relative group">
                  <a href="#" className="flex items-center gap-1.5">
                    <img src={globe} alt="globe" />
                    <span> En</span>
                    <svg
                      className="stroke-brand-blue-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul className="right-0 group-hover:opacity-100 group-hover:visible invisible opacity-0 absolute top-8 bg-white w-32 shadow-lg rounded-md">
                    <li className="px-4 py-1.5 hover:bg-gray-50">En</li>
                    <li className="px-4 py-1.5 hover:bg-gray-50">Fr</li>
                    <li className="px-4 py-1.5 hover:bg-gray-50">Bd</li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="lg:hidden w-6"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <img
                      src={menu}
                      className={open ? "hidden" : ""}
                      alt="menu"
                    />
                    <img
                      src={times}
                      alt="times"
                      className={!open ? "hidden" : ""}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <MobileMenu open={open} />
      </div>
    </header>
  );
}
