import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apidata, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const [loading, setLoading] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmE5MjA1NDJlZWEzYzIxMTI4MTVhMjA2NzA4MjhkOCIsIm5iZiI6MTc2MjIxOTU0My43NDcsInN1YiI6IjY5MDk1NjE3Y2EzOTRiY2NiOGRiOTAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HS5lxH_ukkTnm6zkm_RamhTa6DNiLw9_FzZWLyA6RSY",
      },
    };
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results[0]))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleBackClick = () => {
    setExit(true);
    setTimeout(() => {
      const prev = document.referrer;
      if (prev && prev.includes(window.location.origin)) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }, 500);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        onClick={handleBackClick}
        className="absolute top-5 left-5 w-[50px] cursor-pointer"
        src={back_arrow_icon}
        alt="Back"
      />

      <AnimatePresence>
        {!exit && (
          <motion.div
            className="flex flex-col items-center w-full h-full justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {loading ? (
              <p className="text-lg">Loading...</p>
            ) :
            apidata.key ? (
              <iframe
                className="w-[90%] h-[80%] rounded-[10px]"
                src={`https://www.youtube.com/embed/${apidata.key}`}
                title={apidata.name}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <p className="text-lg mt-4">No trailer available</p>
            )}
            <div className="flex items-center justify-between w-[90%] mt-4">
              <p>{apidata.published_at?.slice(0, 10)}</p>
              <p>{apidata.name}</p>
              <p>{apidata.type}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Player;
