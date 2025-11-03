import React from "react";
import "./Navbar.css";
import logo from "../../public/my-c-nemalogo.png";
import usericon from "../../public/netflix-usericon.png";
import caretdown from "../../public/caret_down.svg";
import { Bell, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar w-full flex justify-between fixed text-[14px] text-[#e5e5e5] z-1   ">
      <div className="flex items-center gap-[50px]">
        <img className="w-10" src={logo} alt="" />
        <ul className="flex lis-none gap-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <Search />
        <p>Children</p>
        <Bell />
        <div className="cursor-pointer group flex items-center gap-2.5 relative">
          <img className="w-[35px]" src={usericon} alt="" />
          <img
            className="filter invert brightness-0 saturate-100"
            src={caretdown}
            alt=""
          />
          <div className="hidden absolute group-hover:block top-full right-0 w-max bg-[#191919] px-[18px] py-[22px] rounded-l-xs z-1 underline ">
            <p className="cursor-pointer  text-[13px]">Sign Out of C-Nema</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
