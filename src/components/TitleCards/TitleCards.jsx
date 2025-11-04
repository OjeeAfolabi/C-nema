import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";
// import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmE5MjA1NDJlZWEzYzIxMTI4MTVhMjA2NzA4MjhkOCIsIm5iZiI6MTc2MjIxOTU0My43NDcsInN1YiI6IjY5MDk1NjE3Y2EzOTRiY2NiOGRiOTAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HS5lxH_ukkTnm6zkm_RamhTa6DNiLw9_FzZWLyA6RSY",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      className=" mt-[50px] mb-[30px]
"
    >
      <h2 className="mb-2">{title ? title : "Popular on C-Nema"}</h2>
      <div ref={cardsRef} className="flex gap-2.5 card-list overflow-x-scroll">
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="relative shrink-0 text-white" key={index}>
              <img
                className="w-60 rounded-sm cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
                alt=""
              />
              <p className="absolute bottom-2.5 right-2.5">  
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
