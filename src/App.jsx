import Catalog from "./Pages/Catalog";
import "./Style.css";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Pages/header";

function App() {
  const [num, setNum] = useState(2);

  return (
    <div className="main">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <div className="container">
        <Catalog />
      </div>
    </div>
  );
}

export default App;
