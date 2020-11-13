
import React, { useState } from 'react'
// import blogService from '../services/blogs'

import { useDispatch, useSelector } from 'react-redux'

import { setNotification } from '../reducers/notificationReducer'
import { like } from '../reducers/blogReducer'

const Blog = ({ blog, addLike }) => {
  return(
    <li>
      {blog.title}
      {blog.author}
      {blog.url}
      {blog.likes} <button onClick={() => addLike(blog)}>vote</button>
    </li>
  )
}

const Bloglist = () => {
  const dispatch = useDispatch()

  const blogs = useSelector(state => state.blogs)

  console.log(blogs)

  const addLike = (blog) => {
    dispatch(like(blog))

    dispatch(setNotification(`you voted '${blog.content}'`, 2, 'green'))

  }

  const removeBlog = () => {
      //
  }

  return (

    <div>
      <h2>blogs</h2>
      {blogs.map((blog, index) => (
        <Blog key={blog.id} blog={blog} addLike={addLike} index={index} removeBlog={removeBlog}/>
      ))}
    </div>

  )
}

export default Bloglist