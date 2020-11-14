
import React, { useState } from 'react'
// import blogService from '../services/blogs'

import { useDispatch, useSelector } from 'react-redux'

import { setNotification } from '../reducers/notificationReducer'
import { like } from '../reducers/blogReducer'


//     {blogs.map((blog, index) => (
//       <Blog key={blog.id} blog={blog} addLike={addLike} index={index} removeBlog={removeBlog}/>
//     ))}

const Blog = ({ blog, addLike }) => {
  return(
    <li>
      {blog.title}
      {blog.author}
      {blog.url}
      {blog.likes} <button onClick={() => addLike(blog)}>like</button>
    </li>
  )
}

const Bloglist = () => {
  
  const dispatch = useDispatch()

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

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

    <div style={blogStyle} className='blog'>
      <h2>blogs</h2>
      {blogs.map((blog, index) => (
        <Blog key={blog.id} blog={blog} addLike={addLike} index={index} removeBlog={removeBlog}/>
      ))}
    </div>

  )
}

export default Bloglist