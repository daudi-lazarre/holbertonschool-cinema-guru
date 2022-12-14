import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faSearch, faKey, faSignOutAlt, faFolder,
  faStar, faChartLine, faCalendar, faClock, faArrowRight,
  faArrowLeft, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faSearch, faKey, faSignOutAlt, faFolder,
  faStar, faChartLine, faCalendar, faClock, faArrowRight, faArrowLeft, faBars, faXmark);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
