import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/anime-list.css";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

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
      <h1>Anime List Page</h1>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {animeData && (
        <h4>{`Total count of anime found : ${animeData["data"]["documents"].length}`}</h4>
      )}
    </div>
  );
};

export default AnimeList;
