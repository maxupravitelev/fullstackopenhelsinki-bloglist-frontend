import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { logoutUser } from '../reducers/userReducer'

import { AppBar, Toolbar, Button } from '@material-ui/core'


const Menu = () => {
  const dispatch = useDispatch()



  const linkStyle = {
    paddingRight: 5
  }

  const menuStyle = {
    backgroundColor: 'lightgray'
  }

  const user = useSelector(state => state.user)
  const username = user.username

  return (
    <div>
      {/* <Link style={padding} to="/">home</Link>
      <Link style={linkStyle} to="/blogs">blogs</Link>
      <Link style={linkStyle} to="/users">users</Link>

      {username} logged in

      <button onClick={() => {
        window.localStorage.removeItem('loggedBlogAppUser')
        window.localStorage.clear()
        dispatch(logoutUser())
      }}>Log out</button> */}

      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/blogs">
      BLOGS
          </Button>
          <Button color="inherit" component={Link} to="/users">
      USERS
          </Button>

          {username} logged in

          <Button color="inherit" onClick={() => {
            window.localStorage.removeItem('loggedBlogAppUser')
            window.localStorage.clear()
            dispatch(logoutUser())
          }}>Log out</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Menu