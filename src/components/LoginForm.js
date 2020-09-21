import React from "react";
// import Notification from "./components/Notification";

const LoginForm = ({ username, password, handleUsernameChange, handlePasswordChange, handleLogin}) => {
  
  return (
    <div>
      <h1>Login</h1>
      {/* <Notification message={errorMessage} styleMessage={notificationStyle} /> */}
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm
