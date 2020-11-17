import React from 'react'

import { useSelector } from 'react-redux'

import {
  useParams
} from 'react-router-dom'

const User = ( ) => {
  const id = useParams().id
  let users = useSelector(state => state.users)
  const user = users.find(user => user._id === id)

//   console.log(id)
//   console.log(user)
//   console.log(users)

  if (!user) {
    return null
  }

  return (
    <div>
      <h2>{user.username}</h2>
      {user.blogs.map((blog) => (
        <li key={blog.title + blog.author}>
          {blog.title}
        </li>
      ))}
    </div>

  )
}

export default User