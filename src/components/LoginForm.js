import React from "react";
// import Notification from "./components/Notification";

const LoginForm = ({ username, password, handleUsernameChange, handlePasswordChange, handleLogin}) => {
  // const LoginForm = ({
  //    handleSubmit,
  //    handleUsernameChange,
  //    handlePasswordChange,
  //    username,
  //    password
  //   }) => {
  //   return (
  //     <div>
  //       <h2>Login</h2>

  //       <form onSubmit={handleSubmit}>
  //         <div>
  //           username
  //           <input
  //             value={username}
  //             onChange={handleUsernameChange}
  //           />
  //         </div>
  //         <div>
  //           password
  //           <input
  //             type="password"
  //             value={password}
  //             onChange={handlePasswordChange}
  //           />
  //       </div>
  //         <button type="submit">login</button>
  //       </form>
  //     </div>
  //   )

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
