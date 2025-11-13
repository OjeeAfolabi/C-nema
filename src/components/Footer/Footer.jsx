import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer py-[30px] px-[4%] max-w-[1000px] mx-auto">
      <div className="footer-icons flex gap-5 my-10">
        <img className="w-[30px] cursor-pointer" src={youtube_icon} alt="" />
        <img className="w-[30px] cursor-pointer" src={twitter_icon} alt="" />
        <img className="w-[30px] cursor-pointer" src={instagram_icon} alt="" />
        <img className="w-[30px] cursor-pointer" src={facebook_icon} alt="" />
      </div>
      <ul className="grid gap-[15px] mb-[30px] list-none grid-cols-4">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <span className="flex items-center gap-1">
        <Copyright className="text-gray-500" size={14} />
        <p className="text-gray-500 text-[14px]">2025 Netflix Clone, Inc.</p>
      </span>
    </div>
  );
};

export default Footer;
