import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'


const Menu = ({ setUser }) => {
  const linkStyle = {
    paddingRight: 5
  }

  const menuStyle = {
    backgroundColor: 'lightgray'
  }

  const user = useSelector(state => state.user)
  const username = user.username

  return (
    <div style={menuStyle}>
      {/* <Link style={padding} to="/">home</Link> */}
      <Link style={linkStyle} to="/blogs">blogs</Link>
      <Link style={linkStyle} to="/users">users</Link>
      
              {username} logged in
              
              <button onClick={() => {
                window.localStorage.removeItem('loggedBlogAppUser')
                window.localStorage.clear()
                setUser(null)
              }}>Log out</button>
            
    </div>
  )
}

export default Menu