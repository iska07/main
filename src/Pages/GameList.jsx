import "../Style.css";
import { useState, useEffect } from "react";
import Catalog from "./Catalog"
import { Link, useParams } from "react-router-dom";
import { element } from "prop-types";
import movie from "../movie.json"

function GameList() {
  const link = "https://image.tmdb.org/t/p/w500";

  const [catalog, setMovie] = useState([]);

  const { id } = useParams();



  useEffect(() => {
    fetch("https://www.freetogame.com/api/game/ssort-by=alphabetical" + id)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="main-cont">
          <h1>Best Free to Play Games for PC and Browser in 2021!</h1>
          <span>351 free-to-play games found in our list!</span>
          {/* <div className="mt-4">
            <div className="game-card">
              <div className="card">
                <div className="image-wrapper"></div>
                <span></span>
                <video src=""></video>
                <a href=""></a>
              </div>
            </div>
          </div> */}
        </div>

         {movies.map((item) => (
          <Catalog data={item} />
        ))}

        <li>{element.title}</li>
        {/* <div className="card-list"></div> */}
      </div>   
    </div>
  );
}

export default GameList;
