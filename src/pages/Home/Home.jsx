import React from "react";
import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="relative">
        <img
          className="w-full mask-[linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)] "
          src={hero_banner}
          alt=""
        />
        <div className="absolute w-full pl-[6%] bottom-0 ">
          <img
            className="w-[90%] max-w-[420px] mb-[30px]"
            src={hero_title}
            alt=""
          />
          <p className="max-w-[700px] text-[17px] mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="flex gap-2.5 mb-[50px]">
            <button className="hover:bg-[#ffffffbf] border-0 text-black outline-0 py-2 px-5 inline-flex items-center gap-2.5 text-[15px] font-semibold bg-white rounded-sm cursor-pointer">
              <img className="w-[25px]" src={play_icon} alt="" />
              Play
            </button>
            <button className="hover:bg-[#6d6d6e66] bgborder-0 outline-0 py-2 px-5 inline-flex items-center gap-2.5 text-[15px] rounded-sm font-semibold bg-[#6d6d6eb3] text-white ">
              <img className="w-[25px]" src={info_icon} alt="" /> More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="pl-[6%]">
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Only on C-Nema"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"now_playing" } />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
