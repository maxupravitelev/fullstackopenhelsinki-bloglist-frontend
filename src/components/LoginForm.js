import React from 'react'
// import Notification from "./components/Notification";
import PropTypes from 'prop-types'

import {
  TextField, Button
} from '@material-ui/core'

const LoginForm = ({ username, password, handleUsernameChange, handlePasswordChange, handleLogin }) => {

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <TextField
            id="username"
            type="text"
            value={username}
            name="Username"
            label="username"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <TextField
            id="password"
            type="password"
            value={password}
            name="Password"
            label="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <Button variant="contained" color="primary" id="login-button" type="submit">login</Button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
