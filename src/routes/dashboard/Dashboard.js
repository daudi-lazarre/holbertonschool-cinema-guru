import React from "react";
import "./dashboard.css";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";
import HomePage from "./HomePage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function Dashboard({ userUsername, setIsLoggedIn, handleSetUserUsername }) {
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  }

  return (
    <div className="dashboard-container">
      <BrowserRouter>
        <Header 
          userUsername={userUsername}
          logout={logout}
          setIsLoggedIn={setIsLoggedIn}
          handleSetUserUsername={handleSetUserUsername}
        />
        <SideBar userUsername={userUsername} />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
