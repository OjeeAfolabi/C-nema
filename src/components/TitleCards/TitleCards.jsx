import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link, useNavigate } from "react-router-dom";
import Cnema from "../CnemaLoader/Cnema";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const [loaderid, setLoaderid] = useState(null);
  const cardsRef = useRef();
  const navigate = useNavigate();

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

  const handleMovieClick = (id) => {
    setLoaderid(id);
    setTimeout(() => {
      setLoaderid(null);
      navigate(`/player/${id}`);
    }, 2000);
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
      className="title-cards mt-[50px] mb-[30px]
"
    >
      <h2 className="mb-2 text-[20px]">{title ? title : "Popular on C-Nema"}</h2>
      <div ref={cardsRef} className="flex gap-2.5 card-list overflow-x-scroll">
        {apiData.map((card, index) => (
          <div
            className="relative shrink-0 text-white"
            key={index}
            onClick={() => handleMovieClick(card.id)}
          >
            <img
              className="w-60 rounded-sm cursor-pointer"
              src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
              alt=""
            />
            <p className="absolute bottom-2.5 right-2.5 text-[16px]">
              {card.original_title}
            </p>
          </div>
        ))}
      </div>
      {loaderid && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
          <Cnema />
        </div>
      )}
    </div>
  );
};

export default TitleCards;
