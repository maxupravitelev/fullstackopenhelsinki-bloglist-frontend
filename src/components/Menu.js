import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'
import { AppBar, Toolbar, Button } from '@material-ui/core'


const Menu = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const username = user.username

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/blogs">
      BLOGS
          </Button>
          <Button color="inherit" component={Link} to="/users">
      USERS
          </Button>

          <em>{username} logged in</em>

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