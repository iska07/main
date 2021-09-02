import React from "react";
import { Link } from "react-router-dom";

// const Catalog = () => {
//   const number = 5;
//   const fn = () => {
//     return { number: number };
//   };
//   return <button onClick={() => fn()}>Нажать сюда</button>;
// };
// const link = 'https://image.tmdb.org/t/p/w500'

function Catalog (props) {
    
    return (
      <div className="Catalog">
        <Link to={'/movie/' + props.data.id}>
          <img src={props.data.thumbnail} alt="" />
          <h1>{props.data.title}</h1>
          <p>{props.data.genre}</p>
        </Link>
      </div>
    );
  }

export default Catalog