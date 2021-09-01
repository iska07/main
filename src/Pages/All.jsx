import "../Style.css";
import { useState, useEffect } from "react";
import Catalog from "./Catalog"

function All() {
  const [catalog, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games?category=shooter')
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
        </div>

         {catalog.map((al) => (
          <Catalog data={al} />
        ))}
      </div>   
    </div>
  );
}

export default All
