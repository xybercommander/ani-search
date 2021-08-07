import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AnimeList from "./pages/AnimeList";
import TopBackground from "./components/TopBackground/TopBackground";

function App() {
  return (
    <div className="App">
      <TopBackground />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/anime-list/:name" component={AnimeList} />
    </div>
  );
}

export default App;
