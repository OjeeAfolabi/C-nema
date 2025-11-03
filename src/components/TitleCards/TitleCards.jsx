import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title }) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      className=" mt-[50px] mb-[30px]
"
    >
      <h2 className="mb-2">{title ? title : "Popular on C-Nema"}</h2>
      <div ref={cardsRef} className="flex gap-2.5 card-list overflow-x-scroll">
        {cards_data.map((card, index) => {
          return (
            <div className="relative shrink-0" key={index}>
              <img
                className="w-60 rounded-sm cursor-pointer"
                src={card.image}
                alt=""
              />
              <p className="absolute bottom-2.5 right-2.5">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
