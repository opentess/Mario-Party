import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import MarioTitle from "../public/MarioTitle.png";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <nav className="flex w-full h-16">
      <div className="flex items-center justify-center  text-[#202023] md:w-full pt-6 pb-4 px-6 mb-2">
        <h1 className=" font-heading text-3xl font-light lg:text-5xl text-gray-200">
          Drink Menu
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
