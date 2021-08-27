import Catalog from "./Pages/Catalog";
import "./Style.css"
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
<<<<<<< HEAD
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Pages/header";
// import GameList from "./Pages/GameList"
=======
import {useState} from "react";
>>>>>>> 236c87574fea2981d59a8695a8793775709744e7

function App() {
  const [num, setNum] = useState(2)

  return (
    // <div className="main"></div>
    <Catalog />
  )
}


export default App;
