import "./App.css";
// import "./Pages/Catalog"
import Catalog from "./Pages/Catalog";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {useState} from "react";

function App() {
  const [num, setNum] = useState(2)

  return (
    // <div className="main"></div>
    <Catalog />
  )
}


export default App;
