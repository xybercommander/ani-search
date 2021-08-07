import React from "react";
import "./AnimeListContainer.css";

const AnimeListContainer = ({ title, bannerImg }) => {
  return (
    <div
      className="anime-list-container-bg-color"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="anime-list-container"
        style={{
          // backgroundColor: "blue",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          // opacity: "0.15",
          // filter: "grayscale(90%)",
          width: "660px",
          height: "200px",
        }}
      >
        <div
          className="alc-cover-img"
          style={{ width: "150px", height: "200px", backgroundColor: "teal" }}
        ></div>
        <div className="alc-data">
          {title}
          {bannerImg === undefined ? <p>No Image found</p> : <p>{bannerImg}</p>}
        </div>
      </div>
    </div>
  );
};

export default AnimeListContainer;
