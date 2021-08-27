import React from "react";
import { Link } from "react-router-dom";
// import GameList from "./GameList";

// const Catalog = () => {
//   const number = 5;
//   const fn = () => {
//     return { number: number };
//   };
//   return <button onClick={() => fn()}>Нажать сюда</button>;
// };
const link = 'https://image.tmdb.org/t/p/w500'

function Catalog (props) {
    const link = 'https://image.tmdb.org/t/p/w500'
  
  
    console.log(props.data)
    return (
      <div className="Catalog">
        <Link to={'/movie/' + props.data.id}>
          <img src={link + props.data.poster_path} alt="" />
          <h1>{props.data.title}</h1>
          <p>{props.data.overview}</p>
        </Link>
      </div>
    );
  }
export default Catalog