import "../Style.css";
// import movie from "../movie.json";
import { useState, useEffect } from "react";
import Catalog from "./Catalog"
import { Link, useParams } from "react-router-dom";
// import movies from "./movies.json"

function GameList() {
  const link = "https://image.tmdb.org/t/p/w500";

  // const [movie, setMovie] = useState(null);

  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games" + id)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  // fetch("https://www.freetogame.com/api/games")
  // .then((response) => {
  // response.text()
  //   return response.json(); // Error!
  // })
  // .then((data) => {
  //   console.log(data);
  // });

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
        {/* <div className="card-list"></div> */}
      </div>
    </div>
  );
}

export default GameList;
