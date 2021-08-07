import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "../styles/main-page.css";

const MainPage = () => {
  const [text, setText] = useState("");
  // const [searchedAnime, setSearchedAnime] = useState({});

  // const fetchAnimeDataThroughTitle = async (title) => {
  //   const res = await fetch(`https://api.aniapi.com/v1/anime?title=${title}`);
  //   const data = await res.json();
  //   setSearchedAnime({ data });
  // };

  const handleSubmit = () => {
    // fetchAnimeDataThroughTitle(text);
    console.log("Searching for " + text);
  };

  //-------- UI --------//
  return (
    <div className="main-page">
      <Navbar />
      <h1>Main Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input
          type="text"
          placeholder="Search Anime Name"
          onChange={(e) => setText(e.target.value)}
        />
        <Link
          to={{
            pathname: `/anime-list/${text}`,
          }}
        >
          <input type="submit" value="Submit" />
        </Link>
      </form>
    </div>
  );
};

export default MainPage;
