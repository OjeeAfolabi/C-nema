import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import usericon from "../../public/netflix-usericon.png";
import caretdown from "../../public/caret_down.svg";
import { Bell, Search } from "lucide-react";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      ref={navRef}
      className="navbar w-full flex justify-between fixed text-[14px] text-[#e5e5e5] z-1  "
    >
      <div className="nav-container flex items-center gap-[50px]">
        <p className="nav-logo text-4xl font-medium bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          C-NEMA
        </p>
        <ul className="flex list-none gap-5 ul-left">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>
      </div>
      <div className="menu-left flex gap-5 items-center">
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
          <div
            className="  absolute top-full right-0 mt-1 w-max bg-[#191919] px-[18px] py-[22px] rounded-sm z-50
    before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3
    opacity-0 scale-95 translate-y-2 pointer-events-none
    transition-all duration-200 ease-out
    group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto
 "
          >
            <p
              onClick={() => {
                logout();
              }}
              className="cursor-pointer  text-[13px] underline "
            >
              Sign Out of C-Nema
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
