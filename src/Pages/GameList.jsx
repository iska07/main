import "../Style.css";
import movie from "../movie.json";
import { useState, useEffect } from "react";

function GameList() {
  const link = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("GET https://www.freetogame.com/api/games")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="main-cont">
          <h1>Best Free to Play Games for PC and Browser in 2021!</h1>
          <span>351 free-to-play games found in our list!</span>
          <div className="mt-4">
              <div className="game-card">
                  <div className="card">
                      <div className="image-wrapper"></div>
                      <span></span>
                      <video src=""></video>
                      <a href=""></a>
                  </div>
              </div>
          </div>
        </div>
        <div className="card-list"></div>
      </div>
    </div>
  );
}

export default GameList;
