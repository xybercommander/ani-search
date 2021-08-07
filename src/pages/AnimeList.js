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
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {animeData && (
        <div className="anime-list-data">
          <h1>{`Total count of anime found : ${animeData["data"]["documents"].length}`}</h1>
          {animeData["data"]["documents"].map((anime) => (
            <AnimeListContainer title={anime["titles"]["en"]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeList;
