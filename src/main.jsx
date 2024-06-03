import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Homepage from "./Homepage";
import "./index.css";
import { BsStack } from "react-icons/bs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <nav className="navbar navbar-dark bg-dark">
      
      <a className="navbar-brand mx-3 px-3" href="#">
      <BsStack className="mx-2"/>
        Bills
      </a>
    </nav>
    <Homepage />
  </>
);
