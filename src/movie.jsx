import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Movie() {
  const link = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  console.log(movie);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + id +"?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  if (!movie) return null;

  return (
      <div className="movie">
        <img src={link + movie.poster_path} alt="" />
        <div className="movie2">
          <h1>{movie.title}</h1>
          <hr />
          <p>{movie.overview}</p>
          <div className="movie3">
            <p>{movie.release_date}</p>
            <p>Оценка {movie.vote_average}</p>
          </div>
        </div>
      </div>
  );
}

export default Movie;