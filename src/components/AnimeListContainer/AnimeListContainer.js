import React from "react";
import useCorrectDate from "../../hooks/useCorrectDate";
import GenreChip from "../GenreChip/GenreChip";
import "./AnimeListContainer.css";

const AnimeListContainer = ({
  title,
  bannerImg,
  coverImg,
  description,
  startDate,
  status,
  genre,
}) => {
  const correctStartDate = useCorrectDate(startDate);
  const genreText1 = genre[0];
  const genreText2 = genre[1];
  const animeStatus = (status) => {
    if (status === 0) return "Finished";
    else if (status === 1) return "Airing";
    else if (status === 2) return "Not yet released";
    else if (status === 3) return "Cancelled";
  };

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
            <div className="alc-left-data">
              <p>Started: {correctStartDate}</p>
              <p>Status: {animeStatus(status)}</p>
            </div>
            <div className="alc-genres">
              <GenreChip genreText={genreText1} />
              <GenreChip genreText={genreText2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeListContainer;
