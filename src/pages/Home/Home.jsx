import React from "react";
import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";

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
        <div className="absolute w-full pl-[6%] bottom-0 " >
          <img src={hero_title} alt="" />
          <p>
            Discovering his ties to a secret ancient order, a young man living 
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
