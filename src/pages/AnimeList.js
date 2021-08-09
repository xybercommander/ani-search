import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/anime-list.css";
import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import AnimeListContainer from "../components/AnimeListContainer/AnimeListContainer";

const AnimeList = () => {
  const { name } = useParams();
  const {
    data: animeData,
    isPending,
    error,
  } = useFetch(`https://api.aniapi.com/v1/anime?title=${name}`);

  //-------- UI --------//
  return (
    <div className="anime-list">
      <Navbar />
      {isPending && <h2 className="loading">Loading...</h2>}
      {error && <h2>{error}</h2>}
      {animeData && (
        <div className="anime-list-data">
          <div className="anime-list-data-items">
            <div className="anime-list-container-items">
              <h1>{`Total count of anime found : ${animeData["data"]["documents"].length}`}</h1>
              <div className="anime-list-data-grid">
                {animeData["data"]["documents"].map((anime) => (
                  <AnimeListContainer
                    key={anime["anilist_id"]}
                    title={anime["titles"]["en"]}
                    bannerImg={anime["banner_image"]}
                    coverImg={anime["cover_image"]}
                    description={anime["descriptions"]}
                    startDate={anime["start_date"]}
                    status={anime["status"]}
                    genre={anime["genres"]}
                  />
                ))}
              </div>
            </div>
            <div className="full-anime-character"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeList;
