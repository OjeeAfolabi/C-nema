import React, { useEffect, useState, useParams } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const [apidata, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmE5MjA1NDJlZWEzYzIxMTI4MTVhMjA2NzA4MjhkOCIsIm5iZiI6MTc2MjIxOTU0My43NDcsInN1YiI6IjY5MDk1NjE3Y2EzOTRiY2NiOGRiOTAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HS5lxH_ukkTnm6zkm_RamhTa6DNiLw9_FzZWLyA6RSY",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        className="absolute top-5 left-5 w-[50px] cursor-pointer"
        src={back_arrow_icon}
        alt=""
      />
      <iframe
        className="w-[90%] h-[90%] rounded-[10px] "
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="trailer"
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="flex items-center justify-between w-[90%]">
        <p>{apidata.published_at.slice(0, 10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
};

export default Player;
