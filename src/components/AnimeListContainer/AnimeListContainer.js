import React from "react";
import useCorrectDate from "../../hooks/useCorrectDate";
import "./AnimeListContainer.css";

const AnimeListContainer = ({
  title,
  bannerImg,
  coverImg,
  description,
  startDate,
}) => {
  const correctStartDate = useCorrectDate(startDate);

  return (
    <div
      className="anime-list-container-bg-color"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div
        className="alc-cover-img"
        style={{
          backgroundImage: `url(${coverImg})`,
        }}
      ></div>
      <div className="anime-list-container">
        <div className="alc-data">
          <h2 className="alc-title">{title}</h2>
          <div className="alc-description">
            {description["en"] !== null && description["en"] !== "" ? (
              <p>{description["en"]}</p>
            ) : (
              <p>{description["it"]}</p>
            )}
          </div>
          <div className="alc-details">
            <p>Started: {correctStartDate}</p>
            <p>Current status: Airing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeListContainer;
