import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
