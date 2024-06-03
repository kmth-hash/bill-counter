import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Homepage from "./Homepage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand mx-2" href="#">
        Bootstrap
      </a>
    </nav>
    <Homepage />
  </>
);
