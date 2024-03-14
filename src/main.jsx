import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter hashType="hashbang">
      <App />
    </HashRouter>
  </React.StrictMode>,
);
