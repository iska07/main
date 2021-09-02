import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Movie() {
  const link = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

//   const [movie, setMovie] = useState([]);        

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?category=shooter" + id)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  console.log(Product);

  if (!movie) return null;

  return (
    <div className="movie">
      <h1>{movie.title}</h1>
      <p>{movie.short_description}</p>
      <img src={link + movie.thumbnail} alt="" />
    </div>
  );
}

export default Product;
