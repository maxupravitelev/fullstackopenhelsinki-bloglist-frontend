import React from 'react'

import { useSelector } from 'react-redux'

import { List, ListItem } from '@material-ui/core'

import {
  useParams
} from 'react-router-dom'

const User = ( ) => {
  const id = useParams().id
  let users = useSelector(state => state.users)
  const user = users.find(user => user._id === id)

  if (!user) {
    return null
  }

  return (
    <div>
      <h2>{user.username}</h2>
      <List>
        {user.blogs.map((blog) => (
          <ListItem key={blog.title + Math.random()}>
           ■ {blog.title}
          </ListItem>
        ))}
      </List>
    </div>

  )
}

export default User