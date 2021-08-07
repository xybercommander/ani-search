import React from "react";
import "./AnimeListContainer.css";

const AnimeListContainer = ({ title }) => {
  return (
    <div className="anime-list-container-bg-color">
      <div className="anime-list-container">
        <div className="alc-cover-img"></div>
        <div className="alc-data">{title}</div>
      </div>
    </div>
  );
};

export default AnimeListContainer;
