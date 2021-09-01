import Catalog from "./Pages/Catalog";
import "./Style.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Pages/header";
import All from "./Pages/All";

function App() {
  const [num, setNum] = useState(2);

  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <All />
      </BrowserRouter>
      <div className="container">
        
      </div>
    </div>
  );
}

export default App;
