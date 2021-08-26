import Catalog from "./Pages/Catalog";
import "./Style.css"
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Pages/header";
// import GameList from "./Pages/GameList"
import {useState} from "react";


function App() {
  const [num, setNum] = useState(2)

  return (
    // <div className="main"></div>
    <Catalog />
  )
}


export default App;
