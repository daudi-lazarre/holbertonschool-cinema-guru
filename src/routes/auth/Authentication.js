import React from "react";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";
import axios from "axios";
import { useState } from "react";


export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSwitch(value) {
    set_switch(value);
    console.log(_switch);
    setPassword("");
    setUsername("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (_switch) {
      axios
        .post("http://localhost:8000/api/auth/login", {
          username,
          password
        })
        .then(res => {
          if (res.data.accessToken) {
            localStorage.setItem("accessToken", res.data.accessToken);
            setIsLoggedIn(true);
            setUserUsername(username);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8000/api/auth/register", {
          username,
          password
        })
        .then(res => {
          if (res.data.accessToken) {
            localStorage.setItem("accessToken", res.data.accessToken);
            setIsLoggedIn(true);
            setUserUsername(username);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit} >
        <div className="auth-form-header">
          <div
            className={_switch ? "active" : ""}
            id="headerDiv1"
            onClick={() => { handleSwitch(true) }}
          >
            Sign in
          </div>
          <div
            className={!_switch ? "active" : ""}
            id="headerDiv2"
            onClick={() => { handleSwitch(false) }}
          >
            Sign up
          </div>
        </div>
        <div className="auth-form-body">
          {_switch &&
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
          {!_switch &&
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        </div>
      </form>
    </div>
  );
}
