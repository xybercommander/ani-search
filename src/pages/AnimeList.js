import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/anime-list.css";
import { useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";

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
        <div className="anime-list-container">
          <h1>{`Total count of anime found : ${animeData["data"]["documents"].length}`}</h1>
          <p>{JSON.stringify(animeData["data"]["documents"][0])}</p>
        </div>
      )}
    </div>
  );
};

export default AnimeList;
