import React from "react";
import "./App.css";
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const API_URL = "http://localhost:8000";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userUsername, setUserUsername] = useState("");
    const handleSetIsLoggedIn = (value) => {
      setIsLoggedIn(value);
    }
  const handleSetUserUsername = (value) => {
    setUserUsername(value);
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(`http://localhost:8000/api/auth`, {}, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        handleSetIsLoggedIn(true);
        handleSetUserUsername(res.data.username);
        console.log(res.data.username);
      })
      .catch((err) => {
        handleSetIsLoggedIn(false);
        handleSetUserUsername("");
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard 
          userUsername={userUsername} 
          setIsLoggedIn={handleSetIsLoggedIn} 
          handleSetUserUsername={handleSetUserUsername}
        />
      ) : (
          <Authentication 
            setIsLoggedIn={handleSetIsLoggedIn}
            setUserUsername={handleSetUserUsername}
          />
      )}
    </div>
  );
}

export default App;
