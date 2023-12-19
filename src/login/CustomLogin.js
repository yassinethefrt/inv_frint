// CustomLogin.js

import React, { useState } from "react";
import { Login, useLogin, useNotify } from "react-admin";
import "./Style.css";

const CustomLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useLogin();
  const notify = useNotify();
  const handleSubmit = (e) => {
    e.preventDefault();
    // will call authProvider.login({ email, password })
    login({ username, password }).catch(() =>
      notify("Invalid username or password")
    );
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomLogin;
