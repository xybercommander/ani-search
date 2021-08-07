import React from "react";
import "./AnimeListContainer.css";

const AnimeListContainer = ({ title, bannerImg, coverImg, description }) => {
  return (
    <div
      className="anime-list-container-bg-color"
      style={{
        borderRadius: "12px",
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        width: "660px",
        height: "200px",
        zIndex: 2,
        display: "flex",
      }}
    >
      <div
        className="alc-cover-img"
        style={{
          borderRadius: "10px 0 0 10px",
          width: "150px",
          height: "200px",
          backgroundImage: `url(${coverImg})`,
          backgroundSize: "cover",
          opacity: 1,
          zIndex: 1,
        }}
      ></div>
      <div
        className="anime-list-container"
        style={{
          borderRadius: "0 10px 10px 0",
          filter: "grayscale(90%)",
          backgroundColor: "white",
          opacity: "0.9",
        }}
      >
        <div
          className="alc-data"
          style={{
            height: "200px",
            width: "485px",
            padding: "20px 0",
            margin: "0 20px",
          }}
        >
          <h2 className="alc-title" style={{ color: "black" }}>
            {title}
          </h2>
          <div className="alc-description">
            {description["en"] !== null && description["en"] !== "" ? (
              <p>{description["en"]}</p>
            ) : (
              <p>{description["it"]}</p>
            )}
          </div>
          <div className="alc-details">
            <p>Started: 1999-10-20</p>
            <p>Current status: Airing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeListContainer;
