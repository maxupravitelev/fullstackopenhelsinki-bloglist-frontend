import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'


const Menu = ({ setUser }) => {
  const padding = {
    paddingRight: 5
  }

  const user = useSelector(state => state.user)
  const username = user.username

  return (
    <div>
      {/* <Link style={padding} to="/">home</Link> */}
      <Link style={padding} to="/blogs">blogs</Link>
      <Link style={padding} to="/users">users</Link>
      
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